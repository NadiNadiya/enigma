import React, { useState, useEffect } from 'react';
import './CardStyle.css'
import MoreInfo from './MoreInfo';
import { Link } from 'react-router-dom';

const CardComponent = () => {
  const [cardImages, setCardImages] = useState([]);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

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

// const moreInfo = (index) => {setSelectedCardIndex(index)};

  return (
    <div className="card-container">
      {cardImages.map((image, index) => (
        <div key={index} className="card">
          <img src={image} alt={`Shiba ${index + 1}`} />
          <h2>Title placeholder</h2>
          <p>Description</p>
          {/* <button onClick={() => moreInfo(index)} >More </button>
       {selectedCardIndex === index && <MoreInfo/>}
        */}
       <Link to={`/MoreInfo/${index}`}>More</Link>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
