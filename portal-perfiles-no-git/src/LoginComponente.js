import React, { Component } from 'react';
import './App.css';

class LoginComponente extends Component {
    constructor(propiedades){
        super(propiedades);
        this.state = {
            usuario: '',
            contrasenia: ''
        };
    }

    manejarInput(event){
        const target = event.target;

        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    onSubmit(){
        console.log("submit!!");
    }
}