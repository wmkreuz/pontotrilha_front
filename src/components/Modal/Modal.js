import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import T from '../../assets/T.png'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ModalTermos = ({ showModal, onClose }) => {
    return (
        <Modal show={showModal} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Termos de serviço</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Conteúdo da Termos de serviço */}
                <p>Aqui está o conteúdo da Termos de serviço.</p>
            </Modal.Body>
        </Modal>
    );
};

export const ModalPoliticaPrivacidade = ({ showModal, onClose }) => {
    return (
        <Modal show={showModal} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Política de Privacidade</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Conteúdo da Política de Privacidade */}
                <p>Aqui está o conteúdo da Política de Privacidade.</p>
            </Modal.Body>
        </Modal>
    );
};


export const ModalAlterarSenha = ({ showModal, onClose }) => {

    const [senhaAntiga, setSenhaAntiga] = useState('');
    const [senhaNova, setSenhaNova] = useState('');
    const [showSenhaAntiga, setShowSenhaAntiga] = useState(false);
    const [showSenhaNova, setShowSenhaNova] = useState(false);

    const handleSenhaChange = (e) => {
        e.preventDefault()
        alert('teste')
    };

    const toggleSenhaAntigaVisibility = () => {
        setShowSenhaAntiga(!showSenhaAntiga);
    };
    const toggleSenhaNovaVisibility = () => {
        setShowSenhaNova(!showSenhaNova);
    };

    return (
        <Modal centered={true} show={showModal} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Alterar Senha</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className=" mb-3">
                    <label htmlFor="senha-antiga" className="form-label">Senha Atual:</label>
                    <div className="input-group">
                        <input
                            type={showSenhaAntiga ? 'text' : 'password'}
                            className="form-control"
                            value={senhaAntiga}
                            id="senha-antiga"
                            aria-describedby="senha-antiga"
                            onChange={(text) => { setSenhaAntiga(text.target.value) }}
                        />
                        <button type='button' className='btn btn-outline-secondary' onClick={toggleSenhaAntigaVisibility}>
                            {showSenhaAntiga ?
                                <FontAwesomeIcon icon={faEye} />
                                :
                                <FontAwesomeIcon icon={faEyeSlash} />
                            }
                        </button>
                    </div>
                </div>

                <div className=" mb-3">
                    <label htmlFor="senha-nova" className="form-label">Nova Senha:</label>
                    <div className="input-group">

                        <input
                            type={showSenhaNova ? 'text' : 'password'}
                            className="form-control"
                            value={senhaNova}
                            id="senha-nova"
                            aria-describedby="senha-nova"
                            onChange={(text) => { setSenhaNova(text.target.value) }}
                        />
                        <button type='button' className='btn btn-outline-secondary' onClick={toggleSenhaNovaVisibility}>
                            {showSenhaNova ?
                                <FontAwesomeIcon icon={faEye} />
                                :
                                <FontAwesomeIcon icon={faEyeSlash} />
                            }
                        </button>
                    </div>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-primary" onClick={handleSenhaChange}>
                    Salvar
                </button>
            </Modal.Footer>
        </Modal>
    );
};


export const ModalConfirmacaoEmail = ({ showModal, onClose }) => {
    return (
        <Modal show={showModal} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>

                    <img src={T} alt="Logo ponto trilha" className="img-fluid orange-filter " />
                    Confirme seu email
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className='text-justify'>Enviamos um e-mail para você com instruções de validação. Por favor, localize-o em sua caixa de entrada e clique no link de validação. Se não encontrar na caixa de entrada, verifique a pasta de spam.</p>
            </Modal.Body>
            <Modal.Footer>
                <Link to="/login" className="btn btn-primary" data-bs-dismiss="modal">Entendido, voltar para tela de login</Link>
            </Modal.Footer>
        </Modal>
    );
};

