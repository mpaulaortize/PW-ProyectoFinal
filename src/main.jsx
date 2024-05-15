import "./styles.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

const appContainer = document.querySelector("#app");
const root = createRoot(appContainer);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
