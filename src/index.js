import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/app/app";

const root = document.getElementById("root");
const rootInstance = createRoot(root);

rootInstance.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);



