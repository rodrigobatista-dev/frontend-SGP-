import React from "react";
import "./Dashboard.css";
import logoHorizontal from "../../assets/img/sgp_logo_horizontal.png";

import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">
      <aside className="menu-lateral">
        <div className="logo-conterner">
          <img
            src={logoHorizontal}
            alt="logo menu-lateral"
            className="logo-menu-lateral"
          />
        </div>

        <nav className="menu">
          <ul>
            <li className="menu-item ativo">
              <Link to={"/dashboard"}>
                <i className="bi bi-bar-chart"></i>     Dashboard
              </Link>
            </li>
            <li className="menu-item">
              <Link to={"/tarefas"}>
                <i className="bi bi-list-task"></i> Tarefas
              </Link>
            </li>
            <li className="menu-item">
              <Link to={'/protos'}>
                <i className="bi bi-journal-code"></i> Projetos
              </Link>
            </li>
            <li className="menu-item">
              <Link to={'/usuarios'}>
                <i className="bi bi-people-fill"></i> Usuários
              </Link>
            </li>
          </ul>
        </nav>

        <div className="logout-container">
          <div className="linha-logout"></div>
          <button className="btn-logout">
            <i className="bi bi-box-arrow-right"></i> Logout
          </button>
        </div>
      </aside>

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
              <p>0</p>
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
    </div>
  );
}

export default Dashboard;