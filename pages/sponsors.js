import { Fragment } from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const Sponsors = () => {
  return (
    <Fragment>
      <Navbar />
      <PageBanner
        pageTitle='Sponsors'
        homePageUrl='/'
        homePageText='Home'
        activePageText='Sponsors'
      />

      <div className='sponsors-area pt-100 pb-70'>
        <div className='container'>
          <div className='section-title'>
            <span>Sponsors</span>
            <h2>
              Thank you for supporting Onnie's adventures!
            </h2>
          </div>

          <div className='row'>
            <div className='col-lg-4 col-sm-6'>
              <div className='sponsors-single overly-one'>
                <div className='overly-two'>
                  <img
                    src='/images/sponsors-icon/icon-1.png'
                    alt='Image'
                  />

                  <Link href='/coming-soon'>
                    <a>
                      <h3>Check Website Url</h3>
                    </a>
                  </Link>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-sm-6'>
              <div className='sponsors-single overly-one'>
                <div className='overly-two'>
                  <img
                    src='/images/sponsors-icon/icon-2.png'
                    alt='Image'
                  />

                  <Link href='/coming-soon'>
                    <a>
                      <h3>
                        Check Emails Before Opening Them
                      </h3>
                    </a>
                  </Link>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-sm-6'>
              <div className='sponsors-single overly-one'>
                <div className='overly-two'>
                  <img
                    src='/images/sponsors-icon/icon-3.png'
                    alt='Image'
                  />

                  <Link href='/coming-soon'>
                    <a>
                      <h3>Remember To Log Off</h3>
                    </a>
                  </Link>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-sm-6'>
              <div className='sponsors-single overly-one'>
                <div className='overly-two'>
                  <img
                    src='/images/sponsors-icon/icon-4.png'
                    alt='Image'
                  />

                  <Link href='/coming-soon'>
                    <a>
                      <h3>Choose Strong Passwords</h3>
                    </a>
                  </Link>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-sm-6'>
              <div className='sponsors-single overly-one'>
                <div className='overly-two'>
                  <img
                    src='/images/sponsors-icon/icon-5.png'
                    alt='Image'
                  />

                  <Link href='/coming-soon'>
                    <a>
                      <h3>
                        Shop Safety In Trusted Websites
                      </h3>
                    </a>
                  </Link>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-sm-6'>
              <div className='sponsors-single overly-one'>
                <div className='overly-two'>
                  <img
                    src='/images/sponsors-icon/icon-6.png'
                    alt='Image'
                  />

                  <Link href='/coming-soon'>
                    <a>
                      <h3>Update Your Antivirus</h3>
                    </a>
                  </Link>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Sponsors;
