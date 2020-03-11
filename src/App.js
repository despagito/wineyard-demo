import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import './App.css';

import Latest from './components/Latest';
import Block from './components/Block';
import Transaction from './components/Transaction';


export default function App() {
  return (
    <Router className="router-list">
      <Link className="router-item" to="/block/latest">Latest Block</Link>
      <Link className="router-item" to="/block/:id">Block</Link>
      <Link className="router-item" to="/transaction/:id">Transaction</Link>

        <Switch>
            <Route path="/block/latest">
            <Latest />
            </Route>

            <Route path="/block/:id">
            <Block />
            </Route>

            <Route path="/transaction/:id">
            <Transaction />
            </Route>
        </Switch>
    </Router>
  );
}