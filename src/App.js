import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Register } from './Register';
import Home from './Home';
import {Layout} from './Components/Layout';
import {NavigationBar} from './Components/NavigationBar';


class App extends Component {

    render() {
      return (
        <React.Fragment>
        <NavigationBar />
        <Layout>
          <Router>
            <Switch>
              <Route exact={true} path="/" component={Home}/>
              <Route path="/recipe" component={Register}/>
            </Switch>
          </Router>
          </Layout>
        </React.Fragment>
      );
    }
  }

  export default App;
