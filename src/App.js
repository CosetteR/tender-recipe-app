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
      procedure: ["Step1", "Step2", "Step3"]},
      {recipeName: "Name2", description: "dummy text", ingredients: ["Ingredient1", "Ingredient2", "Ingredient3"],
      procedure: ["Step1", "Step2", "Step3"]},
      {recipeName: "Name3", description: "dummy text", ingredients: ["Ingredient1", "Ingredient2", "Ingredient3"],
      procedure: ["Step1", "Step2", "Step3"]}
    ],
    showAdd: false,
    showEdit: false,
    currentIndex: 0,
    newestRecipe:{recipeName:"", description:"", ingredients:[], procedure:[]}
  }

  //Deletes a recipe
  deleteRecipe(index){
    let recipes = this.state.recipes.slice();
    recipes.splice(index, 1);
    this.setState({recipes});
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
      if(this.state.showAdd){
        this.setState({showAdd: false})
      }
      else if(this.state.showEdit){
        this.setState({showEdit: false})
      }
    }

    //Opens a modal
    open = (state, currentIndex) =>{
      this.setState({[state]: true});
      this.setState({currentIndex});
    }

    //Saves a recipe
    save(){
      let recipes = this.state.recipes.slice();
      recipes.push({
        recipeName:this.state.newestRecipe.recipeName,
        description:this.state.newestRecipe.description,
        ingredients:this.state.newestRecipe.ingredients,
        procedure:this.state.newestRecipe.procedure
      })

      this.setState({recipes});
      this.setState({newestRecipe:{recipeName:'', description:'', ingredients:[], procedure:[]}})
      this.close();
    }

    //Updates recipeName
    updateRecipeName(recipeName, currentIndex){
      let recipes = this.recipes.slice();
      recipes[currentIndex] = {
        recipeName: recipeName,
        description: recipes[currentIndex].description,
        ingredients: recipes[currentIndex].ingredients,
        procedure: recipes[currentIndex].procedure
      }
      this.setState({recipes});
    }

    render() {
      const {recipes, newestRecipe, currentIndex} = this.state;
      return (
        <div className = "App container">
        {recipes.length>0 &&(
          <div>
          <Accordion>
          {recipes.map((recipe, index)=>(
            <Card>
            <Card.Header>
            <Accordion.Toggle as ={Button} variant="link" eventKey = {index}>
            {recipe.recipeName}
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={index}>
            <Card.Body>
            {recipe.description}
            <ol>
            {recipe.ingredients.map((item)=>(
              <li key={item}>{item}</li>
            ))}
            </ol>
            <ol>
            {recipe.procedure.map((item)=>(
              <li key={item}>{item}</li>
            ))}
            </ol>
            <ButtonToolbar>
            <Button variant="default" onClick={(event)=>this.open("showEdit", index)}> Edit Recipe </Button>
            <Button variant="danger" onClick={(event)=>this.deleteRecipe(index)}>Delete Recipe</Button>
            </ButtonToolbar>
            </Card.Body>
            </Accordion.Collapse>
            </Card>
          ))}
          </Accordion>


          <Modal show={this.state.showEdit} onHide={this.close}>
          <Modal.Header closeButton>
          <Modal.Title> Edit Recipe </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form.Group controlID="formBasicText">
          <Form.Control
          type="text"
          value={recipes[currentIndex].recipeName}
          placeholder="Name"
          onChange={(event)=> this.updateRecipe(event.target.value, newestRecipe.description, newestRecipe.ingredients, newestRecipe.procedure)}/>
          </Form.Group>
          <Form.Group controlID="formControlsTextarea">
          <Form.Control
          type="text"
          value={recipes[currentIndex].description}
          placeholder="Brief Description"
          onChange={(event)=> this.updateRecipe(newestRecipe.recipeName, event.target.value, newestRecipe.ingredients, newestRecipe.procedure)}/>
          </Form.Group>
          <Form.Group controlID="formControlsTextarea">
          <Form.Control
          type="textArea"
          value={recipes[currentIndex].ingredients}
          placeholder="Ingredients (Comma Separated)"
          onChange={(event)=> this.updateRecipe(newestRecipe.recipeName, newestRecipe.description, event.target.value.split(","), newestRecipe.procedure)}/>
          </Form.Group>
          <Form.Group controlID="formControlsTextarea">
          <Form.Control
          type="textArea"
          value={recipes[currentIndex].procedure}
          placeholder="Procedure (Comma Separated)"
          onChange={(event)=> this.updateRecipe(newestRecipe.recipeName, newestRecipe.description, newestRecipe.ingredients, event.target.value.split(","))}/>
          </Form.Group>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={this.close}> Close </Button>
          <Button variant="primary" onClick={(event)=>this.save()}> Save Changes</Button>
          </Modal.Footer>
          </Modal>
        </div>
        )}

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
        type="textarea"
        value={newestRecipe.ingredients}
        placeholder="Ingredients (Comma Separated)"
        onChange={(event)=> this.updateRecipe(newestRecipe.recipeName, newestRecipe.description, event.target.value.split(","), newestRecipe.procedure)}/>
        </Form.Group>
        <Form.Group controlID="formControlsTextarea">
        <Form.Control
        type="textarea"
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

        <Button variant="primary" onClick={(event)=>this.open("showAdd")}> Add Recipe </Button>

        </div>
      );
    }
  }

  export default App;
