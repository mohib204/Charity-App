import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./componenet/header/index";
import Home from "./componenet/home/index";
import About from "./componenet/aboutcontent/index";
import Causes from "./componenet/causes/index";
import Events from "./componenet/events/index";
import Contact from "./componenet/contact/index";
import Social from "./componenet/socialcontent/index";
import Footer from "./componenet/footer/index";
// import SocialEvent from './components/socialevent/SocialEvent';

function App() {
  const aboutContent = (
    <About/>
  );

  const socialEventContent = (
    <Social />
  );

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
      
        <Routes>
          <Route path="/" element={<Home aboutContent={aboutContent} socialEventContent={socialEventContent} />} />
          <Route path="/about" element={<About />} />
          <Route path="/causes" element={<Causes />} />
          <Route path="/events" element={<Events socialEventContent={socialEventContent} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;