import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import './styles.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import api from '../../service/api';

import { faClock, faCalendarCheck, faCalendarXmark } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot, faPrint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function MeusEventos() {

  const [eventsData, setEventsData] = useState([])

  // TOKEM
  const accessToken = localStorage.getItem('accessToken')
  const username = localStorage.getItem('username')

  const headers = {
    'Authorization': `Bearer ${accessToken}`,
  };

  useEffect(() => {
    api.get('/api/event/v1/userevents/' + username, { headers })
      .then(response => {
        setEventsData(response.data)
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])


  return (
    <div>
      <Header />
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {

              eventsData.map(event => (

                <div className="col" key={event.id} >
                  <Link to={"/editar-evento/" + event.id} target="_blank" className="card" >
                    <div className="card-body">
                      <ul>
                        <li>
                          <h5 className="card-title">{event.eventName}</h5>
                        </li>
                        <li className="list-group-item ">
                          {<FontAwesomeIcon icon={faClock} />}<span style={{ marginLeft: 10 }}>{`${event.startDate.split('-').reverse().join('/')}`}</span>
                        </li>
                        <li className="list-group-item ">
                          {<FontAwesomeIcon icon={faLocationDot} />}<span style={{ marginLeft: 10 }}>{`${event.city}, ${event.state}`}</span>
                        </li>
                      </ul>

                    </div>

                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MeusEventos