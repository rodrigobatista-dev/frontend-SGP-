
import React from 'react';
import './Login.css';
import treinaLogo from '../../assets/img/treina_recife_miniatura.png';
import sgpLogo from '../../assets/img/sgp_logo_vertical.png';

function Login({ onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(); // Troca para Dashboard
  };

  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <img src={treinaLogo} alt="logo treina recife" className="logo-treina-recife" />

      <form onSubmit={handleSubmit} className="formulario p-4 rounded shadow">
        <img src={sgpLogo} alt="Logo SGP" className="logo mb-3" />

        <div className="form-group position-relative mb-3">
          <input type="email" className="form-control" placeholder="E-mail" required />
          <i className="bi bi-envelope position-absolute end-0 top-50 translate-middle-y me-3"></i>
        </div>

        <div className="form-group position-relative mb-3">
          <input type="password" className="form-control" placeholder="Senha" required />
          <i className="bi bi-lock position-absolute end-0 top-50 translate-middle-y me-3"></i>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-3 text-white">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input me-1" /> Lembrar
          </label>
          {/* <a href=" " className="text-white">Esqueci minha senha</a> */}
        </div>

        <button type="submit" className="btn btn-primary w-100">Entrar</button>

        {/* <div className="text-center mt-3 text-white">
          Não tem conta? <a href=" " className="fw-bold text-white">Cadastre-se</a>
        </div> */}
      </form>
    </div>
  );
}

export default Login;
