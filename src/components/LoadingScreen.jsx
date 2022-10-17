/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useState, useEffect } from 'react';
import "./LoaderStyle.css";

export default function LoadingScreen() {
//Count down from 100%
const [ currentTime, setCurrentTime ] = useState(100);
const [index, setIndex] = useState(3)

 let loadingEffect = {
 
  top: "50%",
  left: "50%",
  zIndex: index,
  position: "absolute",
  color: "red",
  opacity: `${currentTime}%`
 }

//black overlay effect
let loader = {
  opacity: `${currentTime}%`,
  zIndex: index
}




const tick = ()=>{
 if (currentTime !== 0){ 
  setCurrentTime(state => state - 1);//decrement value by 1 when this functions is called.
  
 } else {
  setIndex(-1)
 }
}

 useEffect(() => {

  const timer = setInterval( tick, 20 );//call tick function every 20'' until === 0.
  
  return () => clearInterval(timer);

}, [tick] );//then tick(state) updates, useEffect will run




  return (
    <div>
      <div className='loader' style={loader}></div>
   <h1 style={loadingEffect}>
     <span style={{fontSize: "3rem"}}>{ currentTime }%</span>
     
   </h1>
    </div>
  )
}
