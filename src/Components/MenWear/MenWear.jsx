import React from 'react'
import "./MenWear.css"
import imageShirt from "../../assets/back.jpg";
import imageHalfHand from "../../assets/back.jpg";
import imageFullHand from "../../assets/back.jpg";
import imageChineseCollar from "../../assets/back.jpg";

const shirtCollection = [
  {
    name: "Classic Shirt",
    image: imageShirt,
    description: "A timeless classic shirt, perfect for formal and casual occasions. Tailored to fit you perfectly.",
  },
  {
    name: "Half-Hand Shirt",
    image: imageHalfHand,
    description: "Stay cool and stylish with our half-hand shirts, ideal for summer and casual outings.",
  },
  {
    name: "Full-Hand Shirt",
    image: imageFullHand,
    description: "Elegant full-hand shirts for a sophisticated look, suitable for office and events.",
  },
  {
    name: "Chinese Collar Shirt",
    image: imageChineseCollar,
    description: "Trendy Chinese collar shirts for a modern, fashionable statement. Perfect for any occasion.",
  },
];

const handleBook = (shirtType) => {
  alert(`Appointment booked for: ${shirtType}`);
};

const MenWear = () => {
  return (
    <div className="menwear-wrapper">
      <div className="menwear-header">
        <h2>MEN'S SHIRT COLLECTION</h2>
        <p>
          Discover our exclusive range of custom-tailored men's shirts. Whether you prefer classic, half-hand, full-hand, or Chinese collar styles, we craft each shirt to your measurements for the perfect fit and style. Book your appointment now!
        </p>
      </div>
      <div className="shirt-grid">
        {shirtCollection.map((shirt, idx) => (
          <div className="shirt-card" key={idx}>
            <img src={shirt.image} alt={shirt.name} className="shirt-image" />
            <h3>{shirt.name}</h3>
            <p>{shirt.description}</p>
            <button className="book-button" onClick={() => handleBook(shirt.name)}>
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenWear