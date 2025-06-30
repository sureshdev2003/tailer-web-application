import React from 'react'
import "./MenWear.css"
import image1 from "../../assets/back.jpg";
import image2 from "../../assets/back.jpg";
import image3 from "../../assets/back.jpg";
import image4 from "../../assets/back.jpg";
import image5 from "../../assets/back.jpg";
const MenWear = () => {
  const menWearImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
];

  return (
        <div className="menwear-wrapper">
      <div className="menwear-header">
        <h2>SHERWANI</h2>
        <p>
          A custom-made sherwani is crafted meticulously to match your body shape and precise measurements. 
          Perfect for weddings, festive occasions, and grand celebrations, a custom sherwani ensures 
          you look your best at every special function. Get your custom tailor-made sherwani crafted to perfection now!
        </p>
        <button className="book-button">BOOK CONSULTATION</button>
      </div>

      <div className="image-grid">
        {menWearImages.map((src, index) => (
          <div className="grid-item" key={index}>
            <img src={src} alt={`Sherwani ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MenWear