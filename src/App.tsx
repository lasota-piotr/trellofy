import React from "react";
import styled from "styled-components/macro";

const App: React.FC = () => {
  return (
    <AppWrapper>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React !!!
        </a>
      </header>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  color: red;
`;

export default App;
