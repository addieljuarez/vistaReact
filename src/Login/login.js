/**
 * File: /Users/addielJuarez/Documents/developer/react/my-app/src/Login/login.js
 * Project: /Users/addielJuarez/Documents/developer/react/my-app
 * Created Date: Tuesday, July 2nd 2019, 8:20:07 pm
 * Author: Addiel Juarez
 * -----
 * Last Modified: Fri Jul 05 2019
 * Modified By: Addiel Juarez
 * -----
 * Copyright (c) 2019 Addiel
 * ------------------------------------
 */


import React from 'react';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            usuario : '',
            pass: '',
        }
    }

    /**
     *
     *
     * @memberof Login
     */
    ingresar(){
        // alert('click en el boton');
        if(this.state.usuario != '' && this.state.pass !=''){
            fetch('http://localhost:8888/crudPHP/index.php/API/Login', {
                method: 'POST',
            })
            .then(result => result.json())
            .then(function(data){
                console.log('el resultado: ' + JSON.stringify(data));
            })
            .catch(function(error){

            });
        }else{
            alert('falta llenar campos');
        }
    }

    


    /**
     *
     *
     * @memberof Login
     */
    valorCampoUsuario(e){
        console.log(e.target.value);
        this.setState({
            usuario: e.target.value,
        });
    }

    valorCampoPass(_valor){
        console.log(_valor.target.value);
        this.setState({
            pass: _valor.target.value,
        });
    }

    render(){
        return(
            <div>
                <input
                    value={this.state.usuario}
                    onChange={this.valorCampoUsuario.bind(this)}
                ></input>
                <br></br>
                <input
                    value={this.state.pass}
                    onChange={this.valorCampoPass.bind(this)}
                ></input>
                <br></br>
                <button 
                    onClick={this.ingresar.bind(this)}
                >Login</button>
            </div>
        )
    }

}