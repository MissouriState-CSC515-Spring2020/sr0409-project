import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import {
  BrowserRouter
} from "react-router-dom";
import Recent from "./Recent";
ReactDOM.render(
  <BrowserRouter>
     <Main/>
  </BrowserRouter>, 
  document.getElementById("root"),
  
);