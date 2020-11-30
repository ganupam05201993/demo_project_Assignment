import React from "react";
import { Link} from 'react-router-dom';
import "./styles.css";
import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";

const data = [
    {
      Id: 1,
      FirstName: "Camren Moore",
      MiddleName: "Wierdo Land",
      LastName: "Oud-Turnhout",
      Details: "employee"
    },
    {
      Id: 2,
      FirstName: "stewart Sharon",
      MiddleName: "Wierdo Stacy",
      LastName: "Ed-Stewart",
      Details: "student"
    },
    {
      Id: 3,
      FirstName: "Smith Mary",
      MiddleName: "Wierdo Stacy",
      LastName: "Robert-Stewart",
      Details: "student"
    },
  ]

const Row = data => {
  return (
    <tr>
      <td>{data.column.Id}</td>
      <td>{data.column.FirstName}</td>
      <td>{data.column.MiddleName}</td> 
      <td>{data.column.LastName}</td>
      <td><Link to= {{pathname: "./details", employee: { FirstName: data.column.FirstName,
       MiddleName:data.column.MiddleName, LastName: data.column.LastName}} }>{data.column.Details}</Link></td>
    </tr>
  );
};

export default function EmployeeData(props) {
  const [filterText,setFilterText]=useState('');
  const [useSearch,setuseSearch]=useState(false);
    
 const EmployeeTable = props => {
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0]).map(header => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>
       <tbody>
          {props.data.filter(col => col.FirstName.toLowerCase().includes(filterText.toLowerCase())|| col.LastName.toLowerCase().includes(filterText.toLowerCase())).map(row => (
          <Row column={row} />
        ))}
      </tbody>
    </table>
  );
};
  
const UpdateFilterText =(e) => {
  setFilterText(e.target.value);
}
  const location = useLocation();
  useEffect(() => {}, [location]);
  return (
    <div className="employeeDiv">
     <div className="subDiv">
     <div className="row">
    <div className="col-sm-6">
    Employment Management
    </div>
    <div className="col-sm-6">
    <b> Welcome {localStorage.getItem('username')} </b>
    </div>
    </div>
    <div className="row">
    <div className="col-sm-6">
      First/Last Name
    </div>
    <div className="col-sm-4">
     <input className = "search" onChange= {UpdateFilterText}>
     </input>
 
    </div>
    </div>
    </div>
      <EmployeeTable data={data} />
   </div>
  );
}
