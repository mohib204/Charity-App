// src/components/about/index.js
import React from 'react';
import "./index.css"

const Aboutcontent = () => {
  return (
       <div className='main'>
      <div className='abouthead'>
        <h4>What We Are Doing</h4>
        <h2>We Are In A Mission To Help The Helpless</h2>
    </div>   
        <div className='card'>'
        <div className='card-1'>
            <img src='https://cdn-icons-png.flaticon.com/128/3067/3067451.png' alt='Clean water' />
            <h1>Clean water</h1>
            <p>The sea freight service has grown considerably in recent years. We spend time getting to know your processes too.</p>
        </div>
        <div className='card-1'>
            <img src='https://cdn-icons-png.flaticon.com/128/3067/3067451.png' alt='Clean water' />
            <h1>Clean water</h1>
            <p>The sea freight service has grown considerably in recent years. We spend time getting to know your processes too.</p>
        </div>
        <div className='card-1'>
            <img src='https://cdn-icons-png.flaticon.com/128/3067/3067451.png' alt='Clean water' />
            <h1>Clean water</h1>
            <p>The sea freight service has grown considerably in recent years. We spend time getting to know your processes too.</p>
        </div>

    </div>

    <div className='aboutfound'>
        <div className='leftSide'>
            <h4>About Our Foundetion</h4>
            <h2>We Are In A Mission To Help Helpless</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,mod tempor incididunt ut labore et dolore magna aliqua. Utnixm, quis nostrud exercitation ullamc.
            </p>
            <p>Lorem ipvsum dolor sit amext, consectetur adipisicing elit, smod tempor incididunt ut labore et dolore.</p>
            <button>About Us</button>
            </div> 
            <div className='rightSide'>
                <div className='ab'> 
                <img src='https://preview.colorlib.com/theme/charityworks/assets/img/gallery/about2.png' />
                </div>
                <img src='https://preview.colorlib.com/theme/charityworks/assets/img/gallery/about1.png' />
                </div>

                
    </div>
    <div  className='show'>
        <div className='showbg'>
        <h1>Lets Chenge The World With Humanity</h1>
        <button>Become a volunter</button>
        </div>
        
    </div>
    </div>
  );
};

export default Aboutcontent;
