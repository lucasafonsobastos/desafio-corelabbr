import * as React from "react";

const NotasContext = React.createContext([{}]);

export const NotasProvider = ({children}) => {
    const [notas, setNotas] = React.useState([{}]);

    console.log(notas);
    
    return (
        <NotasContext.Provider value={{ notas, setNotas }} >
            {children}
        </NotasContext.Provider>
    )
}


export const useNotasContext = () =>{
    return React.useContext(NotasContext);
}