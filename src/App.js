import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
