import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "@presentation/App";
import { ThemeProvider } from "@mui/material";
import theme from "@presentation/styles/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
