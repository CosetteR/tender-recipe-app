import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class Register extends Component {
    constructor(props) {
      super(props);

      this.state = {
        userName: '',
        password: ''
      }
    }

    onChangeUserName(e) {
      this.setState({
        userName: e
      });
    }

    onChangePassword(e) {
      this.setState({
        password: e
      });
    }

    onSubmit = () => {
      const user = {
        userName: this.state.userName,
        password: this.state.password
      }

      console.log(user);

      //below would connect front end with back end
      //axios.post('http://localhost:5000/users/add', user)
        //.then(res => console.log(res.data));

      window.location = '/create';
    }

    render(){
      return (
        <div>
          <h2> Sign up </h2>
          <Form.Group controlID="formBasicText">
          <Form.Label> Username </Form.Label>
          <Form.Control
          type="text"
          onChange={(event)=>this.onChangeUserName(event.target.value)}/>
          </Form.Group>
          <Form.Group controlID="formBasicText">
          <Form.Label> Password </Form.Label>
          <Form.Control
          type="text"
          onChange={(event)=>this.onChangePassword(event.target.value)}/>
          </Form.Group>
          <Button variant="primary" onClick={this.onSubmit}> Create Account </Button>
        </div>
      )
    }
}
