import logo from './logo.svg';
import './App.css';
import Cards from './Cards.js'
import Navbar from './Navbar.js'
import Home from './Home.js'
import Contact from './Contanct.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path = "/" element = {Home} /><Route/>
    <Route path = "/cards" element = {Cards} /><Route/>
    <Route path = "/contact" element = {Contact} /><Route/>
    </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
