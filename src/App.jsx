
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Component } from 'react'
import Nav from './pages/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News';
import NotFound from './pages/NotFound';
import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';





export default function App() {

  const [hide, setHide] = useState();

  
    return (
      <BrowserRouter>

      <div className="App">
        <LoadingScreen />
       
        <div className='routes'>
          <Nav />
          <Routes>
          <Route  path="/" element={ <Home hide={hide}/>}/>
          <Route  path="/News" element={ <News  />}/>
          <Route  path="/Contact" element={ <Contact />}/>
          <Route  path="/About" element={ <About />}/>
          <Route  path="*" element={ <NotFound />}/>
          </Routes>
    
        </div>
        <div className='orig-link' > 
         <a href='https://www.w3schools.com/howto/howto_js_full_page_tabs.asp' target="_blank" rel="noreferrer">
          cloned from W3schools.com 
         </a>
         </div>
    </div>
    </BrowserRouter>
    )
  }

