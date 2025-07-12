import { FaFilePdf } from "react-icons/fa";
import MenuTopo from "../Layout/MenuTopo";
import { NavLink } from "react-router-dom";

function ProjetoList() {
  return (
    <MenuTopo>
      <div className="container mt-5 bg-white p-4 rounded shadow-sm">

        {/* Título e botões */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3>
            <i className="bi bi-journal-code me-2"></i>Lista de Projetos
          </h3>
          <div>
            <button className="btn btn-dark me-2">
              <FaFilePdf className="me-1" />
              Exportar PDF
            </button>
            <NavLink to="/novo-projeto" className="btn btn-success">
              + Novo Projeto
            </NavLink>
          </div>
        </div>

        {/* Filtros */}
        <div className="bg-light p-3 rounded mb-3">
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Nome do Projeto</label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite o nome"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Responsável</label>
              <input
                type="text"
                className="form-control"
                placeholder="Responsável"
              />
            </div>
          </div>
        </div>

        {/* Resultado da busca (tabela ou mensagem) */}
        <div className="table-responsive mb-3">
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th>Nome do Projeto</th>
                <th>Responsável</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="2" className="text-center text-muted">
                  Nenhum projeto encontrado
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
}

export default ProjetoList;
