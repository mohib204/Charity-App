// src/components/events/index.js
import React from 'react';
import "./social.css"

const SocialEvents = () => {
  return (
    <div className='social'>
      <h4>What We Are Doing</h4>
      <h2>We Arrange Many Social Events For Charity Donations</h2>
      <div className='events'>
        <div className="eventcard">
          <div className='eveimg'>
            <img src="https://preview.colorlib.com/theme/charityworks/assets/img/gallery/socialEvents1.png" alt="Event" />
          </div>
          <div className='eventDetails'>
            <div className='eveinfo'>
              <h2>Donation is Hope</h2>
            </div>
            <div className='eveinfo2'>
              <p>8:30 - 9:30am</p>
              <p>18.01.2021</p>
              <p>Athens, Greece</p>
            </div>
          </div>
        </div>
        <div className="eventcard">
          <div className='eveimg'>
            <img src="https://preview.colorlib.com/theme/charityworks/assets/img/gallery/socialEvents2.png" alt="Event" />
          </div>
          <div className='eventDetails'>
            <div className='eveinfo'>
              <h2>Donation is Hope</h2>
            </div>
            <div className='eveinfo2'>
              <p>8:30 - 9:30am</p>
              <p>18.01.2021</p>
              <p>Athens, Greece</p>
            </div>
          </div>
        </div>
        <div className="eventcard">
          <div className='eveimg'>
            <img src="https://preview.colorlib.com/theme/charityworks/assets/img/gallery/socialEvents3.png" alt="Event" />
          </div>
          <div className='eventDetails'>
            <div className='eveinfo'>
              <h2>Donation is Hope</h2>
            </div>
            <div className='eveinfo2'>
              <p>8:30 - 9:30am</p>
              <p>18.01.2021</p>
              <p>Athens, Greece</p>
            </div>
          </div>
        </div>
    
      
      </div>
    </div>
  );
};

export default SocialEvents;
