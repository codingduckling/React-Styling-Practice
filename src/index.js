import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const time = date.getHours();

let greeting;

const customStyle = {
  color: ""
};

if (time < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (time < 6) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div className="heading" style={customStyle}>
    {greeting}
  </div>,
  document.getElementById("root")
);

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
