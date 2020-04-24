import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Register } from './Components/Register';
import CreateRecipe from './Components/CreateRecipe';
import {RecipeBook} from './Components/RecipeBook';
import {EditRecipe} from './Components/EditRecipe';
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
              <Route exact={true} path="/" component={RecipeBook}/>
              <Route path="edit/:id" component = {EditRecipe} />
              <Route path="/create" component={CreateRecipe} />
              <Route path="/user" component={Register} />
            </Switch>
          </Router>
          </Layout>
        </React.Fragment>
      );
    }
  }

  export default App;
