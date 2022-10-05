import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {

   //set the default state color to red which is equal to home page color.
  const [state, setState] = React.useState({
    home: "#f44336",
    news: "#4caf50",
    contact: "#2196f3",
    about: "#ff5722",
    active: "",
    location : window.location.pathname
  });
  const [color, setColor] = React.useState("white");

  const [blank, setBlank] = useState(false)

  let paint ={ 
    backgroundColor: state.location === "/News" ? "#4caf50" : "",
    color: state.news === "#4caf50" ? color: "#ffc107" }

function newsTab(e){
  setState(prev => ({...prev, active:"#4caf50", location: "/News" }));

  if (state.location === "/News") {
    e.target.id = "hide"
  } else {
    e.target.id = "NotHide"
  }
}



function homeTab(){
  setState(prev => ({...prev, active:"#f44336", location: "/" }))
}



  //console.log(state.location)
  return (
    <header className="App-header">
      {/* Home will be the default/home page */}
      <Link
        to="/"
        className="tablink"
        onClick={homeTab}
        style={{ 
          backgroundColor: state.location === "/" ? "#f44336" : "", 
          color: state.home === "#f44336" ? color: "#ffc107"}}>
        Home
      </Link>

      <Link
        to="/News"
        className="tablink"
        onClick={newsTab}
        style={paint}>
        News
      </Link>

      <Link
        to="/Contact"
        className="tablink"
        onClick={() => setState(prev => ({...prev, active:"#2196f3", location: "/Contact" }))}
        style={{ 
          backgroundColor: state.location === "/Contact" ? "#2196f3" : "", 
          color: state.contact === "#2196f3" ? color: "#ffc107" }}>
        Contact
      </Link>

      <Link
        to="/About"
        className="tablink"
        onClick={() => setState(prev => ({...prev, active:"#ff5722", location: "/About" }))}
        style={{ 
          backgroundColor: state.location === "/About" ? "#ff5722": "",
          color: state.about === "#ff5722" ? color: "#ffc107" }}>
        About
      </Link>
    </header>
  );
}
