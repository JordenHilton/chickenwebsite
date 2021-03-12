import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
    </Router>
  );
}

export default App;
