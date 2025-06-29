import React, { useState } from 'react';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [logado, setLogado] = useState(false);

  return (
    <div>
      {logado
        ? <Dashboard />
        : <Login onLogin={() => setLogado(true)} />  
      }
    </div>
  );
}

export default App;
