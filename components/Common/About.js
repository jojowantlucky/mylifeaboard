import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div id='about' className='about-area pt-100 pb-70'>
      <div className='container'>
        <div className='section-title'>
          <span>About</span>
          <h2>Jojo and the boat.</h2>
        </div>

        <div className='row justify-content-center'>
          <div className='col-lg-4 col-sm-6'>
            <div className='about-single'>
              <Link href='/about-onnie'>
                <a>
                  <img
                    src='/images/about/onnie.jpg'
                    alt='Image'
                  />
                </a>
              </Link>

              <div className='about-content'>
                <Link href='/about-onnie'>
                  <a>
                    <h3>Onnie</h3>
                    <span>1974 Cascade High Side 42</span>
                  </a>
                </Link>

                <ul>
                  <li>
                    <a
                      href='https://twitter.com/'
                      target='_blank'>
                      <i className='bx bxl-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.instagram.com/'
                      target='_blank'>
                      <i className='bx bxl-instagram'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.facebook.com/'
                      target='_blank'>
                      <i className='bx bxl-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.linkedin.com/'
                      target='_blank'>
                      <i className='bx bxl-linkedin'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-sm-6'>
            <div className='about-single'>
              <Link href='/about-joe'>
                <a>
                  <img
                    src='/images/about/joe.jpg'
                    alt='Image'
                  />
                </a>
              </Link>

              <div className='about-content'>
                <Link href='/about-joe'>
                  <a>
                    <h3>Joe Ebner</h3>
                    <span>
                      DJ, Musician, Business Owner
                    </span>
                  </a>
                </Link>
                <ul>
                  <li>
                    <a
                      href='https://twitter.com/joeebner'
                      target='_blank'>
                      <i className='bx bxl-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.instagram.com/joeebner'
                      target='_blank'>
                      <i className='bx bxl-instagram'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.facebook.com/joeebner'
                      target='_blank'>
                      <i className='bx bxl-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.linkedin.com/joeebner'
                      target='_blank'>
                      <i className='bx bxl-linkedin'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
