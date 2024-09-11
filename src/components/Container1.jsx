import React, { useState } from 'react';
import SideCard from './SideCard';

const Container1 = () => {
  // State to track the active list item
  const [activeIndex, setActiveIndex] = useState(0);

  

  // Function to handle click events
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="card">
      <SideCard />
      <div className="card_content">
        <div className="nav">
          <ul>
            <li
              className={activeIndex === 0 ? 'active' : 'inactive'}
              onClick={() => handleClick(0)}
            >
              About Me
            </li>
            <li
              className={activeIndex === 1 ? 'active' : 'inactive'}
              onClick={() => handleClick(1)}
            >
              Experiences
            </li>
            <li
              className={activeIndex === 2 ? 'active' : 'inactive'}
              onClick={() => handleClick(2)}
            >
              Recomended
            </li>
          </ul>
        </div>
        <div className='content'>
          <p>
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
            <br /><br />
            I was born and raised in Albany, NY and have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4 year old twin daughters - Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a great time to reach out to me.
            <br /><br />
            When I'm not working, I love to play golf and go fishing with my buddies. I'm also a huge fan of the New York Giants and try to catch every game. I'm looking forward to working with you and helping you with your sales needs.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Container1;
