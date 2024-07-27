// src/components/events/index.js
import React from 'react';
import "./index.css";

const Events = ({socialEventContent}) => {
  
  return (
    <div className='Event'>
      <div className='Eventhead'>
      <h1>Social Events</h1>
      </div>
      
      <div className='Eventbody'>
      {socialEventContent}
      </div>
    </div>
  );
};

export default Events;
