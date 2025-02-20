import React from "react";
import "./Home.css"; // Import the CSS file

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Sobetwo Group</h1>
        <p>Your trusted partner in Tech, Supply Chain, and Logistics.</p>
       
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-box">
            <img src="./gifs/tech.gif" alt="Tech Solutions" />
            <h3>Tech Solutions</h3>
            <p>We provide cutting-edge technology solutions tailored for your business needs.</p>
          </div>

          <div className="service-box">
            <img src="./gifs/supply.gif" alt="Supply Chain" />
            <h3>Supply Chain</h3>
            <p>Optimize your supply chain with our innovative logistics strategies.</p>
          </div>

          <div className="service-box">
            <img src="./gifs/logistic.gif" alt="Logistics" />
            <h3>Logistics</h3>
            <p>We ensure smooth and efficient transportation for your business.</p>
          </div>
        </div>
      
      </section>

      {/* Services Section */}
      
    </div>
  );
}

export default Home;
