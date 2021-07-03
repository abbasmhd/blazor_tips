import React from 'react';
import Home from './Home.js';
import NotFound from './NotFound.js';

const App = ({ pageName }) => {
  if (pageName === 'Home') return <Home />;

  return <NotFound />;
};

export default App;
