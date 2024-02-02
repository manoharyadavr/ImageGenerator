import React, { useState } from "react";
import "./ImageGenerator.css";
import welcomeImage from "../Assets/welcome.png";

const ImageGenerator = () => {
  const [imageUrl, setImageUrl] = useState("/"); // Initial value for the welcome image

  const generateImage = () => {
    const query = document.getElementById("query").value;
    const apiKey = "wk6TcblolOXmLcEp_Hs8fi7eMzh4r3bJcGLNDdHRILA"; // Replace with your actual API key
    const apiUrl = `https://api.unsplash.com/photos/random?query=${query}&client_id=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const newImageUrl = data.urls.regular;
        setImageUrl(newImageUrl);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div className="image-generator">
      <div className="header">
        <span>I</span>mage <span>G</span>enerator
      </div>
      <div className="img-loading">
        <div className="image">
          <img
            src={imageUrl === "/" ? welcomeImage : imageUrl}
            alt="Generated Image"
          />
        </div>
      </div>

      <div className="search-box">
        <input
          type="text"
          id="query" // Add an id to the input field for accessing it in generateImage function
          className="search-input"
          placeholder="what's on your mind ?"
        />
        <div
          className="generate-image"
          onClick={() => {
            generateImage();
          }}
        >
          Generate
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
