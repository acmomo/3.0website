import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Projects from './pages/Projects';
import People from './pages/People';
import PeopleProfile from './pages/PeopleProfile';
import Apply from './pages/Apply';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import MobileHeader from './components/MobileHeader';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <HashRouter>
      <div className="font-avenir">
        <ScrollToTop />
        <MobileHeader />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/:id" element={<PeopleProfile />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;