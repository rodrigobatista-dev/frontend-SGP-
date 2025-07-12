import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../components/Login/Login";
// import Page404 from "../pages/Page404/Page404"
import Dashboard from "../components/Dashboard/Dashboard";
import UsuarioForm from "../page/UsuarioPageForm";
import Usuario from "../page/UsuariosPage";
import TarefaForm from "../page/TarefaPageForm";
import Tarefa from "../page/TarefasPage";
import Projetos from "../page/ProjetosPage";
import ProjetoForm from "../page/ProjetosPageForm";

class Rotas extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Login action="logout" />} />

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/novo-usuarios" element={<UsuarioForm />} />
            <Route path="/usuario" element={<Usuario />} />
            <Route path="/usuario/:id" element={<Usuario />} />

            <Route path="/nova-tarefa" element={<TarefaForm />} />
            <Route path="/tarefa" element={<Tarefa />} />
            <Route path="/tarefa/:id" element={<Tarefa />} />

            <Route path="/projetos" element={<Projetos />} />
            <Route path="/novo-projeto" element={<ProjetoForm />} />
            <Route path="/projeto/:id" element={<ProjetoForm />} />

            {/* <Route path="*" element={<Page404 />} />  */}
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default Rotas;
