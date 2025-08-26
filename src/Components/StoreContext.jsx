import { createContext, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = ({children}) => {
    const url = "http://localhost:4000";
    const [token, setToken] = useState("");
  
    console.log(token)

    const contextValue = {
        token,
        url,
        setToken
    };

    return (
    <StoreContext.Provider value={contextValue}>
      {children}   {/* must exist */}
    </StoreContext.Provider>
  );
};


export default StoreContextProvider;

