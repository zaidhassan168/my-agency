import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <header>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><a href="#">Destinations</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Muhafiz-e-Emaan</h1>
        <h2>Discover Your Next Adventure</h2>
        <Link to="/home"><button>Explore Destinations</button></Link>
      </main>
      <footer>
        <p>© 2023 My Travel Agency. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
