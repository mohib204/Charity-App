import React from 'react';
import "./index.css"

const Home = ({ aboutContent, socialEventContent }) => {
  return (
    <div className='component'>
      <div className='home'>
        <div className='panel-1'>
          <h1>Our Helping To The World.</h1>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            eget risus vitae massa semper aliquam quis mattis quam. Morbi tin</p>
          <button> Donate</button>
        </div>
        <div className='panel-2'>
          <img src='https://www.shutterstock.com/image-photo/kenya-rusinga-island-utajo-village-600nw-556224034.jpg'></img>
        </div>
      </div>
      { aboutContent }
      <div className='homecardhead'>
      <h5>Our Cases You Can See</h5>
      <h1>Explore Our Latest Causes That We Works</h1>
      </div>
      <div className='homeCard'>
          
          <div className='mainCard'>
            <img src='https://preview.colorlib.com/theme/charityworks/assets/img/gallery/case1.png'></img>
          <h2>That We Works</h2>
        <p>Ensure Education For Every Poor Children</p>
        <div class="progress-bar">
            <div class="progress"></div>
        </div>
        <p>70%</p>
        <p>Raised: $20,000</p>
        <p>Goal: $35,000</p>
          </div>
          <div className='mainCard'>
            <img src='https://preview.colorlib.com/theme/charityworks/assets/img/gallery/case3.png'></img>
          <h2>That We Works</h2>
        <p>Ensure Education For Every Poor Children</p>
        <div class="progress-bar">
            <div class="progress"></div>
        </div>
        <p>70%</p>
        <p>Raised: $20,000</p>
        <p>Goal: $35,000</p>
          </div>
          <div className='mainCard'>
            <img src='https://preview.colorlib.com/theme/charityworks/assets/img/gallery/case2.png'></img>
          <h2>That We Works</h2>
        <p>Ensure Education For Every Poor Children</p>
        <div class="progress-bar">
            <div class="progress"></div>
        </div>
        <p>70%</p>
        <p>Raised: $20,000</p>
        <p>Goal: $35,000</p>
          </div>

        
      </div>
      { socialEventContent}
    </div>

  );
};

export default Home;
