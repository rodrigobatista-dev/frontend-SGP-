import React from "react";
import "./Perfil.css";

function PerfilPopup({ onClose }) {
  return (
    <div className="perfil-popup-container">
      <div className="perfil-popup">
        <button className="fechar-popup" onClick={onClose}>
          &times;
        </button>
        <h5>Perfil do Usuário</h5>
        <div className="perfil-conteudo">
          <img
            src="https://via.placeholder.com/80"
            alt="Foto de perfil"
            className="foto-perfil"
          />
          <p><strong>Adrielly Sayonara</strong></p>
          <p>Email: adrielly@email.com</p>
          <p>CPF: 000.000.000-15</p>
          <p>Idade: 30 anos</p>
          <p>Status: Ativo</p>
        </div>
        <button className="btn btn-primary mt-2">Editar Perfil</button>
      </div>
    </div>
  );
}

export default PerfilPopup;
