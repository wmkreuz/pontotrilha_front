import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import './styles.css';

import Header from '../../components/Header/Header';

function Usuario() {
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    setEmail(localStorage.getItem('username'))
  }, [])

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-12 col-lg-8 col-xl-8 col-xxl-6">
            <div className="col-12">
            </div>
            <div className="col-12">
              <div className="informacoes-usuario">
                <div className="info">
                  <h2 className="nome-usuario" id="nome-usuario">
                    Rafael Silva Fernandes
                  </h2>
                  <p className="email-usuario" id="email-usuario">
                    {email}
                  </p>
                </div>
                <div className="botoes">
                  <Link className="btn btn-dark" to="/editar-conta"> Editar conta</Link>
                  <Link className="btn btn-dark"  to="/criar-evento">Criar evento</Link>
                  <Link className="btn btn-dark"  to="/meus-eventos">Meus eventos</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usuario