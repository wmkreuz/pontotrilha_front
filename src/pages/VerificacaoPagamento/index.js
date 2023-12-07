import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

import './styles.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import { faPlus, faSubtract } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import api from '../../service/api';

function VerificacaoPagamento() {
  const { id, quantity, userName } = useParams()
  const accessToken = localStorage.getItem('accessToken')

  const [eventsData, setEventsData] = useState([])
  const navigate = useNavigate();

  const headers = {
    'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${accessToken}`,
  };
  const data = {
    username: userName,
    eventId: id,
    quantity
  };

  function comprar() {
    api.post('/api/ticket/v1', data, { headers })
      .then(response => {
        console.log(response.data.urlPayment)
        window.location.href = response.data.urlPayment
      })
      .catch(e => console.log(e))

  }

  useEffect(() => {
    api.get('/api/event/v1/' + id, { headers })

      .then(response => {
        setEventsData(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <Header />
      <main className="teste-body">
        <div >
          <h1 className='text-center fs-2 mt-5'>Revisão do pedido</h1>
        </div>
        <div className="container d-flex align-items-center flex-column rounded">
          <ul className='mt-5 fs-5 bg-info rounded p-3'>
            
            <li>Nome do evento: <b>{eventsData.eventName}</b></li>
            <li>Dia de inicio: <b>{eventsData.startDate} - {eventsData.startDateTime}</b></li>
            <li>Nome do local: <b>{eventsData.locationName}</b></li>
            <li>Ingressos: <b>{eventsData.ticketTitle}</b></li>
            <li>Valor do ingresso unitario: <b>R$ {eventsData.tickePrice}</b></li>
            <li>Quantidade solicitada:<b> {quantity}</b></li>
            <li>Valor total da compra:<b> R$ {quantity * eventsData.tickePrice}</b></li>
          </ul>
          <button onClick={comprar} className='btn btn-success mb-5 mt-3'>Confirmar pedido</button>
        </div>
      </main>
      <Footer />
    </div>

  );
}

export default VerificacaoPagamento