import React, { useEffect, useState } from "react";
import "../styles/TypingAnimation.css";

function TypingAnimation({ text }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex === text.length) {
        clearInterval(typingInterval);
      } else {
        setDisplayText(text.substring(0, currentIndex + 1));
        currentIndex++;
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text]);

  return (
    <div
      className="typing-animation"
      style={{ backgroundImage: "url(path/to/image.jpg)" }}
    >
      <h1>{displayText}</h1>
    </div>
  );
}

export default TypingAnimation;
