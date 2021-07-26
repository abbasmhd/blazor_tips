import React from 'react';
import Home from './Home.js';
import NotFound from './NotFound.js';
import ReadWindowDimensions from "./articles/ReadWindowDimensions.js"

const App = ({ pageName }) => {
  if (pageName === 'Home') return <Home />;
  if (pageName === 'blazor-how-to-read-window-dimensions') return <ReadWindowDimensions />;

  return <NotFound />;
};

export default App;
