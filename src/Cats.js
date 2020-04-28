import React, { Component } from "react";
import {
    Switch,
    Route,
    NavLink
    
  } from "react-router-dom";
  import('./Details').then(({ default: Details }));
class Cats extends Component {
	componentDidMount() {
		document.title = "Cats"
	  };
	
	  
		
  render() {
    return (
		<div>
            <h1>Cat Photos</h1>
            
            <div class="row">
            
                <div class="col-lg-3">
                <NavLink to="/Details"><img  src="img\cats\1.jpg" class="zoom img-fluid"/></NavLink>
                </div>
                
                <div class="col-lg-3">
                <NavLink to="/Details"><img  src="img\cats\2.jpg" class="zoom img-fluid "/></NavLink>   
                </div>
                
                <div class="col-lg-3">
                <NavLink to="/Details"><img  src="img\cats\3.jpg" class="zoom img-fluid "/></NavLink>   
                </div>
            </div>
            
            
                <Route path="/Details" component={Details}/>
                
           
	    </div>
	
	);
	
  }
  
}
export default Cats;