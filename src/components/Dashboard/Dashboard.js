import React, { useState } from "react";
import { Bar, Pie, Line, Radar } from "react-chartjs-2";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  RadialLinearScale,
  Title,
  Tooltip,
} from "chart.js";

import MenuTopo from "../Layout/MenuTopo";
import "./Dashboard.css";

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  RadialLinearScale,
  Title,
  Tooltip
);

function Dashboard() {
  // Estados futuros para quantidades dinâmicas
  const [quantidadeBacklog] = useState(4);
  const [abertas] = useState(2);
  const [encerradas] = useState(3);
  const [entregues] = useState(1);

  // useEffect de exemplo (descomentar quando tiver a API)
  /*
  useEffect(() => {
    buscarTarefas().then((tarefas) => {
      const backlog = tarefas.filter(t => t.status === "BACKLOG");
      setQuantidadeBacklog(backlog.length);
    });
  }, []);
  */

  return (
    <MenuTopo>
      <div className="container mt-5">
        {/* Cabeçalho */}
        <div className="mb-4">
          <h1 className="text-center">Dashboard</h1>
        </div>

        {/* Cards de Status */}
        <section className="row g-2 mb-5 text-center">
          <div className="col-md-3">
            <div className="card card-backlog p-3">
              <i className="bi bi-text-left fs-2 mb-2"></i>
              <p className="fs-4">{quantidadeBacklog}</p>
              <h5>Backlog</h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card card-atividades p-3">
              <i className="bi bi-wechat fs-2 mb-2"></i>
              <p className="fs-4">{abertas}</p>
              <h5>Atividades Abertas</h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card card-encerradas p-3">
              <i className="bi bi-life-preserver fs-2 mb-2"></i>
              <p className="fs-4">{encerradas}</p>
              <h5>Encerradas</h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card card-entregues p-3">
              <i className="bi bi-cart3 fs-2 mb-2"></i>
              <p className="fs-4">{entregues}</p>
              <h5>Entregues</h5>
            </div>
          </div>
        </section>

        {/* Gráficos */}
        <section className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="card p-3">
              <h5>Gráfico de Barras</h5>
              <Bar
                data={{
                  labels: ["Janeiro", "Fevereiro", "Março"],
                  datasets: [
                    {
                      label: "Vendas",
                      data: [12, 19, 3],
                      backgroundColor: "rgba(75,192,192,0.4)",
                    },
                  ],
                }}
                options={{ responsive: true }}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="card p-3">
              <h5>Gráfico de Pizza</h5>
              <Pie
                data={{
                  labels: ["Red", "Blue", "Yellow"],
                  datasets: [
                    {
                      data: [300, 50, 100],
                      backgroundColor: ["#FF6389", "#36A2EB", "#FFCE56"],
                    },
                  ],
                }}
                options={{ responsive: true }}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="card p-3">
              <h5>Gráfico de Linhas</h5>
              <Line
                data={{
                  labels: ["Janeiro", "Fevereiro", "Março", "Abril"],
                  datasets: [
                    {
                      label: "Temperatura",
                      data: [30, 25, 28, 31],
                      fill: true,
                      backgroundColor: "rgba(53,2,85,0.4)",
                      borderColor: "#4BC9C9",
                    },
                  ],
                }}
                options={{ responsive: true }}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="card p-3">
              <h5>Gráfico de Radar</h5>
              <Radar
                data={{
                  labels: [
                    "Thing 1",
                    "Thing 2",
                    "Thing 3",
                    "Thing 4",
                    "Thing 5",
                    "Thing 6",
                  ],
                  datasets: [
                    {
                      label: "# of Votes",
                      data: [7, 9, 3, 5, 7, 4],
                      fill: true,
                      backgroundColor: "rgba(255,99,132,0.5)",
                      borderColor: "#4BC0C0",
                      borderWidth: 1,
                    },
                  ],
                }}
                options={{ responsive: true }}
              />
            </div>
          </div>
        </section>
      </div>
    </MenuTopo>
  );
}

export default Dashboard;
