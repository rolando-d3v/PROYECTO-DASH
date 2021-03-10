import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AuthState from "./context/auth/authState";

ReactDOM.render(
  <React.Fragment>
    <AuthState>
      <App />
    </AuthState>
  </React.Fragment>,
  document.getElementById("root")
);
