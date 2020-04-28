import React from 'react';
import { Route } from "react-router-dom";
import Home from './pages/Home';
import Port from './pages/Port';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/" exact render={() => <Home />} />
      <Route path="/port" render={() => <Port />} />
    </div>
  );
}

export default App;
