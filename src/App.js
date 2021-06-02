import React from 'react';
import ProductsProvider from './context/ProductsProvider';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import Buy from './components/Buy';
import Github from './components/Github';
import Favorites from './components/Favorites';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (

    <ProductsProvider>
      <Router>
        <Github />
        <div className="container">
          <section className="main">
            <Header />
            <Switch>
            <Route path="/favorites">
              <Favorites />
            </Route>
            <Route path="/">
              <ProductsList />
            </Route>
            </Switch>
          </section>
        </div>
        <Buy />
      </Router>
    </ProductsProvider>

  );
}

export default App;
