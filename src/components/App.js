import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';

import Container from 'react-bootstrap/Container'

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Route path='/' exact component={Home} />
      </Container>
    </BrowserRouter>
  );
}

export default App
