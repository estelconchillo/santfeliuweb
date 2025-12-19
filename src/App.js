/*
*Author: Estel Conchillo
*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer'; 

import Home from './pages/Home'; 
import Information from './pages/Information'; 
import Activites from './pages/Activities'; 
import InfoExtended from './pages/InfoExtended';
import Contact from "./pages/Contact";
import Events from "./pages/Events";

import './App.css';

function App() {
  return (
    <Router basename="/santfeliuweb">
      <Header />
      <main className="main-layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Information" element={<Information />} />
          <Route path="/Activities" element={<Activites />} />
          <Route path="/information/:id" element={<InfoExtended />} /> 
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Events" element={<Events />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

