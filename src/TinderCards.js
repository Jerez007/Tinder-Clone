import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';
import './TinderCards.css';

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'Elon Musk',
      url: 'https://cdn.newsapi.com.au/image/v1/28a4b5ef9629121b289538f2ca8341a2'
    },
    {
      name: 'Jeff Bezos',
      url: 'https://i.insider.com/54e8a99a69beddab1480bcde?width=480'
    },
  ]); 

  //Gets data of people from firebase database
  useEffect(() => {
    database.collection();
  }, []); //runs once when compoment loads

  return (
    <div>
      <h1>Tinder cards</h1>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard 
          className='swipe' 
          key={person.name} 
          preventSwipe={['up', 'down']}
          >
            <div className="card" style={{ backgroundImage: `url(${person.url})`}}>
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards
