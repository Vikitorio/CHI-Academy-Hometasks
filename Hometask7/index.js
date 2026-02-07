import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App.tsx";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
document.body.innerHTML = '<div id="app"></div>';
const root = createRoot(document.getElementById("app"));

root.render(
    <App />
);