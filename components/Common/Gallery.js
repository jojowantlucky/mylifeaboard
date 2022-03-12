import React from 'react';

const Gallery = () => {
  return (
    <div className='gallery-area pt-100 pb-70 jarallax'>
      <div className='container'>
        <div className='section-title white-title'>
          <span>Gallery</span>
          <h2>Onnie over the years</h2>
        </div>

        <div className='row'>
          <div className='col-lg-3 col-sm-6'>
            <div className='gallery-single overlay-one'>
              <div className='overlay-two'>
                <i className='flaticon-threat'></i>
                <h3>Construction 1974</h3>
                <p>
                  Onnie was finished by XXXX at the YYYYY in
                  ZZZZZ.
                </p>
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-sm-6'>
            <div className='gallery-single overlay-one'>
              <div className='overlay-two'>
                <span className='material-icons build'></span>
                <h3>Exterior Below Decks</h3>
                <p>
                  Pictures found on the original PopYachts
                  listing from 2022.
                </p>
                <span className='material-icons build'></span>
                
								{/* <span className='flaticon-cyber'></span> */}
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-sm-6'>
            <div className='gallery-single overlay-one'>
              <div className='overlay-two'>
                <i className='flaticon-cyber-security-1'></i>
                <h3>Interior</h3>
                <p>
                  Lorem ipsum dolor sit amet, con sectetur
                  adipiscing elit sed do.
                </p>
                <span className='flaticon-cyber-security-1'></span>
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-sm-6'>
            <div className='gallery-single overlay-one'>
              <div className='overlay-two'>
                <i className='flaticon-password'></i>
                <h3>Exterior Above Decks</h3>
                <p>
                  Lorem ipsum dolor sit amet, con sectetur
                  adipiscing elit sed do.
                </p>
                <span className='flaticon-password'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
