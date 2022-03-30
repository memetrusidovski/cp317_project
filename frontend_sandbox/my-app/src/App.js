import * as React from "react";
import logo from './logo.svg';
import Like from './buttons/Like';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Login from "./pages/Login";
import Display from "./pages/Display";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/display" element={<Display />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}



export default App;
