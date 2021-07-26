import React from 'react';
import { Header } from './Header';

function NotFound() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col margintopbottom">
            <h2>Page Not Found</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
