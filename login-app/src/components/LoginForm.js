import React, { Component } from 'react';

class LoginForm extends Component {
    render() {
        return (
            <div className="login-form-container" style={formStyle}>
                <h2>Login Form Component</h2>
                <form></form>
            </div>
        );
    }
}

const formStyle = {
  width: "300px",
  border: "1px solid #d6d7da",
  padding: "0px 15px 15px 15px",
  borderRadius: "5px",
  fontFamily: "arial",
  lineHeight: "16px",
  color: "#333333",
  fontSize: "14px",
  background: "#ffffff",
  margin: "100px auto"
}

export default LoginForm;