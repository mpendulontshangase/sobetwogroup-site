import React from 'react';
import './About.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";


function About({ contact }) {
  return (
    <div className="about-container">
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
      <section className="about-hero">
        <img src="./gifs/about.gif" alt="Tech Solutions" className="img" />
        <h1>Sobetwo Group (Pty) Ltd</h1>
        <p>Innovating for a better future through technology, logistics, and supply chain excellence.</p>
      </section>

      <section className="about-content">
        <h2>Who We Are</h2>
        <p>
          Sobetwo Group Pty Ltd is a forward-thinking South African company, established in 2021 by Mr. Ntshangase.
          We are a black-owned enterprise committed to driving innovation, empowerment, and sustainable business growth.
          With expertise spanning technology, logistics, and supply chain management, we deliver tailored solutions for businesses.
          Our focus is on helping companies streamline operations, reduce costs, and achieve long-term success.
          We believe in leveraging technology and smart logistics to bridge gaps in business efficiency.
          As a company founded on excellence, integrity, and continuous improvement, we strive to be industry leaders.
          We work closely with clients to understand their challenges and implement scalable solutions.
          Our team consists of highly skilled professionals who bring expertise, dedication, and innovative thinking.
          We are passionate about driving economic development through job creation and strategic business solutions.
          At Sobetwo Group, we are not just service providers—we are partners in progress.</p>

        <h2>Our Expertise</h2>
        <p>
          Technology & Software Development
          We provide state-of-the-art software solutions designed to optimize business performance.
          Our expertise includes custom enterprise applications, AI-driven solutions, and digital automation.
          We specialize in system integration, ensuring seamless operations across various platforms.
          Our cloud-based technologies offer scalability, flexibility, and security for modern businesses.
          We implement cybersecurity measures to protect sensitive data and ensure compliance.
          Our team is skilled in business process automation, reducing manual workload and increasing efficiency.
          We develop user-friendly web and mobile applications tailored to industry needs.
          We embrace emerging technologies, such as AI, blockchain, and machine learning, for smarter solutions.
          Our digital transformation services help businesses adapt to changing market demands and stay competitive.
          Through continuous research and innovation, we ensure our clients always receive cutting-edge solutions.

          Logistics & Supply Chain Management
          We provide comprehensive logistics solutions to streamline business operations.
          Our expertise includes fleet management, transportation optimization, and warehousing solutions.
          We focus on supply chain visibility, offering real-time tracking and predictive analytics.
          Our inventory management systems help businesses minimize waste and optimize stock levels.
          We design cost-effective distribution networks to improve delivery times and reduce expenses.
          Our supply chain strategies help companies adapt to disruptions and improve resilience.
          We integrate data-driven insights to enhance supply chain efficiency and operational effectiveness.
          Our transportation solutions ensure safe, timely, and cost-efficient delivery of goods.
          We collaborate with businesses to create tailored logistics models that drive success.
          At Sobetwo Group, we ensure businesses remain agile and competitive in a fast-changing market.</p>

        <p>
          Beyond technology, we have expanded into <strong>logistics and supply chain management</strong>, ensuring businesses operate
          smoothly with streamlined distribution channels and efficient resource allocation.
        </p>

        <h2>Our Mission</h2>
        <p>
          We aim to redefine business efficiency through cutting-edge technology and smart logistics solutions.
          Our goal is to help businesses grow, scale, and optimize their operations with strategic planning.
          We are committed to providing innovative solutions that solve real-world business challenges.
          Our mission is to empower companies with tools that enhance productivity and profitability.
          We believe in driving digital transformation to help businesses compete in the modern world.
          Our logistics strategies aim to reduce operational costs while improving service delivery.
          We promote sustainable and responsible business practices to foster long-term growth.
          Our solutions are designed to adapt, evolve, and scale with the changing market landscape.
          We strive to be a trusted partner, offering solutions that help businesses succeed and thrive.
          At Sobetwo Group, we don’t just create solutions—we build the future.</p>

        <h2>Our Vision</h2>
        <p>
          We envision a world where businesses operate seamlessly through intelligent systems and processes.
          Our goal is to become a leading provider of technology and logistics solutions across Africa.
          We aspire to bridge the gap between innovation and practical business application.
          Our vision is to create smart, sustainable solutions that drive business success.
          We are committed to staying ahead of industry trends and pioneering new business models.
          Our aim is to help companies transition into the digital age with confidence.
          We seek to empower entrepreneurs and enterprises with scalable, high-performance solutions.
          Our strategy involves continuous learning, innovation, and investment in cutting-edge technology.
          We believe in a future where businesses thrive through collaboration, efficiency, and adaptability.
          At Sobetwo Group, we are shaping the future—one solution at a time.
        </p>

        <h2>Why Choose Us?</h2>
        <p>
          We offer customized solutions tailored to meet the unique needs of each business.
          Our team is composed of experts with deep industry knowledge and hands-on experience.
          We provide cost-effective and scalable solutions that grow with your business.
          Our commitment to quality and excellence ensures superior service delivery.
          We leverage data-driven insights to optimize business operations and performance.
          Our focus on customer satisfaction ensures strong, long-term partnerships.
          We implement cutting-edge technology to give businesses a competitive edge.
          Our logistics solutions are designed for efficiency, reliability, and sustainability.
          We continuously innovate and evolve to meet the changing demands of the market.
          At Sobetwo Group, we are more than just a service provider—we are your strategic partner in success.
        </p>
      </section>
    </div>
  );
}

export default About;
