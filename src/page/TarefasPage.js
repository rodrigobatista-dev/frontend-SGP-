// import React from "react";
// import Tarefa from "../components/Tarefa/Tarefa";

// function TarefaPage() {
//     return (
//         <div>
//         <h1>Página de Tarefas</h1>
//         <Tarefa />
//         </div>
//     ) 
// }

// export default TarefaPage;

// src/page/TarefasPage.js

import React from "react";
import { Link } from "react-router-dom";
import Tarefa from "../components/Tarefa/Tarefa";
function TarefasPage() {
  // Simulação de tarefas
  const tarefas = [
    {
      id: 1,
      titulo: "Reunião de Kickoff",
      descricao: "Realizar reunião de kickoff do projeto Alpha.",
      status: "Planejada",
      responsavel: "",
      projeto: "",
      dataHora: "01/01/2024 00:00",
    },
    {
      id: 2,
      titulo: "Desenvolver Módulo de Login",
      descricao: "Implementar o módulo de login no projeto Alpha.",
      status: "Em andamento",
      responsavel: "Bruno Souza",
      projeto: "Projeto Alpha",
      dataHora: "05/01/2024 09:00",
    },
  ];

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Tarefas</h2>
        <Link to="/tarefas/nova" className="btn btn-success">Nova Tarefa</Link>
      </div>

      {tarefas.map((tarefa) => (
        <Tarefa key={tarefa.id} tarefa={tarefa} />
      ))}
    </div>
  );
}

export default TarefasPage;
