import React, { useState, useEffect } from "react";
import LoveLetter from "./LoveLetter";
import Gallery from "./Gallery";
import "./styles.css";

function App() {
  const [showQuestion, setShowQuestion] = useState(true);
  const [answer, setAnswer] = useState(null);
  const [showNoButton, setShowNoButton] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 500);
  }, []);

  const handleAnswer = (response) => {
    setAnswer(response);
    setShowQuestion(false);
    if (response === "yes") {
      setShowHearts(true);
      setTimeout(() => setShowHearts(false), 7000); // Hearts disappear after 5s
    }
  };

  return (
    <div className="app">
      {/* Floating Hearts Animation (Only Show When "Yes" is Clicked) */}
      {showHearts && (
        <div className="heart-container">
          {Array.from({ length: 20 }).map((_, index) => (
            <span key={index} className="heart">💖</span>
          ))}
        </div>
      )}

      {/* Welcome Section with Animation */}
      <section className={`welcome ${fadeIn ? "fade-in" : ""}`}>
        <h1>🌸💗 Hey, My Favorite Person! 💗🌸</h1>
        <p>✨ I made something for you! ✨</p>
      </section>

      {/* Cute Date Question */}
      {showQuestion ? (
        <section className="date-question">
          <h2>Would you like to go on a date with me? 🥰</h2>
          <button className="btn yes" onClick={() => handleAnswer("yes")}>Yes! 💕</button>
          {showNoButton && (
            <button className="btn no" onClick={() => setShowNoButton(false)}>No... 😢</button>
          )}
        </section>
      ) : (
        <section className="date-response">
          {answer === "yes" ? (
            <h2>Yay! Can't wait! 🥰💖</h2>
          ) : (
            <h2>Oh no! 😭 But I still love you! 💖</h2>
          )}
        </section>
      )}

      {/* Love Letter Section */}
      <LoveLetter />

      {/* Memories Gallery */}
      <Gallery />
    </div>
  );
}

export default App;
