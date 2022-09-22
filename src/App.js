import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Components

import Nav from './components/navbar/Nav';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Work from './components/work/Work';
import Service from './components/service/Service';
import About from './components/about/About';

const App = ()=>{
  return (
    <div>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/work' element={<Work/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;