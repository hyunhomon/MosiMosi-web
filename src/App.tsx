import styled, { createGlobalStyle } from "styled-components";
import { Outlet } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Outlet />
      </AppContainer>
    </>
  );
};

export default App;
