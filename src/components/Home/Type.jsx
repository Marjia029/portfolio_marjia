import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Effective Problem Solver",
              "Aspiring Software Developer",
              // "MERN Stack Developer",
              "Passionate ML Enthusiast",
              // "Committed Open Source Contributor",
              
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type