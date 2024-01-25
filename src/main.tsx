import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./routes";
import { Toaster } from "./components/ui/toaster";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster/>
    <Routes />
  </React.StrictMode>
);
