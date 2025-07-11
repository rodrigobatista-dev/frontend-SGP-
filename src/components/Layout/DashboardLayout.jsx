
import React from "react";
import { NavLink, Link } from "react-router-dom";
import logoHorizontal from "../../assets/img/sgp_logo_horizontal.png";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard">
      <header className="menu-topo">
        <div className="logo-container">
          <img src={logoHorizontal} alt="Logo" className="logo-menu" />
        </div>

        <nav className="menu-horizontal">
          <ul className="menu-lista">
            <li className="menu-item">
              <NavLink to="/dashboard" end className={({ isActive }) => (isActive ? "ativo" : "")}>
                <i className="bi bi-bar-chart"></i> Dashboard
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/tarefas" className={({ isActive }) => (isActive ? "ativo" : "")}>
                <i className="bi bi-list-task"></i> Tarefas
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/novo/projeto" className={({ isActive }) => (isActive ? "ativo" : "")}>
                <i className="bi bi-journal-code"></i> Projetos
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/usuarios" className={({ isActive }) => (isActive ? "ativo" : "")}>
                <i className="bi bi-people-fill"></i> Usuários
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="usuario-logado">
          <i className="bi bi-person-circle"></i>
          Rodrigo
          <i className="bi bi-caret-down-fill"></i>
          <div className="submenu-usuario">
            <Link to="/perfil">Perfil</Link>
            <button onClick={() => alert("Logout")}>Sair</button>
          </div>
        </div>
      </header>
      {/* Aqui entra o conteúdo da tela */}
      <main className="conteudo">{children}</main>
    </div>
  );
};

export default DashboardLayout;
