import React, { useEffect } from 'react';
import AOS from 'aos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Divider from './components/Divider/Divider';
import Sobre from './pages/Sobre/Sobre';
import Projetos from './pages/Projetos/Projetos';
import Contato from './pages/Contato/Contato';
import Contribua from './pages/Contribua/Contribua';
import SONHOS from './pages/SONHOS/SONHOS';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Intro />
            <Sobre />
            <Divider />
            <Projetos />
            <Divider />
            <Contato />
          </>
        } />
        <Route path="/contribua" element={<Contribua />} />
        <Route path="/sonhos" element={<SONHOS />} />
      </Routes>
    </Router>
  );
}

export default App;
