import React, { useState } from 'react';
import './App.css';
import lockgif from "./lock2.gif"
import newgif from "./unlock2.gif" // Import the new GIF

const App = () => {
  const [clicks, setClicks] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showUnlockedLock, setShowUnlockedLock] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showLandingPage, setShowLandingPage] = useState(false);

  const handleLockClick = () => {
    if (clicks < 2) {
      setClicks(clicks + 1);
    } else if (clicks === 2) {
      setClicks(3);
      setShowUnlockedLock(true);
      setTimeout(() => {
        setShowUnlockedLock(false);
        setIsUnlocked(true);
        setShowVideo(true);
        console.log('showVideo is now true');
      }, 5000);
    }
  };

  const handleVideoEnd = () => {
    setShowVideo(false);
    setTimeout(() => setShowLandingPage(true), 1000);
  };

  return (
    <div className="app">
      {!isUnlocked && !showVideo && !showLandingPage && (
        <div className={`lock-container ${clicks > 0 ? `shake-${clicks}` : ''}`}>
          {clicks < 3 ? (
            <img
              src={newgif} // Use the new GIF for the first two clicks
              alt="Lock"
              onClick={handleLockClick}
              className={`lock ${isUnlocked ? 'unlock' : ''}`}
            />
          ) : (
            <img
              src={lockgif} // Animated GIF for the third click
              alt="Lock"
              onClick={handleLockClick}
              className={`lock ${isUnlocked ? 'unlock' : ''}`}
            />
          )}
        </div>
      )}

      {showVideo && (
        <div className="video-container">
          <video
            width="100%"
            height="100%"
            controls
            onEnded={handleVideoEnd}
            autoPlay
          >
            <source src="your-video.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      {showLandingPage && (
        <div className="landing-page">
          <h1>Welcome to the amazing super duper crazy a$$ ACES Inaugeration</h1>
          <p>CHEEEM TAPAK DUM DUM</p>
        </div>
      )}
    </div>
  );
};

export default App;