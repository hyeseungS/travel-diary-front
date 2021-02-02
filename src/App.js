import React from 'react';
import { createGlobalStyle } from 'styled-components';
import LoginPage from "./components/Login/LoginPage";
import MainPage from './components/MainPage';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef
    
  }
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <MainPage />
    </>
  );
}

export default App;
