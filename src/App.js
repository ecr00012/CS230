import logo from './logo.svg';
import './App.css';
import Cards from './Cards.js'
import Navbar from './Navbar.js'


function App() {
  return (
    <div className="App">
    <Navbar />
      <h1>CS 230L</h1>
      <h2>Section - 003</h2>
      <p>WVU ID: 800396984</p>
      <p>Hi, I am Creek</p>
      
      <Cards />

    </div>
    
  );
}

export default App;
