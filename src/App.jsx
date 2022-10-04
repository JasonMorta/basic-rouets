
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Component } from 'react'
import Nav from './pages/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News';
import NotFound from './pages/NotFound';




export default class App extends Component {
constructor(props) {
  super(props)

  this.state = {
     learning_routes:true,
  }
}

  render() {
    return (
      <BrowserRouter>

      <div className="App">
       
        <div className='routes'>
          <Nav />
          <Routes>
          <Route  path="/" element={ <Home />}/>
          <Route  path="/News" element={ <News />}/>
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
}
