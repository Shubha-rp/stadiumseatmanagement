import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './test.css';

const CricketStadium = () => {
  const [stadium, setStadium] = useState(null);
  const [error, setError] = useState(null);
  const {userId } = useParams()

useEffect(() => {
  console.log('Fetching stadium data...');
  fetch(`${import.meta.env.VITE_API_URL}/api/stadium`, { method: 'GET' })
    .then(response => {
      console.log('Response received:', response);
      return response.json();
    })
    .then(data => {
      console.log('Data parsed:', data);
      setStadium(data);
      console.log('Stadium state updated:', stadium);
    })
    .catch(error => console.error('Error fetching stadium data:', error));
}, []);

  if (!stadium) {
    return error ? (
      <div>Error: {error}</div>
    ) : (
      <div>Loading...</div>
    );
  }

  return (
    <div className='stadium' id='CricketStadium'>
      <Link to={`/Cricketmatches/`}>
        <div className='test1'>
          <figure>
            <img src='images/image.png' alt={stadium.stadiumname} />
            <figcaption>{stadium.stadiumname}</figcaption>
            <p>Location: {stadium.location}</p>
            <p>Capacity: {stadium.capacity}</p>
          </figure>
        </div>
      </Link>
    </div>
  );
};

export default CricketStadium;
