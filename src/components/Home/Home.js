import React from "react";
import "./Home.css";

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Contact from "../Contact/Contact";
import { BiArrowFromBottom } from "react-icons/bi";
import { PiArrowSquareDown } from "react-icons/pi";
import { GrDown } from "react-icons/gr";




function Home({ contact }) {
  return (
    <div className="home-container">
      {/* TODO: Display the Contact component when the contact prop is true */}
      {contact &&
        <div className="home-container">
          <div className="contact-container">
            <div className="contact-card">
              <div className="contact-item">
                <FaEnvelope className="contact-icon email-icon" />
                <span className="contact-text">sobetwogroup@gmail.com</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon phone-icon" />
                <span className="contact-text">+27 83 496 4104</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon location-icon" />
                <span className="contact-text">130 South Street, Die Hoewes, Centurion</span>
              </div>
            </div>
          </div>
        </div>
      }


      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Sobetwo Group</h1>
        <h4 className="hero-p">In Tech, we innovate and build solutions that drive success.
          In Supply Chain, we streamline operations with precision and efficiency.
          In Logistics, we ensure seamless movement from origin to destination.
          We empower businesses with cutting-edge technology and strategic insights.
          Our commitment to excellence fuels growth and long-term partnerships.
          With reliability and expertise, we turn challenges into opportunities.
          Sobetwo Group – driving progress, delivering value, and shaping the future.</h4>

        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-box">
            <img src="./gifs/tech.gif" alt="Tech Solutions" className="img" />
            <h3>Tech Solutions</h3>
            <p>We provide cutting-edge technology solutions tailored to your business needs.
              From software development to system integration, we drive digital transformation.
              Our expertise spans cloud computing, AI, and custom enterprise applications.
              We enhance efficiency, security, and scalability with innovative IT solutions.
              Whether startups or large enterprises, we craft solutions that accelerate growth.
              Our goal is to simplify complexities and empower businesses with smart tech.
              Partner with us for reliable, future-ready solutions that give you a competitive edge.
              Sobetwo Group – transforming ideas into powerful technology-driven success.</p>
          </div>

          <div className="service-box">
            <img src="./gifs/supply.gif" alt="Supply Chain" className="img" />
            <h3>Supply Chain</h3>
            <p>Optimize your supply chain with our innovative logistics strategies.
              We streamline operations to enhance efficiency, reduce costs, and maximize output.
              From procurement to last-mile delivery, we ensure seamless coordination.
              Our data-driven approach minimizes risks and improves decision-making.
              We integrate smart technology for real-time tracking and inventory management.
              Whether local or global, we design scalable solutions tailored to your needs.
              With a commitment to reliability and speed, we keep your supply chain agile.
              Sobetwo Group – delivering smarter, faster, and more efficient supply chain solutions.</p>
          </div>

          <div className="service-box">
            <img src="./gifs/logistic.gif" alt="Logistics" className="img" />
            <h3>Logistics</h3>
            <p>We ensure smooth and efficient transportation for your business.
              Our end-to-end logistics solutions guarantee timely and secure deliveries.
              From freight management to last-mile distribution, we optimize every step.
              With real-time tracking and smart routing, we enhance supply chain visibility.
              We reduce costs while maintaining speed, reliability, and precision.
              Whether by land, sea, or air, we customize logistics strategies for your needs.
              Our commitment to excellence keeps your operations moving without delays.
              Sobetwo Group – powering businesses with seamless and innovative logistics solutions.</p>
          </div>

          <div className="service-box">
            <img src="./gifs/clean.gif" alt="Cleaning" className="img" />
            <h3>Cleaning Services</h3>
            <p>We provide professional and reliable cleaning solutions for your business.
              Our expert team ensures a spotless, hygienic, and welcoming environment.
              From offices to industrial spaces, we tailor services to meet your needs.
              Using eco-friendly products and modern techniques, we prioritize safety and sustainability.
              We specialize in deep cleaning, sanitization, and regular maintenance plans.
              A clean workspace enhances productivity, health, and customer satisfaction.
              With efficiency and attention to detail, we deliver top-tier cleanliness.
              Sobetwo Group – creating cleaner, healthier spaces for businesses to thrive.</p>
          </div>
        </div>
        {/* <section className="more">
          <GrDown className="godown-arrow" />
        </section> */}
      </section>

    </div>
  );
}

export default Home;
