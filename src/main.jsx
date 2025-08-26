import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import StoreContextProvider from "./Components/StoreContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <React.StrictMode>
    <StoreContextProvider>
       <App />
     </StoreContextProvider>
  </React.StrictMode>
   </BrowserRouter>
);
