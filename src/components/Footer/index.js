import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <footer className="text-center text-lg-start text-white " style={{ backgroundColor: "#1c2331" }}>
            {/* <section className="d-flex justify-content-between p-4" style={{ backgroundColor: "#BF751B" }}>
                <div className="me-5">
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <Link to="" className="text-white text-decoration-none me-4"><FontAwesomeIcon icon={faSearch} /></Link>
                    <Link to="" className="text-white text-decoration-none me-4"><i className="fab fa-twitter"></i></Link>
                    <Link to="" className="text-white text-decoration-none me-4"><i className="fab fa-google"></i></Link>
                    <Link to="" className="text-white text-decoration-none me-4"><i className="fab fa-instagram"></i></Link>
                    <Link to="" className="text-white text-decoration-none me-4"><i className="fab fa-linkedin"></i></Link>
                    <Link to="" className="text-white text-decoration-none me-4"><i className="fab fa-github"></i></Link>
                </div>
            </section>

            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Ponto Trilha</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundolor: '#7c4dff', height: 2 }} />
                            
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Eventos</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                            <p><Link to="#!" className="text-white text-decoration-none">Hoje</Link></p>
                            <p><Link to="#!" className="text-white text-decoration-none">Amanhã</Link></p>
                            <p><Link to="#!" className="text-white text-decoration-none">Esta semana</Link></p>
                            <p><Link to="#!" className="text-white text-decoration-none">Este final de semana</Link></p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Links úteis</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                            <p><Link to="/inicio" className="text-white text-decoration-none">Início</Link></p>
                            <p><Link to="/minha-conta" className="text-white text-decoration-none">Minha conta</Link> </p>
                            <p><Link to="#!" className="text-white text-decoration-none">Favoritos</Link></p>
                            <p><Link to="/meus-ingressos" className="text-white text-decoration-none">Ingressos</Link></p>
                        </div>

                        
                    </div>
                </div>
            </section> */}

            <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
               Ponto Trilha
                <Link className="text-white" to="https://mdbootstrap.com/"></Link>
            </div>
        </footer>
    )
}

export default Footer