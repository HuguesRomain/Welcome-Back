import React from 'react';
import './styles/style.scss';
import Introduction from './components/Introduction/Introduction';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
       <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.7/css/all.css"></link>
      <LandingPage />
    </div>
  );
}

export default App;
