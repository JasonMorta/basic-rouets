import React from 'react'
import { useLocation } from 'react-router-dom';

export default function About() {

  const location = useLocation();


  const data = location.state || {}; // Provide an empty object as a default value
  console.log('message', data)
  
  return (
   <div style={{ backgroundColor: "#ff5722" }} className="tabcontent">
   <div className="inner-content">
   <h3>{data.message || 'Default Message'}</h3>
   <p>Who we are and what we do.</p>
   </div>
 </div>
  )
}
