/**
 * File: /Users/addielJuarez/Documents/developer/react/my-app/src/Lista/lista.js
 * Project: /Users/addielJuarez/Documents/developer/react/my-app
 * Created Date: Friday, July 5th 2019, 6:44:15 pm
 * Author: Addiel Juarez
 * -----
 * Last Modified: Fri Jul 05 2019
 * Modified By: Addiel Juarez
 * -----
 * Copyright (c) 2019 Addiel
 * ------------------------------------
 */


import React from "react";
import { thisExpression } from "@babel/types";

export default class Lista extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            texto:"",

        }

    }

    

    componentDidMount(){
        var thisGeneral=this;
        fetch('http://localhost:8888/crudPHP/index.php/API/getAllUsers',{
            method: 'GET'
        })
        .then(result => result.json())
        .then(function(resultado){
            console.log(resultado);
            thisGeneral.setState({
                texto: JSON.stringify(resultado)
            })
        })
        .catch(function(error){
            console.log(error)
        })



    }

    render(){
        return (<div>
            Algo {this.state.texto}
        </div>)
    }
}