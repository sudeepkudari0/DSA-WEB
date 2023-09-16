import React from "react";
import "../styles/Home.css";
import "../styles/TypingAnimation.css";
import TypingAnimation from "./TypingAnimation";

const Home = () => {
  return (
    <>
      <div className="container-home">
        <div className="container-ani">
          <TypingAnimation
            text="Welcome to 
          DSA WEB"
          />
        </div>
        <div className="p-container">
          <p>
            DSA-WEB is a combination of Data Structures and Algorithms &
            Web-Application. <br />
            This application is built using React Library. <br />
            <br />
            <h4>SO what does this App Do!!!</h4>
            <br />
            Head over to topics and select any DSA quetion to get started.
          </p>
        </div>
      </div>
      <div className="img-container"></div>
    </>
  );
};

export default Home;
