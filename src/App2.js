/**
 * File: /Users/addielJuarez/Documents/developer/react/my-app/src/App2.js
 * Project: /Users/addielJuarez/Documents/developer/react/my-app
 * Created Date: Friday, June 14th 2019, 4:56:34 pm
 * Author: Addiel Juarez
 * -----
 * Last Modified: Tue Jun 18 2019
 * Modified By: Addiel Juarez
 * -----
 * Copyright (c) 2019 Addiel
 * ------------------------------------
 */


import React from 'react';
import TableView from 'react-table-view';


export default class App2 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data1: [],
            columns: {},
        }
    }



    fetchData(){
        

    }

    componentWillMount(){
        // this.fetchData();   
        fetch('http://localhost:8888/crudPHP/index.php/API/getAllUsers',{
            method: 'GET'
        })
        .then(result=>result.json())
        .then(function(data) {
            console.log(data);
            this.setState({data1:data});
        })
        .catch(function(error) {
        // If there is any error you will catch them here
        });      
    }   


    render(){


        const DATA = [
            { id: 0, make: 'Honda', model: 'NSX', year: '1997' },
            { id: 1, make: 'Toyota', model: 'Supra', year: '1996' },
            { id: 2, make: 'Nissan', model: '300ZX', year: '1998' }
          ]
          /* define the look of each column, OPTIONAL */
          let COLUMNS = {
            make: function(data) {
              return <span>What an awesome year: {data.year}</span>
            },
            model: function(data) {
              return <a>{data.model}</a>
            },
            year: function(data) {
              return (
                <p style={{textAlign: 'left', margin: '0 4px'}}>
                  {`id: ${data.id}`}
                  <br />
                  {`email: ${data.email}`}
                  <br />
                  {`password: ${data.password}`}
                  <br />
                  {`address: ${data.address}`}
                  <br />
                  {`name: ${data.name}`}
                  <br />
                  {`phone: ${data.phone}`}
                  

                </p>
              )
            }
          }

        return(
            <div style={{backgroundColor:'red'}}>
                <input type='text'></input>
                <br /> 
                <input></input>
                <TableView data={this.state.data1} columns={COLUMNS} />
            </div>
        );
    }
}