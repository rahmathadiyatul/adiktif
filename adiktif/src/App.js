import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/home';
import React from 'react';
import EventOrganizer from './Home/OurServices/Services/eventOrganizer'
import EventProduction from './Home/OurServices/Services/eventProduction'
import Mice from './Home/OurServices/Services/mice'
import Streaming from './Home/OurServices/Services/streaming'
import BrandActivity from './Home/OurServices/Services/brandActivity'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/eventorganizer" element={<EventOrganizer></EventOrganizer>}></Route>
          <Route path="/eventproduction" element={<EventProduction></EventProduction>}></Route>
          <Route path="/mice" element={<Mice></Mice>}></Route>
          <Route path="/streaming" element={<Streaming></Streaming>}></Route>
          <Route path="/brandactivity" element={<BrandActivity></BrandActivity>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="*" element={<Home></Home>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
