import React from 'react';
import Link from 'next/link';

const Related = () => {
  return (
    <div className='related-post'>
      <div className='title'>
        <h2>Related Subjects</h2>
      </div>

      <div className='row'>
        <div className='col-lg-4 col-sm-6'>
          <div className='single-services'>
            <div className='services-img'>
              <Link href='/sail-log'>
                <a>
                  <img src='/images/map.jpg' alt='Image' />
                </a>
              </Link>
            </div>

            <div className='services-content'>
              <h3>
                <Link href='/sail-log'>
                  <a>Sail Log</a>
                </Link>
              </h3>
            </div>
          </div>
        </div>

        <div className='col-lg-4 col-sm-6'>
          <div className='single-services'>
            <div className='services-img'>
              <Link href='/about-onnie'>
                <a>
                  <img
                    src='/images/vessel-info.jpg'
                    alt='Image'
                  />
                </a>
              </Link>
            </div>

            <div className='services-content'>
              <h3>
                <Link href='/about-onnie'>
                  <a>Vessel Info</a>
                </Link>
              </h3>
            </div>
          </div>
        </div>

        <div className='col-lg-4 col-sm-6 offset-sm-3 offset-lg-0'>
          <div className='single-services'>
            <div className='services-img'>
              <Link href='/coming-soon'>
                <a>
                  <img
                    src='/images/live-aboard.jpg'
                    alt='Image'
                  />
                </a>
              </Link>
            </div>

            <div className='services-content'>
              <h3>
                <Link href='/comming-soon'>
                  <a>Live Aboard</a>
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Related;
