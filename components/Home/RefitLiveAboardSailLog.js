import React from 'react';
import Link from 'next/link';

const RefitLiveAboardSailLog = () => {
  return (
    <div className='RefitLiveAboardSailLog-area pb-70'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-sm-6'>
            <Link href='/projects'>
              <div className='RefitLiveAboardSailLog-single overlay-one'>
                <div className='overlay-two'>
                  <div className='title'>
                    <span className='material-icons'>
                      handyman
                    </span>
                    <h3>Refit</h3>
                  </div>
                  <p>
                    Much of her equipment is original and
                    she needed some repairs. Most projects
                    are DIY but some are hired out.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className='col-lg-4 col-sm-6'>
            <Link href='/living-aboard-onnie'>
              <div className='RefitLiveAboardSailLog-single overlay-one'>
                <div className='overlay-two'>
                  <div className='title'>
                    <span className='material-icons'>
                      home
                    </span>
                    <h3>Live Aboard</h3>
                  </div>
                  <p>
                    Onnie is my first time living aboard. I
                    had no idea what to expect and this is
                    that story.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className='col-lg-4 col-sm-6 offset-sm-3 offset-lg-0'>
            <Link href='/sail-log'>
              <div className='RefitLiveAboardSailLog-single overlay-one'>
                <div className='overlay-two'>
                  <div className='title'>
                    {/* <i className='flaticon-cyber-security'></i> */}
                    <span className='material-icons'>
                      history
                    </span>
                    <h3>Sail Log</h3>
                  </div>
                  <p>
                    When at sea, Onnie's location will
                    update the map automatically. See every
                    sailing trip since March 2022.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefitLiveAboardSailLog;
