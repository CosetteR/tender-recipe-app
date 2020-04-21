import React, { Component } from "react";
import "./App.css";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {ButtonToolbar} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

class Home extends Component {
  state ={
    recipes: [
    ],
    showAdd: false,
    showEdit: false,
    currentIndex: 0,
    newestRecipe:{recipeName:"", description:"", ingredients:[], procedure:[], firstAnswer:"", secondAnswer:"", thirdAnswer:""}
  }

  //Deletes a recipe
  deleteRecipe(index){
    let recipes = this.state.recipes.slice();
    recipes.splice(index, 1);
    this.setState({recipes});
  }

  //Update newest Recipe.recipeName
  updateRecipe(recipeName, description, ingredients, procedure, firstAnswer, secondAnswer, thirdAnswer){
    this.setState({
      newestRecipe:{recipeName: recipeName, description:description,
        ingredients: ingredients, procedure:procedure, firstAnswer:firstAnswer, secondAnswer:secondAnswer, thirdAnswer:thirdAnswer}
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
    save(){ //PROBLEM: WHEN YOU SAVE CHANGES A NEW RECIPE POPS UP?
      let recipes = this.state.recipes.slice();
      recipes.push({
        recipeName:this.state.newestRecipe.recipeName,
        description:this.state.newestRecipe.description,
        ingredients:this.state.newestRecipe.ingredients,
        procedure:this.state.newestRecipe.procedure,
        firstAnswer:this.state.newestRecipe.firstAnswer,
        secondAnswer:this.state.newestRecipe.secondAnswer,
        thirdAnswer:this.state.newestRecipe.thirdAnswer
      })

      this.setState({recipes});
      this.setState({newestRecipe:{recipeName:'', description:'', ingredients:[], procedure:[], firstAnswer:'', secondAnswer:'', thirdAnswer:''}})
      this.close();
    }

    //Updates recipeName
    updateRecipeName(recipeName, currentIndex){
      let recipes = this.state.recipes.slice();
      recipes[currentIndex] = {
        recipeName: recipeName,
        description: recipes[currentIndex].description,
        ingredients: recipes[currentIndex].ingredients,
        procedure: recipes[currentIndex].procedure,
        answers: recipes[currentIndex].answers,
        firstAnswer: recipes[currentIndex].firstAnswer,
        secondAnswer: recipes[currentIndex].secondAnswer,
        thirdAnswer: recipes[currentIndex].thirdAnswer
      }
      this.setState({recipes});
    }

    //Updates description
    updateDescription(description, currentIndex){
      let recipes = this.state.recipes.slice();
      recipes[currentIndex] = {
        recipeName: recipes[currentIndex].recipeName,
        description: description,
        ingredients: recipes[currentIndex].ingredients,
        procedure: recipes[currentIndex].procedure,
        firstAnswer: recipes[currentIndex].firstAnswer,
        secondAnswer: recipes[currentIndex].secondAnswer,
        thirdAnswer: recipes[currentIndex].thirdAnswer
      }
      this.setState({recipes});
    }

    updateIngredients(ingredients, currentIndex){
      let recipes = this.state.recipes.slice();
      recipes[currentIndex] = {
        recipeName: recipes[currentIndex].recipeName,
        description: recipes[currentIndex].description,
        ingredients: ingredients,
        procedure: recipes[currentIndex].procedure,
        firstAnswer: recipes[currentIndex].firstAnswer,
        secondAnswer: recipes[currentIndex].secondAnswer,
        thirdAnswer: recipes[currentIndex].thirdAnswer
      }
      this.setState({recipes});
    }

    updateProcedure(procedure, currentIndex){
      let recipes = this.state.recipes.slice();
      recipes[currentIndex] = {
        recipeName: recipes[currentIndex].recipeName,
        description: recipes[currentIndex].description,
        ingredients: recipes[currentIndex].ingredients,
        procedure: procedure,
        firstAnswer: recipes[currentIndex].firstAnswer,
        secondAnswer: recipes[currentIndex].secondAnswer,
        thirdAnswer: recipes[currentIndex].thirdAnswer
      }
      this.setState({recipes});
    }

    updateFirstAnswer(firstAnswer, currentIndex){
      let recipes = this.state.recipes.slice();
      recipes[currentIndex] = {
        recipeName: recipes[currentIndex].recipeName,
        description: recipes[currentIndex].description,
        ingredients: recipes[currentIndex].ingredients,
        procedure: recipes[currentIndex].procedure,
        firstAnswer: firstAnswer,
        secondAnswer: recipes[currentIndex].secondAnswer,
        thirdAnswer: recipes[currentIndex].thirdAnswer
      }
      this.setState({recipes});
    }

    updateSecondAnswer(secondAnswer, currentIndex){
      let recipes = this.state.recipes.slice();
      recipes[currentIndex] = {
        recipeName: recipes[currentIndex].recipeName,
        description: recipes[currentIndex].description,
        ingredients: recipes[currentIndex].ingredients,
        procedure: recipes[currentIndex].procedure,
        firstAnswer: recipes[currentIndex].firstAnswer,
        secondAnswer: secondAnswer,
        thirdAnswer: recipes[currentIndex].thirdAnswer
      }
      this.setState({recipes});
    }

    updateThirdAnswer(thirdAnswer, currentIndex){
      let recipes = this.state.recipes.slice();
      recipes[currentIndex] = {
        recipeName: recipes[currentIndex].recipeName,
        description: recipes[currentIndex].description,
        ingredients: recipes[currentIndex].ingredients,
        procedure: recipes[currentIndex].procedure,
        firstAnswer: recipes[currentIndex].firstAnswer,
        secondAnswer: recipes[currentIndex].secondAnswer,
        thirdAnswer: thirdAnswer
      }
      this.setState({recipes});
    }

    render() {
      const {recipes, newestRecipe, currentIndex} = this.state;
      return (
        <div className = "App container">
        <div className = "Intro">
          <h1> Create Your Recipe </h1>
          <p> Have an easy recipe that you're learning to make? Record the steps and share the memory with your friends and family! </p>
        </div>
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
            <div className = "description">
              <h3> Description </h3>
              {recipe.description}
            </div>
            <div className = "ingredients">
              <h3> Ingredients </h3>
              <ol>
              {recipe.ingredients.map((item)=>(
                <li key={item}>{item}</li>
              ))}
              </ol>
            </div>
            <div className = "procedure">
              <h3> Procedure </h3>
              <ol>
              {recipe.procedure.map((item)=>(
                <li key={item}>{item}</li>
              ))}
              </ol>
            </div>
            <div className = "answers">
              <div className = "firstAnswer">
                <h4> Where is this dish from? </h4>
                {recipe.firstAnswer}
              </div>
              <div className = "secondAnswer">
                <h4> What occasions are the best for this dish? </h4>
                {recipe.secondAnswer}
              </div>
              <div className = "thirdAnswer">
                <h4> Favorite memory with this dish? </h4>
                {recipe.thirdAnswer}
              </div>
            </div>
            <ButtonToolbar>
            <Button variant="secondary" onClick={(event)=>this.open("showEdit", index)}> Edit Recipe </Button>
            <Button variant="danger" onClick={(event)=>this.deleteRecipe(index)}> Delete Recipe </Button>
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
          <Form.Label> Recipe Name </Form.Label>
          <Form.Control
          type="text"
          placeholder="Name"
          onChange={(event)=> this.updateRecipeName(event.target.value, currentIndex)}/>
          </Form.Group>
          <Form.Group controlID="formControlsTextarea">
          <Form.Label> Description </Form.Label>
          <Form.Control
          type="text"
          placeholder="Brief Description"
          onChange={(event)=> this.updateDescription(event.target.value, currentIndex)}/>
          </Form.Group>
          <Form.Group controlID="formControlsTextarea">
          <Form.Label> Ingredients (comma separated) </Form.Label>
          <Form.Control
          type="textarea"
          placeholder="Ingredients (Comma Separated)"
          onChange={(event)=> this.updateIngredients(event.target.value.split(","), currentIndex)}/>
          </Form.Group>
          <Form.Group controlID="formControlsTextarea">
          <Form.Label> Procedure (comma separated) </Form.Label>
          <Form.Control
          type="textarea"
          placeholder="Procedure (Comma Separated)"
          onChange={(event)=> this.updateProcedure(event.target.value.split(","), currentIndex)}/>
          </Form.Group>
          <Form.Group controlID="formControlsTextarea">
          <Form.Label> Where is this dish from? </Form.Label>
          <Form.Control
          type="textarea"
          placeholder="This dish is from..."
          onChange={(event)=> this.updateFirstAnswer(event.target.value, currentIndex)}/>
          </Form.Group>
          <Form.Group controlID="formControlsTextarea">
          <Form.Label> What occasions are the best for this dish? </Form.Label>
          <Form.Control
          type="textarea"
          placeholder="Everyday, friends' gathering, ..."
          onChange={(event)=> this.updateSecondAnswer(event.target.value, currentIndex)}/>
          </Form.Group>
          <Form.Group controlID="formControlsTextarea">
          <Form.Label> Favorite memory with this dish </Form.Label>
          <Form.Control
          type="textarea"
          placeholder="My mom taught me to cook this dish..."
          onChange={(event)=> this.updateThirdAnswer(event.target.value, currentIndex)}/>
          </Form.Group>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={this.close}> Close (Saves Automatically) </Button>
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
        <Form.Label> Recipe Name </Form.Label>
        <Form.Control
        type="text"
        placeholder="Name"
        onChange={(event)=> this.updateRecipe(event.target.value, newestRecipe.description, newestRecipe.ingredients, newestRecipe.procedure)}/>
        </Form.Group>
        <Form.Group controlID="formControlsTextarea">
        <Form.Label> Description </Form.Label>
        <Form.Control
        type="text"
        placeholder="Brief Description"
        onChange={(event)=> this.updateRecipe(newestRecipe.recipeName, event.target.value, newestRecipe.ingredients, newestRecipe.procedure)}/>
        </Form.Group>
        <Form.Group controlID="formControlsTextarea">
        <Form.Label> Ingredients (comma separated) </Form.Label>
        <Form.Control
        type="textarea"
        placeholder="Ingredients (Comma Separated)"
        onChange={(event)=> this.updateRecipe(newestRecipe.recipeName, newestRecipe.description, event.target.value.split(","), newestRecipe.procedure)}/>
        </Form.Group>
        <Form.Group controlID="formControlsTextarea">
        <Form.Label> Procedure (comma separated) </Form.Label>
        <Form.Control
        type="textarea"
        placeholder="Procedure (Comma Separated)"
        onChange={(event)=> this.updateRecipe(newestRecipe.recipeName, newestRecipe.description, newestRecipe.ingredients, event.target.value.split(","), newestRecipe.firstAnswer, newestRecipe.secondAnswer, newestRecipe.thirdAnswer)}/>
        </Form.Group>
        <Form.Group controlID="formControlsTextarea">
        <Form.Label> Where is this dish from? </Form.Label>
        <Form.Control
        type="textarea"
        placeholder="This dish is from..."
        onChange={(event)=> this.updateRecipe(newestRecipe.recipeName, newestRecipe.description, newestRecipe.ingredients, newestRecipe.procedure, event.target.value, newestRecipe.secondAnswer, newestRecipe.thirdAnswer)}/>
        </Form.Group>
        <Form.Group controlID="formControlsTextarea">
        <Form.Label> What occasions are the best for this dish? </Form.Label>
        <Form.Control
        type="textarea"
        placeholder="Everyday, friends' gathering, ..."
        onChange={(event)=> this.updateRecipe(newestRecipe.recipeName, newestRecipe.description, newestRecipe.ingredients, newestRecipe.procedure, newestRecipe.firstAnswer, event.target.value, newestRecipe.thirdAnswer)}/>
        </Form.Group>
        <Form.Group controlID="formControlsTextarea">
        <Form.Label> Favorite memory with this dish </Form.Label>
        <Form.Control
        type="textarea"
        placeholder="My mom taught me to cook this dish..."
        onChange={(event)=> this.updateRecipe(newestRecipe.recipeName, newestRecipe.description, newestRecipe.ingredients, newestRecipe.procedure, newestRecipe.firstAnswer, newestRecipe.secondAnswer, event.target.value)}/>
        </Form.Group>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={this.close}> Close </Button>
        <Button variant="primary" onClick={(event)=>this.save()}> Save Changes</Button>
        </Modal.Footer>
        </Modal>

          <Button variant="primary" onClick={(event)=>this.open("showAdd", currentIndex)}> Add Recipe </Button>
        </div>
      );
    }
  }

  export default Home;
