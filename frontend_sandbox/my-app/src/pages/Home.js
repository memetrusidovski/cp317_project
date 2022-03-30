import { Routes, Route, Link } from "react-router-dom";
import React from "react";
import Like from '../buttons/Like';

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>

        <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Like></Like>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

export default Home;