

import aang from './img/aang.JPG';
import azula from './img/azula.JPG';
import dante from './img/dante.JPG';
import iroh from './img/iroh.JPG';

import React, { useState } from 'react';

import UserComponents from './UserComponents';
import WaveComponent from './WaveComponent';

function App() {
  const [userItems, setUserItems] = useState([
    { name: 'Aang', description: "I'm a vegetarian", lastUpdateTime: "1.11.2023", score: 15, avatar: aang },
    { name: 'Azula', description: "justy a sporty girl", lastUpdateTime: "2.45.2023", score: 17, avatar: azula },
    { name: 'Dante', description: "hi there", lastUpdateTime: "6.7.2023", score: 12, avatar: dante },
    { name: 'Iroh', description: "I make a good cup of tea", lastUpdateTime: "6.8.2023", score: 14, avatar: iroh },
  ]);
  
  
  const incrementScore = (name) => {
    const updatedItems = userItems.map((item) =>
      item.name === name
        ? { ...item, score: item.score + 1 }
        : item
    );
    setUserItems(updatedItems);
  };

 
  const orderedUserItems = userItems.sort((a, b) => b.score - a.score);


    return (
      <>
        <WaveComponent/>
           
       
            <div class="row m-2 justify-content-end">
              <div class="col-4">
                {orderedUserItems.map((item) => (
                  <UserComponents
                    avatar={item.avatar}
                    name={item.name}
                    description={item.description}
                    lastUpdateTime={item.lastUpdateTime}
                    score={item.score}
                    incrementScore={incrementScore}
                  />
                ))
                }
              </div>
            </div>
        
      </>
    );
  }


export default App;
