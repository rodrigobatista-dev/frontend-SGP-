import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoHorizontal from "../../assets/img/sgp_logo_horizontal.png";
import PerfilPopup from "../Perfil/Perfil"; 

const MenuTopo = ({ children }) => {
  const [mostrarPerfil, setMostrarPerfil] = useState(false);

  return (
    <div className="dashboard">
      <header className="menu-topo">
        <div className="logo-container">
          <img src={logoHorizontal} alt="Logo" className="logo-menu" />
        </div>

        <nav className="menu-horizontal">
          <ul className="menu-lista">
            <li className="menu-item">
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  `link-menu nav-link ${isActive ? "ativo" : ""}`
                }
              >
                <i className="bi bi-bar-chart"></i> Dashboard
              </NavLink>
            </li>

            <li className="menu-item">
              <NavLink
                to="/nova-tarefa"
                className={({ isActive }) =>
                  `link-menu nav-link ${isActive ? "ativo" : ""}`
                }
              >
                <i className="bi bi-list-task"></i> Tarefas
              </NavLink>
            </li>

            <li className="menu-item">
              <NavLink
                to="/novo-projeto"
                className={({ isActive }) =>
                  `link-menu nav-link ${isActive ? "ativo" : ""}`
                }
              >
                <i className="bi bi-journal-code"></i> Projetos
              </NavLink>
            </li>

            <li className="menu-item">
              <NavLink
                to="/novo-usuarios"
                className={({ isActive }) =>
                  `link-menu nav-link ${isActive ? "ativo" : ""}`
                }
              >
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
            <button onClick={() => setMostrarPerfil(true)}>Perfil</button>
            <button onClick={() => alert("Logout")}>Sair</button>
          </div>
        </div>
      </header>

      {/* Popup do Perfil */}
      {mostrarPerfil && <PerfilPopup onClose={() => setMostrarPerfil(false)} />}

      {/* Conteúdo da página */}
      <main className="conteudo">{children}</main>
    </div>
  );
};

export default MenuTopo;
