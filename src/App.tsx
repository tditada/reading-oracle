import React from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const StyledApp = styled.section`
  padding: 4em;
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
      <React.Fragment>
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </React.Fragment>
      <StyledApp>
        <Header />
        <main>
          <ToDoList />
        </main>
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
