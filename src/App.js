import Rotas from "../src/routes/rotas"
//import Login from "./components/Login/Login";
import GlobalContext from "./context/GlobalContext";

function App() {
    return (
        <>
            <GlobalContext.GlobalContextProvider value={{ usuarioLogado: null, login: null, logout: null }}>
                <Rotas />
                
                
            </GlobalContext.GlobalContextProvider>
        </>
    );
}

export default App;