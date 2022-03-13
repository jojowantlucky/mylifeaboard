import React from 'react';
import Link from 'next/link';

const Equipment = () => {
  return (
    <div className='onboard-equipment-area pt-100 pb-70'>
      <div className='container'>
        <div className='section-title'>
          <span>Onboard Equipment</span>
          <h2>
            Onnie's equipment is constantly changing and
            evolving.
          </h2>
        </div>

        <div className='row'>
          <div className='col-lg-3 col-sm-6'>
            <div className='onboard-equipment-single'>
              <div className='onboard-equipment-img'>
                <Link href='/navigation'>
                  <a>
                    <img
                      src='/images/onboard-equipment/navigation.jpg'
                      alt='Image'
                    />
                  </a>
                </Link>
              </div>
              <div className='onboard-equipment-content'>
                <h3>
                  <Link href='/navigation'>
                    <a>Electronics &amp; Nav</a>
                  </Link>
                </h3>
                <p>Electronics and navigation systems.</p>
                <Link href='/navigation'>
                  <a className='read-more'>
                    Read More
                    <i className='flaticon-right-arrow'></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-sm-6'>
            <div className='onboard-equipment-single'>
              <div className='onboard-equipment-img'>
                <Link href='/deck-hardware'>
                  <a>
                    <img
                      src='/images/onboard-equipment/deck-hardware.jpg'
                      alt='Image'
                    />
                  </a>
                </Link>
              </div>
              <div className='onboard-equipment-content'>
                <h3>
                  <Link href='/deck-hardware'>
                    <a>Deck Hardware</a>
                  </Link>
                </h3>
                <p>Rigging, anchors, windlass, etc.</p>
                <Link href='/deck-hardware'>
                  <a className='read-more'>
                    Read More
                    <i className='flaticon-right-arrow'></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-sm-6'>
            <div className='onboard-equipment-single'>
              <div className='onboard-equipment-img'>
                <Link href='/propulsion'>
                  <a>
                    <img
                      src='/images/onboard-equipment/engine.jpg'
                      alt='Image'
                    />
                  </a>
                </Link>
              </div>
              <div className='onboard-equipment-content'>
                <h3>
                  <Link href='/propulsion'>
                    <a>Propulsion</a>
                  </Link>
                </h3>
                <p>
                  Engine, sails, running rigging, &amp;
                  dinghy.
                </p>
                <Link href='/propulsion'>
                  <a className='read-more'>
                    Read More
                    <i className='flaticon-right-arrow'></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-sm-6'>
            <div className='onboard-equipment-single'>
              <div className='onboard-equipment-img'>
                <Link href='/power-generation'>
                  <a>
                    <img
                      src='/images/onboard-equipment/solar.jpg'
                      alt='Image'
                    />
                  </a>
                </Link>
              </div>
              <div className='onboard-equipment-content'>
                <h3>
                  <Link href='/power-generation'>
                    <a>Power &amp; Electrical</a>
                  </Link>
                </h3>
                <p>
                  Solar, wind, alternator, AC/DC system,
                  etc.
                </p>
                <Link href='/power-generation'>
                  <a className='read-more'>
                    Read More
                    <i className='flaticon-right-arrow'></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipment;
