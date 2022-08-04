import React from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

const StyledApp = styled.section`
  padding: 4em;
`;

function App() {

  return (
    <StyledApp>
      <Header />
      <main>
        <ToDoList />
      </main>
      <Footer />
    </StyledApp>
  );
}

export default App;
