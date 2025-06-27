import React, { useEffect, useState }  from "react";
import "./Home.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from "../../Components/Navbar/Navbar";
import Tailer from "../../assets/back.jpg";
import { useNavigate  } from "react-router-dom";
import image1 from "../../assets/back.jpg";
import image2 from "../../assets/back.jpg";
import image3 from "../../assets/back.jpg";
import image4 from "../../assets/back.jpg";
import image5 from "../../assets/back.jpg";

const Home = () => {
  const Navigate = useNavigate();
  const MenWear=()=>{
    Navigate("/menwear");
  }
  const WomenWear=()=>{
    Navigate("/womenwear");
  }
   const KidsWear=()=>{
    Navigate("/kidswear");
  }
   const Aleration=()=>{
    Navigate("/aleration");
  }
  

  const images = [
   image1,
   image2,
   image3,
   image4,
   image5,
  ];
 const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(slide);
  }, [images.length]);

  return (
    <div>
      <Navbar />
      <div className="homepage">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <div>
            <h1>Welcome to TailorCraft</h1>
            <p>
              Your trusted destination for custom tailoring and alterations.
            </p>
            <a href="#services" className="cta-button">
              Explore Our Services
            </a></div>
             <div className="right">
            <div className="service-card"onClick={MenWear}>
              <img src={Tailer} alt="Custom Suit Stitching" />
              <h3>Custom Men Wear Stitching</h3>
            </div>
          </div>

          </div>
         
        </section>

        {/* About Section */}
        <section className="about" id="about">
          <h2>About Us</h2>
          <p>
            Welcome to Suresh Tailor, where tradition meets style. Established
            16 years ago, Suresh Tailor has been a trusted name in custom
            tailoring and fashion stitching. Located at the heart of the
            community, our shop has been proudly serving generations with
            high-quality craftsmanship, attention to detail, and personalized
            fitting for every customer. From everyday wear to special occasion
            outfits, our experienced tailors understand your style and deliver
            garments that perfectly match your expectations. Whether it's men's
            suits, women's ethnic wear, or children’s dresses, we ensure each
            stitch reflects our passion for perfection. At Suresh Tailor, it’s
            not just about tailoring—it’s about creating confidence in every
            outfit.
          </p>
        </section>

        {/* Services Section */}
        <section className="services" id="services">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid" >
           
            <div className="service-card"onClick={MenWear}>
              <img src={Tailer} alt="Custom Suit Stitching" />
              <h3>Custom Men Wear Stitching</h3>
                 <button>Show More...</button>
            </div>
            <div className="service-card"  onClick={WomenWear}>
              <img src={Tailer} alt="Blouse & Dress Designing" />
              <h3>Custom Women Wear Stitching</h3>
                 <button>Show More...</button>
            </div>
            <div className="service-card"  onClick={KidsWear}>
              <img src={Tailer} alt="Men’s Formal Wear" />
              <h3>Custom kids Wear Stitching</h3>
                 <button>Show More...</button>
            </div>
            <div className="service-card" onClick={Aleration}>
              <img src={Tailer} alt="Alterations & Adjustments"  />
              <h3>Alterations & Adjustments Men and Women</h3>
                 <button>Show More...</button>
            </div>
            <div className="service-card" onClick={Aleration}>
              <img src={Tailer} alt="Alterations & Adjustments"  />
              <h3>School & College Uniform Stitching Men and Women</h3>
                 <button>Show More...</button>
            </div>
            <div className="service-card" onClick={Aleration}>
              <img src={Tailer} alt="Alterations & Adjustments"  />
              <h3>Goverment Uniform Men Stitching</h3>
              <button>Show More...</button>
            </div>
          </div>
        </section>
        {/* Gallery section  */}

        <section className="gallery-slider-section">
      <h2>Our Gallery</h2>
      <div className="gallery-slider">
        <div
          className="gallery-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Gallery ${index + 1}`}
              className="gallery-slide"
            />
          ))}
        </div>
      </div>
      </section>

        {/* Contact Teaser */}
     <section className="contact-teaser" id="contact">
  <footer className="footer">
    <div className="footer-grid">
        {/* Right Side - Embedded Map */}
      <div className="footer-map animate-slide-in">
        <iframe
          title="Suresh Tailors Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.123456!2d76.9678!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8594d2b4b123%3A0x123456789abcdef!2sRamanujampudur%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1680000000000"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* Left Side - Address & Info */}
      <div className="footer-left animate-fade-in">
        
        <ul className="contact-list">
          <li><i className="fas fa-map-marker-alt"></i> Permal Kovil street, Ramanujampudur, thoothukudi - 628622, Tamil Nadu</li>
          <li><i className="fas fa-phone-volume"></i> +91 9442913310</li>
         <li> <i className=" fas fab fa-whatsapp"></i>  WhatsApp : +91 8072804770</li>
          <li><i className="fas fa-envelope"></i> sureshtailor@example.com</li>
          <li><i className="fas fa-clock"></i> Mon - Sun : 7.30am - 9pm</li>
        </ul>

        <h2 className="footer-title">Suresh Tailors ✂️</h2>
        <p className="footer-text">
          Premium custom tailoring for every occasion. From suits to saree blouses, stitched with perfection and tradition.
        </p>
      </div>

    
    </div>

    <div className="footer-bottom">
      © 2025 Suresh Tailors. All rights reserved.
    </div>
  </footer>
</section>

      </div>
    </div>
  );
};

export default Home;
