// src/page/NovaTarefaPage.js
import React from "react";
import { useNavigate } from "react-router-dom";

function NovaTarefaPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados para API futuramente
    navigate("/tarefas"); // Volta para a lista de tarefas
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Nova Tarefa</h2>
        <button className="btn btn-danger" onClick={() => navigate("/tarefas")}>
          Fechar
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Título *</label>
          <input type="text" className="form-control" required placeholder="Digite o título da tarefa..." />
        </div>

        <div className="mb-3">
          <label className="form-label">Descrição</label>
          <textarea className="form-control" rows="3"></textarea>
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
  );
}

export default NovaTarefaPage;
