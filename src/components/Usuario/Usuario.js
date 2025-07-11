import logoHorizontal from "../../assets/img/sgp_logo_horizontal.png";
import { Link } from "react-router-dom";
import "./Usuario.css";
function Usuario() {
  return (
    <div className="dashboard d-flex ">
      {/* MENU LATERAL */}
      <aside className="menu-lateral">
        <div className="logo-container">
          <img
            src={logoHorizontal}
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

     

      {/* apartir daqui vamos criar um formulario de cadastro de usuario com nome email cpf e data de nascimento com um botao acidionar cancelar */}

      <main
        className="conteudo container"
        style={{ marginLeft: "auto", marginRight: "0", maxWidth: "900px" }}
      >
         {/* aqui vamos fazer um botao para ir para lista de usuarios outra pagina */}
         <div className="mb-3">
           <Link to="/usuarios" className="btn btn-primary">
             Voltar para Lista de Usuários
           </Link>
         </div>

        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Cadastro de Usuário</h5>
            <form className="formulario-usuario">
              <div className="form-group mb-3">
                <label htmlFor="nome" className="form-label">
                  Nome:
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="cpf" className="form-label">
                  CPF:
                </label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="data-nascimento" className="form-label">
                  Data de Nascimento:
                </label>
                <input
                  type="date"
                  id="data-nascimento"
                  name="data-nascimento"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="status" className="form-label">
                  Status:
                </label>
                <select
                  id="status"
                  name="status"
                  className="form-select"
                  required
                >
                  <option value="ativo">Ativo</option>
                  <option value="inativo">Inativo</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="senha" className="form-label">
                  Senha Temporária:
                </label>
                <div className="d-flex">
                  <input
                    type="password"
                    id="senha"
                    name="senha"
                    className="form-control me-2"
                    required
                  />
                  <button type="button" className="btn btn-outline-secondary">
                    Mostrar
                  </button>
                </div>
              </div>

              <div className="form-group mt-4 d-flex justify-content-center gap-2">
                <button type="submit" className="btn-verde me-2">
                  Adicionar
                </button>
                <button type="button" className="btn-vermelho">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Usuario;
