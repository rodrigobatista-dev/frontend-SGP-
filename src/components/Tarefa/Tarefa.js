// import React from "react";
// import "./tarefa.css";
// import logoHorizontal from "../../assets/img/sgp_logo_horizontal.png";
// import { Link } from "react-router-dom";

// function Tarefa() {
//   return (
  
//       <div className="dashboard">
//       <aside className="menu-lateral">
//         <div className="logo-conterner">
//           <img
//             src={logoHorizontal}
//             alt="logo menu-lateral"
//             className="logo-menu-lateral"
//           />
//         </div>

//         <nav className="menu">
//           <ul>
//             <li className="menu-item ativo">
//               <Link to={"/dashboard"}>
//                 <i className="bi bi-bar-chart"></i>     Dashboard
//               </Link>
//             </li>
//             <li className="menu-item">
//               <Link to={"/tarefas"}>
//                 <i className="bi bi-list-task"></i> Tarefas
//               </Link>
//             </li>
//             <li className="menu-item">
//               <Link to={'/protos'}>
//                 <i className="bi bi-journal-code"></i> Projetos
//               </Link>
//             </li>
//             <li className="menu-item">
//               <Link to={'/usuarios'}>
//                 <i className="bi bi-people-fill"></i> Usuários
//               </Link>
//             </li>
//           </ul>
//         </nav>




//         </aside>
//       </div>
   
//   );
// }
// export default Tarefa;

// src/components/Tarefa/TarefaCard.js
import React from "react";

function Tarefa({ tarefa }) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{tarefa.titulo}</h5>
        <p className="mb-1"><strong>{tarefa.dataHora}</strong></p>
        <p><strong>Descrição:</strong> {tarefa.descricao}</p>
        <p><strong>Status:</strong> {tarefa.status}</p>
        <p><strong>Atribuído a:</strong> {tarefa.responsavel || "—"}</p>
        <p><strong>Projeto:</strong> {tarefa.projeto || "—"}</p>
        <div>
          <button className="btn btn-primary me-2">Editar</button>
          <button className="btn btn-danger">Excluir</button>
        </div>
      </div>
    </div>
  );
}

export default Tarefa;

