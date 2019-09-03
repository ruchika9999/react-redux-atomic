import React from "react";
import { withRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import MainRouter from "./MainRouter";
import ViewPort from "./ViewPort";
import theme from "./themes/default";
import "./app.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ViewPort>
        <MainRouter childProps={true} />
      </ViewPort>
    </ThemeProvider>
  );
}

export default withRouter(App);
