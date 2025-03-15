import React from 'react';
import { Link} from 'react-router-dom';
import '../App.css';
const Header = () => {
  return (
    <header className="App-header">
      <h3>Path2Tech Weather App</h3>
    
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/weather">Weather</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;