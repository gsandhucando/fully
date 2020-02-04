import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import Header from './components/Header';
import ItemDisplay from './views/ItemDisplay';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
        <Header />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/item/:title" component={ItemDisplay} />
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
