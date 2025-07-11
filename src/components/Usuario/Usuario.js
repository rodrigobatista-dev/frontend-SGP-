import React from "react";
import MenuTopo from "../Layout/MenuTopo";
import { FaFilePdf } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const UsuarioList = () => {
  return (
    <MenuTopo>
      <div className="container mt-5 bg-white p-4 rounded shadow-sm">
        {/* Título e os botões topo */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3>
            <i className="bi bi-people-fill me-2"></i>Lista de Usuários
          </h3>
          <div>
            <button className="btn btn-dark me-2">
              <FaFilePdf className="me-1" />
              Exportar PDF
            </button>
            <NavLink to="/novo-usuarios" className="btn btn-success">
              + Novo Usuário
            </NavLink>
          </div>
        </div>

        {/* Filtros */}
        <div className="bg-light p-3 rounded mb-3">
          <div className="row g-3">
            <div className="col-md-3">
              <label className="form-label">Nome</label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite o nome"
              />
            </div>

            <div className="col-md-3">
              <label className="form-label">CPF</label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite o CPF"
              />
            </div>

            <div className="col-md-3">
              <label className="form-label">E-mail</label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite o e-mail"
              />
            </div>

            <div className="col-md-3">
              <label className="form-label">Status</label>
              <select className="form-select">
                <option>Todos</option>
                <option>Ativo</option>
                <option>Inativo</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tabela de Usuários */}
        <div className="table-responsive mb-3">
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Email</th>
                <th>Idade</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="6" className="text-center text-muted">
                  Nenhum usuário encontrado
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Rodapé de paginação */}
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
};

export default UsuarioList;
