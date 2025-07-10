import React, { useState } from "react";
import "./Dashboard.css";
import logoHorizontal from "../../assets/img/sgp_logo_horizontal.png";
import { Link } from "react-router-dom";

function Dashboard() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => setMenuAberto(!menuAberto);
  const fecharMenu = () => setMenuAberto(false);

  return (
    <div className="dashboard">
      {/* BOTÃO HAMBÚRGUER */}
      <button className="menu-toggle" onClick={toggleMenu}>
        <i className="bi bi-list"></i>
      </button>

      {/* MENU LATERAL */}
      <aside className={`menu-lateral ${menuAberto ? "aberto" : ""}`}>
        <div className="logo-conterner">
          <img src={logoHorizontal} alt="logo" className="logo-menu-lateral" />
        </div>

        <nav className="menu">
          <ul>
            <li className="menu-item ativo">
              <Link to="/dashboard" onClick={fecharMenu}>
                <i className="bi bi-bar-chart"></i> Dashboard
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/tarefas" onClick={fecharMenu}>
                <i className="bi bi-list-task"></i> Tarefas
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/protos" onClick={fecharMenu}>
                <i className="bi bi-journal-code"></i> Projetos
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/usuarios" onClick={fecharMenu}>
                <i className="bi bi-people-fill"></i> Usuários
              </Link>
            </li>
          </ul>
        </nav>

        <div className="logout-container">
          <div className="linha-logout"></div>
          <button className="btn-logout" onClick={fecharMenu}>
            <i className="bi bi-box-arrow-right"></i> Logout
          </button>
        </div>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
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
