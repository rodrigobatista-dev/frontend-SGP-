// import React, { useEffect, useState } from "react";
// import Usuario from "../components/Usuario/Usuario"


// function UsuariosPage () {

//     const [usuarios, setUsuarios] = useState([]);

//     useEffect(() => {
//         fetch ("http://localhost:8082/usuarios")
//         .then((res) => res.json())
//         .then((data) => setUsuarios(data));

//     }, []);

//     return (
//     <div>
//       {/* Aqui poderia estar o menu e visual de cada usuário */}
//       {usuarios.map((usuario) => (
//         <Usuario key={usuario.id} usuario={usuario} />
//       ))}
//     </div>
//   );
// }

// export default UsuariosPage;

// src/page/UsuariosPage.js
import Usuario from "../components/Usuario/Usuario";

function UsuariosPage() {
  return <Usuario />;
}

export default UsuariosPage;
