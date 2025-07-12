// import { Link } from "react-router-dom";
// import Tarefa from "../components/Tarefa/Tarefa";
// import "./TarefasPage.css";



// function TarefasPage() {
//   return  <NovaTarefa />;
// }
// export default TarefasPage;
//   // Simulação de tarefas
//   const tarefas = [
//     {
//       id: 1,
//       titulo: "Reunião de Kickoff",
//       descricao: "Realizar reunião de kickoff do projeto Alpha.",
//       status: "Planejada",
//       responsavel: "",
//       projeto: "",
//       dataHora: "01/01/2024 00:00",
//     },
//     {
//       id: 2,
//       titulo: "Desenvolver Módulo de Login",
//       descricao: "Implementar o módulo de login no projeto Alpha.",
//       status: "Em andamento",
//       responsavel: "Bruno Souza",
//       projeto: "Projeto Alpha",
//       dataHora: "05/01/2024 09:00",
//     },
//   ];

//   return (
//     <div className="principal"
//       style={{marginTop:"100px"}}>
//     <div className="container mb-3 "
//     style={{ marginLeft: "auto", marginRight: " ", maxWidth: "900px", marginTop: "100px", }}
//     >
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <h2 className="titulo">Tarefas</h2>
//         <Link to="/tarefas/nova" className="btn btn-success">Nova Tarefa</Link>
//       </div>

//       {tarefas.map((tarefa) => (
//         <Tarefa key={tarefa.id} tarefa={tarefa} />
//       ))}
//     </div>
//     </div>
//   );
// }

// export default TarefasPage;
// src/page/TarefasPage.jsx

import Tarefas from "../components/Tarefa/Tarefa";


function TarefaPage() {
 
    return (
      <div className="tarefas-page">
        <h1>Cadastro de Tarefa</h1>
        <Tarefas />
            
        
      </div>
    );
  }
  export default TarefaPage;
