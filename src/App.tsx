import React from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const StyledApp = styled.section`
  padding: 4em;
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
          <Main />
        </StyledMainContainer>
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
