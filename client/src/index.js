import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AuthState from "./context/auth/authState";
import GlobalStyle from "./styles/globalStyled";

ReactDOM.render(
  <React.Fragment>
    <AuthState>
    <GlobalStyle/>
      <App />
    </AuthState>
  </React.Fragment>,
  document.getElementById("root")
);
