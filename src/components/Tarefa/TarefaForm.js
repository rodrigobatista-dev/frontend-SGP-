import React from "react";


import {Link} from "react-router-dom";
import MenuTopo from "../Layout/MenuTopo";


const TarefaForm = () =>  {
  return (
    <MenuTopo>

      <main
      className="conteudo container"
      style={{
        marginLeft: "auto",
        marginRight: "200px",
        maxWidth: "900px",
        marginTop: "1px",
      }}
    >
      <div className="mb-3">
        <Link to="/tarefa" className="btn btn-primary">
          Voltar para Lista de Tarefas
        </Link>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Cadastro de Tarefa</h5>

          <form className="formulario-tarefa">
            <div className="form-group mb-3">
              <label className="form-label">Título*</label>
              <input
                type="text"
                className="form-control"
                required
                placeholder="Digite o título da tarefa..."
              />
            </div>

            <div className="form-group mb-3">
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
    
  </MenuTopo>       
  );
}

export default TarefaForm;

