import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "tachyons";
import "bootstrap/dist/css/bootstrap.css";
import { FavoritesContextProvider } from "./contextStore/favoritesContext";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <FavoritesContextProvider>
    <App />
  </FavoritesContextProvider>,
  document.getElementById("root")
);

// import { UserContextProvider } from "./contextStore/userContext";
//   <UserContextProvider>
//   </UserContextProvider>
