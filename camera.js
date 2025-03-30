import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Camera() {
  useEffect(() => {
    const video = document.getElementById("video");
    if (video) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          video.srcObject = stream;
        })
        .catch((err) => console.error("Error accessing webcam:", err));
    }
  }, []);

  return (
    <div className="app">
      <Link to="/" className="back-btn">← Back</Link>
      <div className="card">
        <h2>Camera View</h2>
        <video id="video" autoPlay muted></video>
      </div>
    </div>
  );
}

export default Camera;
