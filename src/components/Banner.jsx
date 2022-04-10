import React from 'react'
import { useEffect,useState } from 'react'
import logo from "../logo.png"
import './Banner.scss'
function Banner() {
    
  return (
    <div
    className="Banner">
        <img src={logo} alt="" />
        <h1>Every occasion deserves lily sweets</h1>
        <p>Welcome to lilysweets, where every cupcake is an experience, 
            and every cake is an extravaganza! Come see what people have been raving about, 
            and try one for yourself.
         Every occasion deserves a lily cake!</p>  
    </div>
  )
}

export default Banner