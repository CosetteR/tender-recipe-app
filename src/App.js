import React, { Component } from "react";
import "./App.css";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {ButtonToolbar} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Register } from './Register';
import Home from './Home';

class App extends Component {

    render() {
      return (
        <React.Fragment>
          <Router>
            <Switch>
              <Route exact={true} path="/" component={Home}/>
              <Route path="/recipe" component={Register}/>
            </Switch>
          </Router>
        </React.Fragment>
      );
    }
  }

  export default App;
