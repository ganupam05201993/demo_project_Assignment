
import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./styles.css";


export default function Login(props){
    const [loginData,setLoginData]=useState({username:''});
  
    function changeLogInData(e){
      setLoginData({...loginData,[e.target.name]:e.target.value});
    }

   function  handleSubmit(event) {
        event.preventDefault();
      }
  
    function onLogIn(){
        if(loginData.username != ''){
          localStorage.setItem('username',loginData.username);
          localStorage.setItem('validUser',true);
          props.history.push({ pathname: '/employeeData'});
      }
        else{
          alert('Invalid UserName');
        }
    }
  
    return(
        <div className="Login">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="username">
            <Form.Label>UserName</Form.Label>
            <Form.Control
              value={loginData.username}
              name="username"
              onChange={ changeLogInData}
            />
          </Form.Group> 
          <Button block size="lg" type="submit" disabled= {!loginData.username} onClick = {onLogIn}>
            Login
          </Button>
        </Form>
      </div>
    )
  }