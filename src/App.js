import React, { Component } from "react";
import "./App.css";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {ButtonToolbar} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

class App extends Component {
  state ={
    recipes: [
      {recipeName: "Name1", description: "dummy text", ingredients: ["Ingredient1", "Ingredient2", "Ingredient3"],
      procedure: ["Step1", "Step2", "Step3"]}
    ],
    showAdd: false,
    newestRecipe:{recipeName:"", description:"", ingredients:[], procedure:[]}
  }

  //Deletes a recipe
  deleteRecipe(){
    this.setState({
      newestRecipe:[]
    });
  }

  //Update newest Recipe.recipeName
  updateRecipe(recipeName, description, ingredients, procedure){
    this.setState({
      newestRecipe:{recipeName: recipeName, description:description,
      ingredients: ingredients, procedure:procedure}
    });
  }

  //Closes a modal
  close = () =>{
    this.setState({showAdd: false})
  }

  //Opens a modal
  open = () =>{
    this.setState({showAdd: true})
  }

  //Saves a recipe
  save(){
    this.setState({
      recipes: [{
        recipeName: this.state.newestRecipe.recipeName,
        description:this.state.newestRecipe.description,
        ingredients:this.state.newestRecipe.ingredients,
        procedure:this.state.newestRecipe.procedure
      }]
    })

    this.setState({newestRecipe:{recipeName:'', description:'', ingredients:[], procedure:[]}})

    this.close();
  }

  render() {
    const {recipes, newestRecipe} = this.state;
    console.log(newestRecipe);
    return (
      <div className = "App container">
        {recipes.map((recipe, index)=>(
          <Accordion>
            <Card>
              <Card.Header>
                  <Accordion.Toggle as ={Button} variant="link" eventKey = "0">
                  General
                  </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <h2> {recipe.recipeName} </h2>
                  {recipe.description}
                  <ButtonToolbar>
                    <Button variant="default">Edit Section</Button>
                  </ButtonToolbar>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as ={Button} variant="link" eventKey = "1">
                Ingredients
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <ol>
                   {recipe.ingredients.map((item)=>(
                     <li key={item}>{item}</li>
                   ))}
                  </ol>
                  <ButtonToolbar>
                    <Button variant="default">Edit Section</Button>
                  </ButtonToolbar>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as ={Button} variant="link" eventKey = "2">
                Procedure
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <ol>
                   {recipe.procedure.map((item)=>(
                     <li key={item}>{item}</li>
                   ))}
                  </ol>
                  <ButtonToolbar>
                    <Button variant="default">Edit Section</Button>
                  </ButtonToolbar>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          ))}


        <Modal show={this.state.showAdd} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title> Create Recipe </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlID="formBasicText">
              <Form.Control
              type="text"
              value={newestRecipe.recipeName}
              placeholder="Name"
              onChange={(event)=> this.updateRecipe(event.target.value, newestRecipe.description, newestRecipe.ingredients, newestRecipe.procedure)}/>
            </Form.Group>
            <Form.Group controlID="formControlsTextarea">
              <Form.Control
              type="text"
              value={newestRecipe.description}
              placeholder="Brief Description"
              onChange={(event)=> this.updateRecipe(newestRecipe.recipeName, event.target.value, newestRecipe.ingredients, newestRecipe.procedure)}/>
            </Form.Group>
            <Form.Group controlID="formControlsTextarea">
              <Form.Control
              type="text"
              value={newestRecipe.ingredients}
              placeholder="Ingredients (Comma Separated)"
              onChange={(event)=> this.updateRecipe(newestRecipe.recipeName, newestRecipe.description, event.target.value.split(","), newestRecipe.procedure)}/>
            </Form.Group>
            <Form.Group controlID="formControlsTextarea">
              <Form.Control
              type="text"
              value={newestRecipe.procedure}
              placeholder="Procedure (Comma Separated)"
              onChange={(event)=> this.updateRecipe(newestRecipe.recipeName, newestRecipe.description, newestRecipe.ingredients, event.target.value.split(","))}/>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.close}> Close </Button>
            <Button variant="primary" onClick={(event)=>this.save()}> Save Changes</Button>
          </Modal.Footer>
        </Modal>

        <Button variant="primary" onClick={(event)=>this.open()}>Create Recipe</Button>
        <Button variant="danger" onClick={(event)=>this.deleteRecipe()}>Delete Recipe</Button>

      </div>
    );
  }
}

export default App;
