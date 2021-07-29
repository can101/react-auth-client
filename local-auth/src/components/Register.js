import React, { Component } from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap';
import axios from 'axios';

export default class Register extends Component {

    state = {username:"",password:""}

    onChangeHandler=(event)=>{
      let name=event.target.name;
      let value=event.target.value;
      this.setState({[name]:value});
    }
    register=()=>{
      axios({
        method:"post",
        data:this.state,
        withCredentials:true,
        url:"http://localhost:5899/register"
      })
      .then((res)=>{
        console.log(res);
      });
    }
    onSubmitHandler=(event)=>{
      event.preventDefault();
      console.log(this.state);
      this.register();
    }
  render() {
    return (
      <div className="d-flex align-items-center justify-content-center flex-column " style={{width:"100vw",height:"100vh"}}>

      <Form style={{maxWidth:"500px"}} onSubmit={this.onSubmitHandler}>
      <h4 className="text-warning p-2 mb-3">
      Register
      </h4>
                <FormGroup className="my-4">
                  <Input  type="text" name="username" onChange={this.onChangeHandler} id="username" placeholder="username" />
                </FormGroup>
                <FormGroup className="my-4">
              <Input  type="password" name="password" onChange={this.onChangeHandler} id="password" placeholder="password" />
                </FormGroup>
                <Button type="submit" className="w-100 mt-3" color="warning">Register</Button>
      </Form>
    </div>
    )
  }
}
