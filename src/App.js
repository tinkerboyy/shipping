import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Login from './features/login/Login';
import ShippingLabelMaker from './features/shipping/ShippingLabelMaker';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/shipping" component={ShippingLabelMaker} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
