import React from "react";
import "./styles.css";
import Login from "./login";
import EmployeesData from "./employeeData";
import Details from "./details";
import SecuredRoute from "./securedRoutes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

export default function App(){
  let { Id } = useParams()
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <SecuredRoute  path="/employeeData" component={EmployeesData}></SecuredRoute>
          <SecuredRoute  path="/details" component={Details}></SecuredRoute>
        </Switch>
      </Router>

    )
  }

