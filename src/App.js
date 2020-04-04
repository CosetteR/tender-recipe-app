import React, { Component } from "react";
import "./App.css";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class App extends Component {
  state ={
    recipes: [
      {recipeName: "Name1", description: "dummy text", ingredients: ["Ingredient1", "Ingredient2", "Ingredient3"],
      procedure: ["Step1", "Step2", "Step3"]}
    ]
  }

  render() {
    const {recipes} = this.state;
    return (
      <div className = "App container">
      {recipes.map((recipe, index)=>
        <Accordion>
          <Card>
            <Card.Header>
                <Accordion.Toggle as ={Button} variant="link" eventKey = {index}>
                {recipe.recipeName}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={index}>
              <Card.Body>
                {recipe.description}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as ={Button} variant="link" eventKey = {index}>
              Ingredients
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={index}>
              <Card.Body>
                <ol>
                 {recipe.ingredients.map((item)=>(
                   <li key={item}>{item}</li>
                 ))}
                </ol>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as ={Button} variant="link" eventKey = {index}>
              Procedure
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={index}>
              <Card.Body>
                <ol>
                 {recipe.procedure.map((item)=>(
                   <li key={item}>{item}</li>
                 ))}
                </ol>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        )}
      </div>
    );
  }
}

export default App;
