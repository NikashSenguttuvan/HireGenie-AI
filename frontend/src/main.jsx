import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import App from "./App";
import "./index.css";

import { ResumeProvider } from "./context/ResumeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ResumeProvider>
        <Toaster position="top-right" />
        <App />
      </ResumeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
