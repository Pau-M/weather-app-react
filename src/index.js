import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./Weather";

import "./Weather.css";
import "./App.css";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <Weather />
      <footer>
        <a
          href="https://github.com/Pau-M/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-sourced
        </a>{" "}
        coded by Paulina Mozga
      </footer>
    </div>
  </StrictMode>
);
