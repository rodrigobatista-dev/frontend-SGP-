import React, { createContext } from "react";

class GlobalContext extends React.Component {
    static GlobalContext = createContext();
    static GlobalContextProvider = GlobalContext.GlobalContext.Provider;

    constructor(props) {
        super(props);
        this.state = {
            children: props.children ? props.children : null,
            login: props.login ? props.login : null,
            logout: props.logout ? props.logout : null,
            usuarioLogado: props.usuarioLogado ? props.usuarioLogado : null,
        };

        this.state.logout
            ? (this.state.usuarioLogado = null)
            : (this.state.usuarioLogado = props.usuarioLogado);

        localStorage.setItem(
            "usuarioLogado",
            JSON.stringify(this.state.usuarioLogado)
        );
    }

    render() {
        return (
            <>
                <GlobalContext.GlobalContextProvider
                    value={[
                        this.state.usuarioLogado,
                        this.state.login,
                        this.state.logout,
                    ]}
                >
                    {this.state.children}
                </GlobalContext.GlobalContextProvider>
            </>
        );
    }
}

export default GlobalContext;
