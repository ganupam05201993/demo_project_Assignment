import {BrowserRouter, Link, NavLink, Switch, Route, Redirect} from 'react-router-dom';
 
export default function SecuredRoute(props){
    return(
      <Route path={props.path} render={data=>localStorage.getItem('validUser')?(
        <props.component {...data}></props.component>):
        (<Redirect to={{pathname:'/'}}></Redirect>)}></Route>
    )
  }