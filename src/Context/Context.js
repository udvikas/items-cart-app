import { createContext, useState } from "react";

export const counterContext = createContext(null);

export const ContextProvider = (props) => {
    const [ count, setCount ] = useState(0);

    return (
        <counterContext.Provider value={{count, setCount, name:"vikas"}}>
            {props.children}
        </counterContext.Provider>
    )
}
