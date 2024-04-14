import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "~s/global.css";
import "~s/root-variables.css";
import "~s/utilityStyles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
