import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './styles.css'
import T from '../../assets/T.png'
import { NavDropdown } from 'react-bootstrap';
function Header() {
  return (
    <Navbar expand="lg" className="px-3 cor" >
      <Container fluid >          
      <Navbar.Brand href="/inicio" className='logo-toggle' >Ponto Trilha</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Navbar.Brand href="/inicio" className='logo-inseide-toggle'>Ponto Trilha</Navbar.Brand>
          <Nav className="me-auto d-flex justify-content-center max">
            <div className="col-lg-6 space">
              <div className=" col-6 col-lg-4 max">
                <form role="search" >
                  <div className="input-teste ">
                    <button className="botao-pesquisa" type="button">
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <input className="pesquisa ms-2" type="search" placeholder="Search" aria-label="Search" />
                  </div>
                </form>
              </div>
            </div>
          </Nav>
          <NavDropdown title="Rafael" id="basic-nav-dropdown" className='mt-3'>
            <NavDropdown.Item href="/meus-ingressos">
              Meus ingressos
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/minha-conta">
                Minha Conta
            </NavDropdown.Item>
            <NavDropdown.Item href="/login">
                Login
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header

