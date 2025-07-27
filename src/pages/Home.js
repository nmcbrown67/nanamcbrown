import { useState } from "react";
import "./Home.css";
import testImage from "../images/test.png";

console.log("Image import result:", testImage); // Debug line

function Home() {
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="image-section">
                    <img 
                        src={testImage}
                        alt="Nana McBrown" 
                        className="hero-image"
                        onError={(e) => {
                            console.log("Image failed to load:", e.target.src); // Debug line
                            e.target.src = "https://via.placeholder.com/400x300/4A90E2/FFFFFF?text=Your+Image+Here";
                        }}
                        onLoad={() => {
                            console.log("Image loaded successfully!"); // Debug line
                        }}
                    />
                </div>
                <div className="text-section">
                    <h1 className="main-title">Hi I'm Nana, Welcome to my little corner of the internet!</h1>
                    <a class="button-link" href="/Resume">
                        <button className="cta-button">Get Started</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;

