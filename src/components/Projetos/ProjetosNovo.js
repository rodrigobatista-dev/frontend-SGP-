import React from "react";


import { Link } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";

const ProjetosNovo = () => {
  return (
    <DashboardLayout>
      <main
        className="conteudo container"
        style={{
          marginLeft: "auto",
          marginRight: "200px",
          maxWidth: "900px",
          marginTop: "90px",
        }}
      >
        <div className="mb-3">
          <Link to="/novo/projeto" className="btn btn-primary">
            Voltar para Lista de Projetos
          </Link>
        </div>

        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Cadastro de Projetos</h5>

            <form className="formulario-projeto">
              <div className="form-group mb-3">
                <label className="form-label">Nome do Projeto:*</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="Digite o nome do projeto..."
                />
              </div>

              <div className="form-group mb-3">
                <label className="form-label">Descrição:</label>
                <textarea className="form-control" rows={3}></textarea>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Data de Criação:*</label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Data de Conclusão:*</label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="form-group mb-3">
                <label className="form-label">Status:</label>
                <select className="form-select" required>
                  <option value="">Selecione o status</option>
                  <option>Pendente</option>
                  <option>Em andamento</option>
                  <option>Concluído</option>
                  <option>Entregue</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label className="form-label">Responsável:</label>
                <input type="text" className="form-control" />
              </div>

              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="lembrete"
                />
                <label className="form-check-label" htmlFor="lembrete">
                  Definir lembrete
                </label>
              </div>

              <div className="form-group mt-4 d-flex justify-content-center gap-2">
                <button type="submit" className="btn-verde me-2">
                  Salvar
                </button>
                <button type="button" className="btn-vermelho">
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

export default ProjetosNovo;
