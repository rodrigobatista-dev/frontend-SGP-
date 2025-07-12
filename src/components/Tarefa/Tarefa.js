// import "./tarefa.css"; //
import React from "react";
import MenuTopo from "../Layout/MenuTopo";
import { FaBroom, FaFilter, FaFilePdf } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function TarefasList() {
  
  return (
    <MenuTopo>
    <div className="container mt-5 bg-white p-4 rounded shadow-sm">
      {/* Título e botões topo */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>
          <i className="bi bi-list-task me-2"></i>Lista de Tarefas
        </h3>
        <div>
          <button className="btn btn-dark me-2">
            <FaFilePdf className="me-1" />
            Exportar PDF
          </button>
          <NavLink to="/nova-tarefa" className="btn btn-success">
            + Nova Tarefa
          </NavLink>
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-light p-3 rounded mb-3">
        <div className="row g-3 align-items-end">
          <div className="col-md-3">
            <label className="form-label">Status</label>
            <select className="form-select">
              <option>Todos</option>
              <option>Backlog</option>
              <option>Aberta</option>
              <option>Entregue</option>
              <option>Encerrada</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label">Prioridade</label>
            <select className="form-select">
              <option>Todas</option>
              <option>Baixa</option>
              <option>Média</option>
              <option>Alta</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label">Projeto</label>
            <select className="form-select">
              <option>Todos</option>
              <option>Projeto 1</option>
              <option>Projeto 2</option>
            </select>
          </div>
          <div className="col-md-3 d-flex gap-2">
            <button className="btn btn-primary">
              <FaBroom className="me-1" />
              Limpar
            </button>
            <button className="btn btn-success">
              <FaFilter className="me-1" />
              Filtrar
            </button>
          </div>
        </div>
      </div>

      {/* Tabela (ainda sem dados) */}
      <div className="table-responsive mb-3">
        <table className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Status</th>
              <th>Prioridade</th>
              <th>Projeto</th>
              <th>Responsável</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="7" className="text-center text-muted">
                Mostrando 0 de 0 registros
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Paginação */}
      <nav className="d-flex justify-content-between">
        <span className="text-muted">Mostrando 0 de 0 registros</span>
        <ul className="pagination pagination-sm mb-0">
          <li className="page-item disabled">
            <span className="page-link">Anterior</span>
          </li>
          <li className="page-item disabled">
            <span className="page-link">Próximo</span>
          </li>
        </ul>
      </nav>
    </div>
    </MenuTopo>
  );

}


export default TarefasList;
