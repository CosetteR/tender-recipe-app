import React, { Component, useState } from "react";
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
      recipes:[]
    });
  }

  //Update newest Recipe.recipeName
  newRecipeName(recipeName){
    this.setState({
      newestRecipe:{recipeName: recipeName}
    });
  }

  //Closes a modal
  close = () =>{
    if (this.state.showAdd){
      this.setState({showAdd: false})
    }
  }

  //Opens a modal
  open = () =>{
    this.setState({showAdd: true})
  }

  render() {
    const {recipes, newestRecipe} = this.state;
    
    return (
      <div className = "App container">
      {recipes.map((recipe, index)=>
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
        )}

        <Modal isOpen={modalIsOpen} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title> Create Recipe </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Control type="text" value={newestRecipe.recipeName} placeholder="Name" onChange={(event)=> this.newRecipeName(event.target.value)}/>
              <Form.Control type="text" value={newestRecipe.description} placeholder="Brief Description" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.close}> Close </Button>
            <Button variant="primary" onClick={this.close}> Save Changes</Button>
          </Modal.Footer>
        </Modal>

        <Button variant="primary" onClick={(event)=>setModalIsOpen(true)}>Add Recipe</Button>
        <Button variant="danger" onClick={(event)=>this.deleteRecipe()}>Delete Recipe</Button>

      </div>
    );
  }
}

export default App;
