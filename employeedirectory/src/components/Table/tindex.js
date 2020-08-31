import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import "./style.css";
import axios from "axios";



export default class Table extends Component {
    state= {
        last: [],
        first: [],
        email: [],
        picture: []
       };

       componentDidMount() {
           this.state.last
        console.log(this.state.last)
       }

       async componentDidMount() {

       }

    Table = () => {

   [rows, setRow] = useState([]);
   [columns] = useState([
    
        {
        label: 'Last',
        field: 'last',
        sort: 'dsc',
        width: 100
        },   

        {
        label: 'First',
        field: 'first',
        sort: 'dsc',
        width: 100
        },
    
        {
        label: 'Email',
        field: 'email',
        sort: 'dsc',
        width: 100
        },

        {
        label: 'Photo',
        field: 'picture',
        sort: 'dsc',
        width: 100
        },
     ]);
 

  
  render() {
    async function allEmployees() {
      
      let response = await axios.get('https://randomuser.me/api/?results=200&nat=us')
      
      let employees = response.data.results.map(employee => {
        return {
            last: employee.name.last,
            first: employee.name.first,
            email: employee.email,
            picture: <img src={employee.picture.thumbnail} alt={employee.name.first} />
        }
      });
      setRow(employees); 
    }
    allEmployees()
  }, [])

this.render()
  return (
    <MDBDataTable
      className='table'
      striped
      bordered
      data={{columns,rows}}
    />
  );
}
