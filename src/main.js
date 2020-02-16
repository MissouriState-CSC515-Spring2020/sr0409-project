import React, { Component } from "react";
import {
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import Recent from "./Recent";
import Details from "./Details";
import Cats from "./Cats";
class Main extends Component {
	
  render() {
	
    return (

			<div>
				<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
					</button>
				
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto justify-content-center">
						<li class="nav-item">
						<NavLink to="/Recent" class="nav-link">Most Recent</NavLink>
						</li>
						<li class="nav-item">
						<NavLink to="/Cats" class="nav-link">Cats</NavLink>
						</li>
						<li class="nav-item">
						<NavLink to="/Cats" class="nav-link">Dogs</NavLink>
						</li>
						<li class="nav-item">
						<NavLink to="/Cats" class="nav-link">Trees</NavLink>
						</li>
					</ul> 
					</div>
				</nav>
				<Switch>
					<Route exact path="/" component={Recent}/>
					<Route path="/Recent" component={Recent}/>
					<Route path="/Cats" component={Cats}/>
					<Route path="/Details" component={Details}/>
				</Switch>
				
			</div>
			
		
		
		
	);
  } 
}

export default Main;