import React, { useEffect, useState } from 'react';

import './styles.css';
import Header from '../../components/Header/Header';
import { Button } from 'react-bootstrap';
import Footer from '../../components/Footer';
import api from '../../service/api';
import exemplo from '../../assets/banner.jpg'

import { faClock, faCalendarCheck, faCalendarXmark } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot, faPrint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, } from 'react-router-dom';

function Home() {
  const [eventsData, setEventsData] = useState([])
  const accessToken = localStorage.getItem('accessToken')
  const [showMap, setShowMap] = useState(false);

  const headers = {
    'Authorization': `Bearer ${accessToken}`,
  };

  const formatDateTime = dateTimeString => {
    const dateTime = new Date(dateTimeString);
    return `${dateTime.toLocaleDateString('pt-BR')} - ${dateTime.toLocaleTimeString('pt-BR')}`;
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMap(true);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    api('/api/event/v1', { headers })
      .then(response => {
        const formattedEvents = response.data.map(event => ({
          ...event,
          formattedStartDate: formatDateTime(event.startDate)
        }));
        setEventsData(formattedEvents);
      })
      .catch(e => {
        console.log(e)
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
                  <Link to={"/evento/" + event.id} target="_blank" className="card" >
                    {showMap ? (
                      <img src={`${event.img}`} className="card-img-top" alt="..." style={{ maxWidth: 100, justifySelf: 'center', alignSelf: 'center' }} />
                    ) : (
                      <p>Carregando...</p>
                    )}
                    <div className="card-body">
                      <h5 className="card-title">{event.eventName}</h5>
                    </div>
                    <ul className="list-group list-group-flush ">

                      <li className="list-group-item ">

                        <ul className="list-group list-group-flush">
                          <li className="list-group-item ">
                            {<FontAwesomeIcon icon={faClock} />}<span style={{ marginLeft: 10 }}>{`${event.formattedStartDate}`}</span>
                          </li>
                          <li className="list-group-item ">
                            {<FontAwesomeIcon icon={faLocationDot} />}<span style={{ marginLeft: 10 }}>{`${event.city}, ${event.state}`}</span>
                          </li>
                        </ul>

                      </li>
                    </ul>
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

export default Home