import React, { useState,useEffect} from 'react';
import "./styles.css";
import { useLocation} from "react-router-dom";

const DetailsTable = props => {
    return (
      <table>
      <thead>
       <div className ="details"><b>Welcome {localStorage.getItem('username')}
       </b>
       </div>
        <tr>
          {Object.keys(props.data[0]).map(header => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>
        <tbody>
          {props.data.map(row => (
            <Row column={row} />
          ))}
        </tbody>
      </table>
    );
  };

  const Row = data => {
    return (
      <tr>
        <td>{data.column.FirstName}</td>
        <td>{data.column.MiddleName}</td> 
        <td>{data.column.LastName}</td>
        </tr>
    );
  };
  
export default function  Details(props) {
 
    const PreviousPage = () =>{  
        props.history.push({ pathname: '/employeeData' });
    }
    const location = useLocation();
    useEffect(() => {
   }, [location]);
   const data = [
       {
         FirstName: location.employee? location.employee.FirstName : '',
         MiddleName: location.employee? location.employee.MiddleName: '',
         LastName: location.employee?location.employee.LastName:''
       }
   ]
    return (
            <div className="employeeDiv">
             <div className="subDiv">
             <DetailsTable data={data} />
             </div>
       <button className="search" onClick = {PreviousPage} >
          Go Back
       </button>
            </div>
    );
  }