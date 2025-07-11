import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import TarefaPage from "./page/TarefasPage";
import ProjetosPage from "./page/ProjetosPage";
import UsuariosPage from "./page/UsuariosPage";
import NovaTarefaPage from "./page/NovaTarefaPage";
import NovoProjetosPage from "./page/NovoProjetosPage";



function App() {
  const [logado, setLogado] = useState(false);

  if (!logado) {
    return <Login onLogin={() => setLogado(true)} />;
  }

  return (
    <Router>
      <Routes>
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tarefas" element={<TarefaPage />} />
        <Route path="/tarefas/nova" element={<NovaTarefaPage />} />
        <Route path="/projetos" element={<ProjetosPage />} />
        <Route path="/novo/projeto" element={<NovoProjetosPage />} />
        <Route path="/usuarios" element={<UsuariosPage />} />
        
      </Routes>
    </Router>
    
  );
}

export default App;
