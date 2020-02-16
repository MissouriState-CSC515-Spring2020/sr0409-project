import React from "react";

class Main extends React.Component {
	componentDidMount() {
		document.title = "Most Recent"
	  };
	
	  
		
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
				<a class="nav-link" href="index.html">Most Recent</a>
				</li>
				<li class="nav-item">
				<a class="nav-link" href="cats.html">Cats</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="cats.html">Dogs</a>
				</li>
				<li class="nav-item">
				<a class="nav-link" href="cats.html">Trees</a>
				</li>
			</ul> 
			</div>
		</nav>

		<h1>Most Recent</h1>

		<div class="row">
		
			<div class="col-lg-3">
				<a href="details.html" ><img  src="img\cats\1.jpg" class="zoom img-fluid"  alt=""/></a>
			</div>
			
			<div class="col-lg-3">
				<a href="details.html" ><img  src="img\cats\2.jpg" class="zoom img-fluid "  alt=""/></a>
			</div>
			
			<div class="col-lg-3">
				<a href="details.html" ><img  src="img\cats\3.jpg" class="zoom img-fluid "  alt=""/></a>
			</div>
			
				<div class="col-lg-3">
				<a href="details.html" ><img  src="img\dogs\1.jpg" class="zoom img-fluid "  alt=""/></a>
			</div>
			
				<div class="col-lg-3">
				<a href="details.html" ><img  src="img\dogs\2.jpg" class="zoom img-fluid "  alt=""/></a>
			</div>
			
				<div class="col-lg-3">
				<a href="details.html" ><img  src="img\dogs\3.jpg" class="zoom img-fluid "  alt=""/></a>
			</div>
			
				<div class="col-lg-3">
				<a href="details.html" ><img  src="img\trees\1.jpg" class="zoom img-fluid "  alt=""/></a>
			</div>
			
			<div class="col-lg-3">
				<a href="details.html" ><img  src="img\trees\2.jpg" class="zoom img-fluid "  alt=""/></a>
			</div>
			
			<div class="col-lg-3">
				<a href="details.html" ><img  src="img\trees\3.jpg" class="zoom img-fluid "  alt=""/></a>
			</div>
				
		</div>
	</div>
	
	);
	
  }
  
}
export default Main;