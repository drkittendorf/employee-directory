import React, { Component } from 'react';
import employees from '../../employees.json';
import "./style.css";

export default class Home extends Component {
    state= {
     employees

    }
    componentDidMount() {
        console.log(this.state.employees)
    }

    render() {
        
        return (
            <div className="row justify-content-center">
                <table>
                        <tr>
                            <th><h1> Name </h1></th>
                            <th><h1> Occupation </h1></th>
                            <th><h1> Location </h1></th>
                            <th><h1> Profile Picture </h1></th>
                        </tr>
                           
                    {this.state.employees.map(employees => (
                        <tr> 
                            <td>{employees.name} </td>
                            <td>{employees.occupation} </td> 
                            <td>{employees.location}</td> 
                            <td>
                                <img alt= {employees.name} width='10%' height= '10%' className="img-fluid" src= {employees.image}/>
                            </td>
                        </tr> 
                    ))}
               </table>
            </div>)
        }
}
