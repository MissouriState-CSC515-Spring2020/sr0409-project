import React, { Component } from "react";

class Details extends Component {
	componentDidMount() {
		document.title = "Details"
	  };
	
  render() {
    return (
      <div>
        <h1>Details</h1>
        <div id="description_block">
          <img  src="img\cats\1.jpg" class="zoom img-fluid"  alt=""/>	
        </div>
        <p>This is an image of a pretty cat with green eyes.</p>
      </div>
	
	);
	
  }
  
}
export default Details;