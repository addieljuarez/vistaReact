import React from 'react';
import VistaLogin from './Login/login';
import VistaLista from "./Lista/lista";

import 'react-table/react-table.css' 

export default class Apps extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      data: [],
    }
  }


  
  render(){
    return(<div>
      <VistaLogin />
      <br></br>
      <VistaLista />
    </div>);
  }


  

  


}



 