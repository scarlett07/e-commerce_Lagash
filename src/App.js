import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//Pages
import StorePage from './Pages/StorePage';
import ShoppingCartPage from './Pages/ShoppingCartPage';
//Components
import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={StorePage}/>
          <Route exact path="/shoppingCart" component={ShoppingCartPage}/>
        </Switch>
      </div>
    );
  }
} //END App

export default App;
