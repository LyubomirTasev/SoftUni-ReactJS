import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ShopContextProvider from "./Context/ShopContext";
import { AuthProvider } from "./Context/AuthProvider.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ShopContextProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ShopContextProvider>
);
