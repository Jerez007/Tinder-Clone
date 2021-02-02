import { Unsubscribe } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';
import './TinderCards.css';

function TinderCards() {
  const [people, setPeople] = useState([]); 

  //Gets data of people from firebase database
  useEffect(() => {
    const unsubscribe = database
      .collection('people')
      .onSnapshot((snapshot) => 
        setPeople(snapshot.docs.map((doc) => doc.data()))
    );
    return () => { //cleanup function
      unsubscribe(); 
    };

  }, []); //runs once when compoment loads

  return (
    <div>
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
