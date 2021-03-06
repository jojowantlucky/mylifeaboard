import { Fragment } from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import dynamic from 'next/dynamic';
import GetInTouchForm from '../components/Common/GetInTouchForm';

const Contact = () => {
  const MapWithNoSSR = dynamic(
    () => import('../components/Map'),
    { ssr: false }
  );

  return (
    <Fragment>
      <Navbar />
      <PageBanner
        pageTitle='Contact Me'
        homePageUrl='/'
        homePageText='Home'
        activePageText='Contact Me'
      />

      <section className='main-contact-area ptb-100'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-8'>
              <GetInTouchForm />
            </div>

            <div className='col-lg-4'>
              <div className='contact-info'>
                <h3>Get in Touch</h3>
                <p>I look forward to hearing from you!</p>

                <ul className='address'>
                  <li className='location'>
                    <i className='bx bxs-location-plus'></i>
                    <span>Hailing Port</span>
                    Portland, OR
                  </li>
                  <li>
                    <i className='bx bxs-phone-call'></i>
                    <span>Phone</span>
                    <a href='tel:+1-(503)-770-0382'>
                      +1 (503) 770-0382
                    </a>
                  </li>
                  <li>
                    <i className='bx bxs-envelope'></i>
                    <span>Email</span>
                    <a href='mailto:info@mylifeaboard.com'>
                      info@mylifeaboard.com
                    </a>
                  </li>
                </ul>

                <div className='sidebar-follow-us'>
                  <h3>Follow us:</h3>

                  <ul className='social-wrap'>
                    <li>
                      <a
                        href='https://twitter.com/mylifeaboard2022'
                        target='_blank'>
                        <i className='bx bxl-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.instagram.com/mylifeaboard2022'
                        target='_blank'>
                        <i className='bx bxl-instagram'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.facebook.com/mylifeaboard'
                        target='_blank'>
                        <i className='bx bxl-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.youtube.com/mylifeaboard'
                        target='_blank'>
                        <i className='bx bxl-youtube'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='map-area'>
        <h4>Onnie's Current Location</h4>
        <MapWithNoSSR width={'100%'} />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Contact;
