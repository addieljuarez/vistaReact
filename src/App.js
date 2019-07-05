import React from 'react';
import VistaLogin from './Login/login';
import ReactTable from 'react-table'
import 'react-table/react-table.css' 

export default class Apps extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      data: [],
    }
  }


  componentDidMount(){
    fetch('http://localhost:8888/crudPHP/index.php/API/getAllUsers', {
      method: 'GET',
    })
    .then(result => result.json())
    .then(function(data){
      console.log(data);
    })
    .catch(function(error){
      console.log(error);
    });
  }


  render() {
    const data = [
      {
        name: 'Tanner Linsley',
        age: 26,
        friend: {
          name: 'Jason Maurer',
          age: 23,
        }
      }
    ]
  
    const columns = [{
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Age',
      accessor: 'age',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }, {
      id: 'friendName', // Required because our accessor is not a string
      Header: 'Friend Name',
      accessor: d => d.friend.name // Custom value accessors!
    }, {
      Header: props => <span>Friend Age</span>, // Custom header components!
      accessor: 'friend.age'
    }]
  
    return <ReactTable
      data={data}
      columns={columns}
    />
  }
  

  


}



  // render(){
  //   return(<div>
  //     <VistaLogin />
  //   </div>);
  // }
