import "./Login.css";
import treinaLogo from "../../assets/img/treina_recife_miniatura.png";
import sgpLogo from "../../assets/img/sgp_logo_vertical.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("rodrigo@email.com");
  const [senha, setSenha] = useState("123@Ro");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Validação simples só para apresentação
    if (email && senha) {
      // redireciona para dashboard
      navigate("/dashboard");
    } else {
      alert("Preencha o e-mail e a senha");
    }
  };

  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <img
        src={treinaLogo}
        alt="logo treina recife"
        className="logo-treina-recife"
      />

      <form onSubmit={handleLogin} className="formulario p-4 rounded shadow">
        <img src={sgpLogo} alt="Logo SGP" className="logo mb-3" />

        <div className="form-group position-relative mb-3">
          <input
            type="email"
            className="form-control"
            // placeholder="E-mail"
            value={email}                      // 👈 usa o estado
            onChange={(e) => setEmail(e.target.value)} // 👈 atualiza o estado
            required
          />
          <i className="bi bi-envelope position-absolute end-0 top-50 translate-middle-y me-3"></i>
        </div>

        <div className="form-group position-relative mb-3">
          <input
            type="password"
            className="form-control"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            // placeholder="Senha"
            required
          />
          <i className="bi bi-lock position-absolute end-0 top-50 translate-middle-y me-3"></i>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-3 text-white">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input me-1" /> Lembrar
          </label>
          {/* <a href=" " className="text-white">Esqueci minha senha</a> */}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Entrar
        </button>

        {/* <div className="text-center mt-3 text-white">
          Não tem conta? <a href=" " className="fw-bold text-white">Cadastre-se</a>
        </div> */}
      </form>
    </div>
  );
}

export default Login;
