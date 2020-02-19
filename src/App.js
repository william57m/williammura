import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
  basename: '/williammura/'
});

export default function App() {
  return (
    <Router history={history} basename="/williammura/">
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
