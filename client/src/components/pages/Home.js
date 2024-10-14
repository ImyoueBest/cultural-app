import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";

function Home() {
  return (
    <div>
      <header>
        <h1>Khon Kaen Cultural Learning</h1>
      </header>

      <section>
        <h2>Main Features</h2>
        <div className="menu-cards">
          <Link to="/collection">
            <div className="card">
              <h3>Cultural Collection</h3>
              <p>Explore and collect cultural sites.</p>
            </div>
          </Link>

          <Link to="/calendar">
            <div className="card">
              <h3>Festival Calendar</h3>
              <p>Check out upcoming festivals in Khon Kaen.</p>
            </div>
          </Link>

          <Link to="/my-collection">
            <div className="card">
              <h3>My Collection</h3>
              <p>View your saved cultural experiences.</p>
            </div>
          </Link>
        </div>
      </section>

      <footer>
        <nav>
          <ul className="bottom-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/map">Map</Link></li>
            <li><Link to="/collection">Collection</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default Home;
