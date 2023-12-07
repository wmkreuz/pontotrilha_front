
import './styles.css';

import Header from '../../components/Header/Header';
import { useEffect, useState } from 'react';
import { apiCep } from '../../service/apiCep';
import { InputMask } from '@react-input/mask';
import Footer from '../../components/Footer';
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ModalAlterarSenha } from '../../components/Modal/Modal';

function EditarUsuario() {
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nomeImpressoCartao, setNomeImpressoCartao] = useState('')
  const [cpf, setCpf] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cep, setCep] = useState('')
  const [endereco, setEndereco] = useState('')
  const [bairro, setBairro] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')
  const [rua, setRua] = useState('')
  const [showAlterarSenhaModal, setShowAlterarSenhaModal] = useState(false);

  useEffect(() => {
    setEmail(localStorage.getItem('username'))
  }, [])

  const checkCep = async (e) => {
    const cep = e.target.value.replace(/\D/g, '')
    apiCep(cep).then(response => {
      setRua(response.data.logradouro)
      setBairro(response.data.bairro)
      setCidade(response.data.localidade)
      setEstado(response.data.uf)
    }).catch(e => {
      console.log(e)
    })
  }



  return (
    <div>
      <Header />
      <div className="container-lg pb-5">
        <div className="row pt-5">
          <div className="col-12 border-bottom pb-3 mb-5">
            <h1 className="display-6">Minha Conta</h1>
          </div>
          <div className="col-12 col-lg-4">
            <div className="col-12 pt-3 container">

              <h2 className='mb-4'>Dados da conta</h2>
              <form className="">

                <div className="mb-3">
                  <label htmlFor="nomeCompleto" className="form-label">Nome</label>
                  <div className="input-group mb-3">
                    <input type="text"
                      className="form-control"
                      placeholder="Nome completo"
                      aria-label="nome completo"
                      aria-describedby="nome completo"
                      value={nomeCompleto}
                      disabled
                    />
                    <div className="input-group-append">
                      <button
                        className="btn bg-warning"
                        type="button">
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="nome" className="form-label">Email</label>
                  <div className="input-group mb-3">
                    <input type="text"
                      className="form-control"
                      placeholder="email"
                      aria-label="email"
                      aria-describedby="email"
                      value={email}
                      disabled
                    />
                    <div className="input-group-append">
                      <button
                        className="btn bg-warning"
                        type="button">
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="nome" className="form-label">Senha</label>
                  <div className="input-group mb-3">
                    <input type="password"
                      className="form-control"
                      placeholder="Senha"
                      aria-label="senha"
                      aria-describedby="senha"
                      value={password}
                      disabled
                    />
                    <div className="input-group-append">
                      <button
                        className="btn bg-warning"
                        type="button"
                        onClick={() => setShowAlterarSenhaModal(true)}

                        >
                        <FontAwesomeIcon
                          icon={faEdit}
                        />
                      </button>
                    </div>
                  </div>

                </div>
              </form>
            </div>
          </div>

          <div className="container-fluid col-12 col-lg-8 pt-3">
            <h2 className='mb-5'>Dados de Compra</h2>
            <form className="">
              <div className="row g-3">
                <div className="form-floating col-12">
                  <input type="text" className="form-control" value={nomeImpressoCartao} id="nomeImpressoCartao" placeholder="Nome impresso no cartão" onChange={(text) => setNomeImpressoCartao(text.target.value)} />
                  <label htmlFor="nomeImpressoCartao" className="event-label">Nome impresso no cartão</label>
                </div>
                <div className="form-floating col-6">
                  <InputMask className="form-control" placeholder="CPF" value={cpf} id="cpf" mask="___.___.___-__" replacement={{ _: /\d/ }} onChange={(text) => setCpf(text.target.value)} />
                  <label htmlFor="cpf" className="event-label">CPF</label>
                </div>
                <div className="form-floating col-6">
                  <InputMask className="form-control" placeholder="Telefone" value={telefone} id="telefone" mask="(__) _ ____-____" replacement={{ _: /\d/ }} onChange={(text) => setTelefone(text.target.value)} />
                  <label htmlFor="telefone" className="event-label">Telefone</label>
                </div>
                <div className="form-floating col-12">
                  <input type="date" className="form-control" value={dataNascimento} id="dataNascimento" placeholder="Rua, Avenida, Alameda..." onChange={(text) => setDataNascimento(text.target.value)} />
                  <label htmlFor="dataNascimento" className="event-label">Data de nascimento</label>
                </div>

                <div className="form-floating col-6">
                  <InputMask className="form-control" placeholder="CEP" id="cep" mask="_____-___" replacement={{ _: /\d/ }} onBlur={checkCep} />
                  <label htmlFor="cep" className="event-label">CEP</label>
                </div>
                <div className="form-floating col-6">
                  <input type="number" className="form-control" value={numero} id="numero" placeholder="Nº" onChange={(text) => setNumero(text.target.value)} />
                  <label htmlFor="numero" className="event-label">Numero</label>
                </div>
                <div className="form-floating col-12">
                  <input type="text" className="form-control" value={rua} id="rua" placeholder="Rua, Avenida, Alameda..." onChange={(text) => setRua(text.target.value)} />
                  <label htmlFor="rua" className="event-label">Rua</label>
                </div>
                <div className="form-floating col-12">
                  <input type="text" className="form-control" value={bairro} id="bairro" placeholder="Bairro Exemplo" onChange={(text) => setBairro(text.target.value)} />
                  <label htmlFor="bairro" className="event-label">Bairro</label>
                </div>
                <div className="form-floating col-12">
                  <input type="text" className="form-control" value={cidade} id="cidade" placeholder="Cidade Exemplo" onChange={(text) => setCidade(text.target.value)} />
                  <label htmlFor="cidade" className="event-label">Cidade</label>
                </div>
                <div className="form-floating col-12">
                  <input type="text" className="form-control" value={estado} id="estado" placeholder="Estado" onChange={(text) => setEstado(text.target.value)} />
                  <label htmlFor="estado" className="event-label">Estado</label>
                </div>

                <div className="form-floating col-12">
                  <input type="text" className="form-control" value={complemento} id="complemento" placeholder="Complemento" onChange={(text) => setComplemento(text.target.value)} />
                  <label htmlFor="complemento" className="event-label">Complemento</label>
                </div>

                <div className="col-12 d-flex justify-content-end">
                  <button className='btn btn-primary btn-lg'>Salvar dados</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <ModalAlterarSenha showModal={showAlterarSenhaModal} onClose={() => setShowAlterarSenhaModal(false)} />

    </div>

  );
}

export default EditarUsuario


