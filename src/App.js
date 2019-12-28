import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Components
import { Footer } from './components/Footer';
import { Header } from './components/Header';

// Pages
import { Portrait } from './pages/Portrait';
import { Landscape } from './pages/Landscape';
import { About } from './pages/About';

// CSS
import './App.css';

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

export default function App() {
  return (
    <Router history={history}>
      <div className="App">
        <div className="contentWrapper">
          <Header />
          <Switch>
            <Route path="/" exact>
              <Portrait />
            </Route>
            <Route path="/landscapes">
              <Landscape />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
};
