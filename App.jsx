import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const textStatus = document.getElementById("textStatus");
    if (textStatus) textStatus.innerText = "Neutral";

    
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
      <div className="overlay"></div>

      <div className="text-container">
        <span aria-label="emoji" role="img" id="emoji">
          😐
        </span>
        You look <span id="textStatus">...</span>!
      </div>

      <div className="mockup">
        <div className="browser">
          <div className="browser-chrome">
            <div className="browser-actions"></div>
          </div>
          <canvas id="canvas"></canvas>
          <video id="video" autoPlay muted></video>
        </div>
      </div>

      <p className="note">You are not being recorded. All processing happens in your browser!</p>
    </div>
  );
}

export default App;
