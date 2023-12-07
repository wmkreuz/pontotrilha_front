import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ModalConfirmacaoEmail } from '../../components/Modal/Modal';
import { useNavigate } from 'react-router-dom';

import Loading from '../../components/Loading'

import './styles.css'

import api from '../../service/api';
import Lottie from 'lottie-react';

function CadastroUsuario() {

    const [showConfirmacaoEmail, setShowConfirmacaoEmail] = useState(false);

    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [userName, setUserName] = useState('')
    const [fullName, setFullName] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [cadastroSucesso, setCadastroSucesso] = useState(false);


    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const togglePasswordConfirmVisibility = () => {
        setShowPasswordConfirm(!showPasswordConfirm);
    };

    const navigate = useNavigate();

    function handleShowModal() {
        setShowConfirmacaoEmail(true);
    }

    function handleCloseModal() {
        setShowConfirmacaoEmail(false);
    }

    async function createUser(e) {
        e.preventDefault()
        if (password !== passwordConfirm) {
            alert('Senhas Diferentes')
        } else {
            setIsLoading(true)
            const data = {
                userName,
                fullName,
                password,
            }
            console.log(data)
            try {
                const response = await api.post('/auth/signup', data)
                setIsLoading(false)
                alert('Usuário Cadastrado com sucesso!')
                setCadastroSucesso(true);
                localStorage.setItem('username', userName)


            } catch (error) {
                alert(error)
                console.log('Erro durante a gravação do usuário, tente novamente')
                setIsLoading(false)
            }
        }
    }

    if (cadastroSucesso) {
        navigate('login')
    }

    return (
        <div>
            {isLoading &&
                (<div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 9999,
                    width: '100%'
                }}>
                    <Lottie animationData={Loading}
                        style={{
                            width: '20%'
                        }}

                    />
                </div>)
            }
            <div className="container-fluid">

                <header className="row">
                    <div className="header-logo">
                        <div className="col-12 col-sm-12 d-flex justify-content-center align-items-center flex-column">

                            <div className="logo">
                                <img src="../../assets/T (1).png" alt="Logo ponto trilha" className="img-fluid orange-filter " />
                            </div>

                            <div className="">
                                <h1 className="text-center">
                                    Cadastre-<span className="ponto-trilha">se</span>
                                </h1>
                            </div>

                        </div>
                    </div>
                </header>

                <div className="row d-flex justify-content-center align-items-center flex-column mt-2">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                        <form onSubmit={createUser} className="form-cadastro">

                            <div className="col-12">

                                <div className="mb-3">
                                    <label htmlFor="fullName" className="form-label">Email:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={userName}
                                        id="email"
                                        aria-describedby="fullName"
                                        onChange={(text) => { setUserName(text.target.value) }}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="fullName" className="form-label">Nome Completo:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={fullName}
                                        id="fullName"
                                        aria-describedby="fullName"
                                        onChange={(text) => { setFullName(text.target.value) }}
                                    />
                                </div>


                                <div className=" mb-3">
                                    <label htmlFor="password" className="form-label">Senha:</label>
                                    <div className="input-group">

                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            className="form-control"
                                            value={password}
                                            id="password"
                                            aria-describedby="password"
                                            onChange={(text) => { setPassword(text.target.value) }}
                                        />
                                        <button type='button' className='btn btn-outline-secondary' onClick={togglePasswordVisibility}>
                                            {showPassword ?
                                                <FontAwesomeIcon icon={faEye} />
                                                :
                                                <FontAwesomeIcon icon={faEyeSlash} />
                                            }
                                        </button>
                                    </div>
                                </div>

                                <div className=" mb-3">
                                    <label htmlFor="passwordConfirm" className="form-label">Senha:</label>
                                    <div className="input-group">

                                        <input
                                            type={showPasswordConfirm ? 'text' : 'password'}
                                            className="form-control"
                                            value={passwordConfirm}
                                            id="passwordConfirm"
                                            aria-describedby="passwordConfirm"
                                            onChange={(text) => { setPasswordConfirm(text.target.value) }}
                                        />
                                        <button type='button' className='btn btn-outline-secondary' onClick={togglePasswordConfirmVisibility}>
                                            {showPasswordConfirm ?
                                                <FontAwesomeIcon icon={faEye} />
                                                :
                                                <FontAwesomeIcon icon={faEyeSlash} />
                                            }
                                        </button>
                                    </div>

                                    {passwordConfirm !== '' && password !== passwordConfirm ? (

                                        <div style={{ display: 'block' }} className="invalid-feedback">
                                            Senhas diferentes
                                        </div>
                                    ) : null}
                                </div>

                                <div className="d-grid mt-5 gap-3">
                                    <button className="btn btn-primary" type='submit'>Salvar</button>
                                    <Link to="/login" className="btn btn-light">Voltar</Link>
                                </div>


                            </div>

                        </form>

                    </div>
                </div>
            </div>
            <ModalConfirmacaoEmail showModal={showConfirmacaoEmail} onClose={handleCloseModal} />



        </div>


    )
}

export default CadastroUsuario