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
        
    }

    muestraLista(){
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
            <br></br>
            <button
                onClick={this.muestraLista.bind(this)}
            >muestra la lista</button>
        </div>)
    }
}