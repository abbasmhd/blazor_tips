import React from 'react';
import { Header } from './Header';
import { Menu } from './Menu';


function index() {
  return (
    <div>
      <Header />
      <Menu />

      <div className="container">
        <div className="row">
          <div className="col margintopbottom">
            <h1>HOME PAGE</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
