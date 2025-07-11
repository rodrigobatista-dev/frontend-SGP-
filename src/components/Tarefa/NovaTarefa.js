import React from "react";
import LogoHorizontal from "../../assets/img/sgp_logo_horizontal.png";

import { useNavigate, Link } from "react-router-dom";


function NovaTarefa() {
  const listaTarefas = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados para API futuramente
    listaTarefas("/tarefas"); // Volta para a lista de tarefas
  };

  return (
    <div className="dashboard d-flex ">
      {/* MENU LATERAL */}
      <aside className="menu-lateral">
        <div className="logo-container">
          <img
            src={LogoHorizontal}
            alt="logo menu-lateral"
            className="logo-menu-lateral"
          />
        </div>

        <nav className="menu">
          <ul>
            <li className="menu-item ativo">
              <Link to={"/dashboard"}>
                <i className="bi bi-bar-chart"></i> Dashboard
              </Link>
            </li>
            <li className="menu-item">
              <Link to={"/tarefas"}>
                <i className="bi bi-list-task"></i> Tarefas
              </Link>
            </li>
            <li className="menu-item">
              <Link to={"/projetos"}>
                <i className="bi bi-journal-code"></i> Projetos
              </Link>
            </li>
            <li className="menu-item">
              <Link to={"/usuarios"}>
                <i className="bi bi-people-fill"></i> Usuários
              </Link>
            </li>
          </ul>
        </nav>
      </aside>


    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3"
       style={{ marginLeft: "auto", marginRight: "90px ", maxWidth: "840px", marginTop: "90px", }}
      >
        <h2>Nova Tarefa</h2>
        <button className="btn btn-danger" onClick={() => listaTarefas("/tarefas")}>
          Fechar
        </button>
      </div>

   
        

      <form  onSubmit={handleSubmit}
      style={{ marginLeft: "auto", marginRight: "10", maxWidth: "950px",  }}
      >
        
        <div className="mb-3">
            <label className="form-label">Título*</label>
            <input type="text" className="form-control" required placeholder="Digite o título da tarefa..."/>
        </div>
        <div className="mb-3">
          <label className="form-label">Título*</label>
          <input type="text" className="form-control" required placeholder="Digite o título da tarefa..." />
        </div>

        <div className="mb-3">
          <label className="form-label">Descrição</label>
          <textarea className="form-control" rows={3}></textarea>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Data e Hora *</label>
            <input type="datetime-local" className="form-control" required />
          </div>

          <div className="col-md-6">
            <label className="form-label">Status</label>
            <select className="form-select">
              <option>Planejada</option>
              <option>Em andamento</option>
              <option>Concluída</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Responsável</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Projeto</label>
            <input type="text" className="form-control" />
          </div>
        </div>

        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="lembrete" />
          <label className="form-check-label" htmlFor="lembrete">Definir lembrete</label>
        </div>

        <button type="submit" className="btn btn-success">Salvar</button>
      </form>
    </div>
    </div>
  );
}

export default NovaTarefa;

