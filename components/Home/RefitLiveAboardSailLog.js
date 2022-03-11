import React from 'react';
import Link from 'next/link';

const RefitLiveAboardSailLog = () => {
  return (
    <div className='RefitLiveAboardSailLog-area pb-70'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-sm-6'>
            <Link href='/coming-soon'>
              <div className='RefitLiveAboardSailLog-single overlay-one'>
                <div className='overlay-two'>
                  <div className='title'>
                    <i className='flaticon-testing'></i>
                    <h3>Refit</h3>
                  </div>
                  <p>
                    Onnie needed some TLC when I first
                    bought her. All of her refit projects
                    are here.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className='col-lg-4 col-sm-6'>
            <Link href='/coming-soon'>
              <div className='RefitLiveAboardSailLog-single overlay-one'>
                <div className='overlay-two'>
                  <div className='title'>
                    <i className='flaticon-innovation'></i>
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
                    <i className='flaticon-cyber-security'></i>
                    <h3>Sail Log</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore.
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
