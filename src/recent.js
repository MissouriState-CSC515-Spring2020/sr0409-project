import React, { Component } from "react";
import {
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import Details from "./Details";

class Recent extends Component {
	componentDidMount() {
		document.title = "Most Recent"
	  };
	
	  
		
  render() {
    return (
		<div>
      <h1>Most Recent</h1>
     
        <div class="row">
        
          <div class="col-lg-3">
            <NavLink to="/Details"><img  src="img\cats\1.jpg" class="zoom img-fluid"  alt=""/></NavLink>
          </div>
          
          <div class="col-lg-3">
          <NavLink to="/Details"><img  src="img\cats\2.jpg" class="zoom img-fluid "  alt=""/></NavLink>
          </div>
          
          <div class="col-lg-3">
          <NavLink to="/Details"><img  src="img\cats\3.jpg" class="zoom img-fluid "  alt=""/></NavLink>
          </div>
          
            <div class="col-lg-3">
            <NavLink to="/Details"><img  src="img\dogs\1.jpg" class="zoom img-fluid "  alt=""/></NavLink>
          </div>
          
            <div class="col-lg-3">
            <NavLink to="/Details"><img  src="img\dogs\2.jpg" class="zoom img-fluid "  alt=""/></NavLink>
          </div>
          
            <div class="col-lg-3">
            <NavLink to="/Details"><img  src="img\dogs\3.jpg" class="zoom img-fluid "  alt=""/></NavLink>
          </div>
          
            <div class="col-lg-3">
            <NavLink to="/Details"><img  src="img\trees\1.jpg" class="zoom img-fluid "  alt=""/></NavLink>
          </div>
          
          <div class="col-lg-3">
          <NavLink to="/Details"><img  src="img\trees\2.jpg" class="zoom img-fluid "  alt=""/></NavLink>
          </div>
          
          <div class="col-lg-3">
          <NavLink to="/Details"><img  src="img\trees\3.jpg" class="zoom img-fluid "  alt=""/></NavLink>
          </div>
          <Switch>
            <Route path="/Details" component={Details}/>
          </Switch>
        </div>
        
      
	</div>
	
	);
	
  }
  
}
export default Recent;