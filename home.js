import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the App</h1>
      <p>Click the button to access the camera.</p>
      <Link to="/camera">
        <button className="start-btn">Start Camera</button>
      </Link>
    </div>
  );
}

export default Home;
