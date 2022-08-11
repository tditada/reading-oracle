import React from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const StyledApp = styled.section`
  padding: 4em;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

const StyledMainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <>
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </>
      <StyledApp>
        <Header />
        <StyledMainContainer>
          <Content />
        </StyledMainContainer>
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
