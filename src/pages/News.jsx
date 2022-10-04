import React from "react";
import './news.css';
import pic from "../static/images/up.png"
import { useRef } from "react";

export default function News() {

  const scrollDown = useRef();

  console.log(scrollDown)

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

function toBottom(){
  window.scrollTo({
    top: scrollDown.current.offsetTop,//offsetTop:2199px down(the location)
    behavior: 'smooth',
  });
}

  return (
    <div style={{ backgroundColor: "#4caf50" }} className="tabcontent">
      <div className="inner-content">

        <h3>NEWS</h3>

        <p>Some news this fine day!</p>

        <h3 onClick={toBottom} style={{cursor: "pointer"}}>Scroll to bottom h3</h3>

        <div className="spacer">
          <h3 className="bottom" ref={scrollDown} >BOTTOM H3</h3>
          <img src={pic} onClick={goToTop} alt="to top button" style={{cursor: "pointer"}} />
        </div>

      </div>
    </div>
  );
}
