import React from "react";
import ReactDOM from "react-dom"; // For importing react virtual DOM in real DOM we use this

var element = <h1>Hello World</h1>; // JS X expression
// console.log(element);

// This root id is the <div id="root"></div> in index.html page
ReactDOM.render(element, document.getElementById("root")); // rendering virtual DOM to render real DOM
