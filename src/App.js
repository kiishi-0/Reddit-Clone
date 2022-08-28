import './App.css';
import Nav from './Components/Nav';
import TrendSection from './Components/TrendSection';
import PostSection from './Components/PostSection';
import styled from 'styled-components';
 import React from 'react';

const AppContainer = styled.div`
  padding: 0 10%;
  section{
    margin: 0 0 20px;
  }
  @media(max-width: 768px){
    padding: 0 5%;
  }
`

function App() {
  return (
    <div className="App">
      <Nav />
      <AppContainer>
        <TrendSection></TrendSection>
        <PostSection></PostSection>
      </AppContainer>
      
     </div>
  );
}

export default App;
