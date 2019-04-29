import React, { Component } from 'react';

class LoginForm extends Component {
    state = {
        userName: '',
        password: ''
    }

    onChange = (e) => {
        console.log("onchange function called")
        this.setState({[e.target.name] : e.target.value})
    }
    render() {
        return (
            <div className="login-form-container" style={formStyle}>
                <h2>Login Form Component</h2>
                <form style={fieldStyle} >
                    <label >User Name : </label>
                    <input style={formInputStyle} 
                         type="text"
                         name="userName"
                         placeholder="username"
                         onChange={this.onChange}
                    />  
                    <br /> 
                    <label>Password : </label>
                    <input style={formInputStyle}
                         type="text"
                         name="password"
                         placeholder="password"
                    />  
                    <br />
                    <button style={btnStyle}>Submit</button> 

                </form>
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

const fieldStyle ={
    padding: "10px",
    border: "solid 1px #BDC7D8",
    display: "block",
    marginBottom: "10px",
    width: "90%"
}

const formInputStyle={
    padding: "15px",
    border: "solid 1px #BDC7D8"
}

const btnStyle={
  backgroundColor: "#00BFFF",
  borderColor: "#3ac162",
  fontWeight: "bold",
  padding: "12px 15px"
}


export default LoginForm;