import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from './pages/Login'
import CadastroUsuario from "./pages/CadastroUsuario";
import EditarUsuario from "./pages/EditarUsuario";
import Home from "./pages/Home";
import Usuario from "./pages/Usuario"; 
import CadastroEvento from "./pages/CadastroEvento"; 
import Ingressos from "./pages/Ingressos";
import MeusEventos from "./pages/MeusEventos";
import Evento from "./pages/Evento";
import VerificacaoPagamento from "./pages/VerificacaoPagamento";
import EditarEvento from "./pages/EditarEvento";
import Teste from "./pages/Evento/teste";
export default function AppRoutes(){
    return(
        <BrowserRouter >
            <Routes >
                <Route path="/" element={ <Login/> } />
                <Route path="/login" element={ <Login/> } />
                <Route path="cadastro-usuario" element={ <CadastroUsuario /> } />
                <Route path="editar-conta" element={ <EditarUsuario /> } />
                <Route path="inicio" element={ <Home /> } />
                <Route path="minha-conta" element={ <Usuario /> } />
                <Route path="criar-evento" element={ <CadastroEvento /> } />
                <Route path="meus-ingressos" element={ <Ingressos /> } />
                <Route path="meus-eventos" element={ <MeusEventos /> } />
                <Route path="evento/:id" element={ <Evento /> } />
                <Route path="/verificacao-pagamento/:id/:quantity/:userName" element={ <VerificacaoPagamento /> } />
                <Route path="editar-evento/:id" element={ <EditarEvento /> } />
                <Route path="teste" element={ <Teste /> } />
                
            </Routes>
        </BrowserRouter>
    )
}