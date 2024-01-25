import React, { useState, useEffect } from 'react';
import './CardStyle.css'

const CardComponent = () => {
  const [cardImages, setCardImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://shibe.online/api/shibes?count=12&urls=true&httpsUrls=true');
        const data = await response.json();
        setCardImages(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="card-container">
      {cardImages.map((image, index) => (
        <div key={index} className="card">
          <img src={image} alt={`Shiba ${index + 1}`} />
          <h2>Title placeholder</h2>
          <p>Description</p>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
