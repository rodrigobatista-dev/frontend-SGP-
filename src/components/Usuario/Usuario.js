import { Link } from "react-router-dom";
import "./Usuario.css";
import DashboardLayout from "../Layout/DashboardLayout";


const Usuario = () => {
  return (
    <DashboardLayout>
      <main
        className="conteudo container"
        style={{
          marginLeft: "auto",
          marginRight: "200px ",
          maxWidth: "900px",
          marginTop: "90px",
        }}
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
              <div className="form-group mt-4 d-flex justify-content-center gap-3">
                <button type="submit" className="btn btn-success px-5">
                  Salvar
                </button>
                <button type="button" className="btn btn-danger px-5">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </DashboardLayout>

     

      
  
  );
}

export default Usuario;
