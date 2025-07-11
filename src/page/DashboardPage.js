import React, { useEffect, useState } from "react";
import { buscarTarefas } from "../services/api";
import Dashboard from "../components/Dashboard/Dashboard";

function DashboardPage() {
  const [quantidadeTarefas, setQuantidadeTarefas] = useState(5);

  useEffect(() => {
    buscarTarefas()
      .then((tarefas) => {
        console.log("Tarefas recebidas:", tarefas); // 👈 Veja no console
        setQuantidadeTarefas(tarefas.length);
      })
      .catch((err) => console.error("Erro ao buscar tarefas:", err)); // 👈 Erros aqui
  }, []);

  return (
    <div className="dashboard">
      <Dashboard />
      <p>Total de Tarefas: {quantidadeTarefas}</p>
    </div>
  );
}

export default DashboardPage;
