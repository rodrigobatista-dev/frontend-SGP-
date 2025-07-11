import { useEffect, useState } from "react";
import "./Dashboard.css";
import { buscarTarefas } from "../../service/api";
import DashboardLayout from "../Layout/DashboardLayout";

const Dashboard =() => {
  const [quantidadeBacklog, setQuantidadeBacklog] = useState(4);

  useEffect(() => {
    buscarTarefas()
      .then((tarefas) => {
        const tarefasBacklog = tarefas.filter(
          (tarefa) => tarefa.status === "BACKLOG"
        );
        setQuantidadeBacklog(tarefasBacklog.length);
      })
      .catch((err) => console.error("Erro ao buscar tarefas:", err));
  }, []);

  return (
    <DashboardLayout>

      <div className="conteudo">
        <header className="cabecalho">
          <div className="cabecalho-container">
            <h1>Dashboard</h1>
          </div>
        </header>

        <main className="painel-principal">
          <section className="cards-container">
            <div className="card-backlog">
              <i className="bi bi-text-left"></i>
              <p>{quantidadeBacklog}</p>
              <h3>Backlog</h3>
            </div>

            <div className="card-atividades">
              <i className="bi bi-wechat"></i>
              <p>0</p>
              <h3>Atividades Abertas</h3>
            </div>

            <div className="card-encerradas">
              <i className="bi bi-life-preserver"></i>
              <p>0</p>
              <h3>Encerradas</h3>
            </div>

            <div className="card-entregues">
              <i className="bi bi-cart3"></i>
              <p>0</p>
              <h3>Atividades Entregues</h3>
            </div>
          </section>
        </main>
      </div>
  
    </DashboardLayout>
  );
}

export default Dashboard;
