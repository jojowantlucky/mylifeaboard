import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
  return (
    <div
      id='home'
      className='banner-area banner-area-two bg-2 jarallax'>
      <div className='container'>
        <div className='banner-content'>
          <span className='top-title'>
            Onnie, a 1974 Cascade High Side 42
          </span>
          <h1>My Life Aboard</h1>
          <p>
            DIY Refit - Living Aboard - Learning to Sail
          </p>

          <Link href='/learn-more'>
            <a className='default-btn'>
              <span>Learn More</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
