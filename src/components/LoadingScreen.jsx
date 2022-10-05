/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useState, useEffect } from 'react'

export default function LoadingScreen() {

 let loadingEffect = {
 
  top: "50%",
  left: "50%",
  zIndex: 12,
  position: "absolute",
  color: "red"
 }



 const [ currentTime, setCurrentTime ] = useState(100);


const tick = ()=>{
 if (currentTime !== 0){ 
  setCurrentTime(state => state - 1)
  console.log(currentTime)
 }
}

 useEffect(() => {

  const timer = setInterval( tick, 10 );

  return () => clearInterval(timer);

}, [tick] );




  return (
    <div>
   <h1 style={loadingEffect}>
     <span>{ currentTime }%</span>
   </h1>
    </div>
  )
}
