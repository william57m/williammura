import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import { Footer } from './components/Footer';
import { Header } from './components/Header';

// Pages
import { Portrait } from './pages/Portrait';
import { Landscape } from './pages/Landscape';
import { About } from './pages/About';

// CSS
import './App.css';

export default function App() {
  return (
    <Router>
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