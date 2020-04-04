import React, { Component } from "react";
import "./App.css";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class App extends Component {
  state ={
    recipes: [
      {recipeName: "Name1", description: "dummy text", ingredients: ["Ingredient1", "Ingredient2", "Ingredient3"],
      procedure: ["Step1", "Step2", "Step3"]},
      {recipeName: "Name2", description: "dummy text", ingredients: ["Ingredient1", "Ingredient2", "Ingredient3"],
      procedure: ["Step1", "Step2", "Step3"]},
      {recipeName: "Name3", description: "dummy text", ingredients: ["Ingredient1", "Ingredient2", "Ingredient3"],
      procedure: ["Step1", "Step2", "Step3"]}
    ]
  }

  render() {
    const {recipes} = this.state;
    return (
      <div className = "App container">
        <Accordion>
          {recipes.map((recipe, index)=>(
          <Card>
            <Card.Header>
                <Accordion.Toggle as ={Button} variant="link" eventKey = "0">
                {recipe.recipeName}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                {recipe.description}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          ))}
        </Accordion>
      </div>
    );
  }
}

export default App;
