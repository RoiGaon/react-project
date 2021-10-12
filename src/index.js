import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "tachyons";
import { FavoritesContextProvider } from "./contextStore/favoritesContext";
// import { UserContextProvider } from "./contextStore/userContext";
//   <UserContextProvider>
//   </UserContextProvider>
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <FavoritesContextProvider>
    <App />
  </FavoritesContextProvider>,
  document.getElementById("root")
);
