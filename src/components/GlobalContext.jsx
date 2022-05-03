import { useState, createContext, useContext } from "react";

export let GlobalContext = createContext({});

export function ContextProvider({ children }) {
    let [state, setState] = useState({
        name: "",
        theme: false,
        isReadme: false,
        post: {
            head: "",
            context: ""
        }
    });

    return <GlobalContext.Provider value={[state, setState]}>
        {children}
    </GlobalContext.Provider>;
}

export { useContext };