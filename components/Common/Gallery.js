import React from 'react';
import ImageCollage from './ImageCollage';
import { useState } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] =
    useState('original-build-circa-1974');

  const clickHandler = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='gallery-area pt-100 pb-70 jarallax'>
      <div className='container'>
        <div className='section-title white-title'>
          <span>Gallery</span>
          <h2>Onnie over the years</h2>
          <p
            className='view-all'
            onClick={() => clickHandler('all')}>
            View All
          </p>
        </div>

        <div className='row'>
          <div className='col-lg-3 col-sm-6'>
            <div
              className={
                selectedCategory ===
                  'original-build-circa-1974' 
                  ? 'gallery-single overlay-one active'
                  : 'gallery-single overlay-one'
              }
              onClick={() =>
                clickHandler('original-build-circa-1974')
              }>
              <div className='overlay-two'>
                <i className='flaticon-threat'></i>
                <h6>Initial Build 1974</h6>
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-sm-6'>
            <div
              className={
                selectedCategory ===
                  'popyachts-listing-2021' 
                  ? 'gallery-single overlay-one active'
                  : 'gallery-single overlay-one'
              }
              onClick={() =>
                clickHandler('popyachts-listing-2021')
              }>
              <div className='overlay-two'>
                <i className='flaticon-cyber-security-1'></i>
                <span className='material-icons build'></span>
                <h6>Popyacht Listing 2021</h6>

                <span className='material-icons build'></span>

                {/* <span className='flaticon-cyber'></span> */}
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-sm-6'>
            <div
              className={
                selectedCategory === 'interior' 
                  ? 'gallery-single overlay-one active'
                  : 'gallery-single overlay-one'
              }
              onClick={() => clickHandler('interior')}>
              <div className='overlay-two'>
                <i className='flaticon-cyber-security-1'></i>
                <h6>Interior</h6>
                <span className='flaticon-cyber-security-1'></span>
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-sm-6'>
            <div
              className={
                selectedCategory === 'exterior' 
                  ? 'gallery-single overlay-one active'
                  : 'gallery-single overlay-one'
              }
              onClick={() => clickHandler('exterior')}>
              <div className='overlay-two'>
                <i className='flaticon-password'></i>
                <h6>Exterior</h6>

                <span className='flaticon-password'></span>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='collage-area'>
            <ImageCollage
              selectedCategory={selectedCategory}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
