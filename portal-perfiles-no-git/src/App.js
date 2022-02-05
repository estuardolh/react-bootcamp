import React, { Component } from 'react';
//import LoginForm from './login-form';
import './App.css';
import LoginServicio from './shared/LoginServicio.js';

class App extends Component {
  constructor(propiedades){
    super(propiedades);
    
    this.loginServicio = new LoginServicio();

    this.manejarInput = this.manejarInput.bind(this);
    this.logeadoExitoso = this.logeadoExitoso.bind(this);

    this.state = {
      usuario: "",
      contrasenia: ""
    };
  }

  logeadoExitoso(){
    alert("EXITOSO");
  }

  onLogin(){
    console.log(this.state.usuario);
    this.loginServicio.logea(this.state).then(resultado => {
      if(resultado === "OK"){
        this.logeadoExitoso();
      }
    });  
  }

  manejarInput(event){
    const target = event.target;

    const value = target.value;
    const name = target.name;

    this.setState({
        [name]: value
    });
  }

  render(){
    return (
      <div>
        Usuario: <input name="usuario" value={this.state.usuario} onChange={this.manejarInput} /><br/>
        Contrasenia: <input name="contrasenia" value={this.state.contrasenia} onChange={this.manejarInput} /><br/>
        <button onClick={() => this.onLogin()}>login</button> 
      </div>
    );
  }
}

export default App;