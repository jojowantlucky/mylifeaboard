import { Fragment } from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContactForm from '../components/Contact/ContactForm';
import Footer from '../components/_App/Footer';
import dynamic from 'next/dynamic';

const Contact = () => {
  const MapWithNoSSR = dynamic(
    () => import('../components/Map'),
    { ssr: false }
  );
  return (
    <Fragment>
      <Navbar />
      <PageBanner
        pageTitle='Contact Us'
        homePageUrl='/'
        homePageText='Home'
        activePageText='Contact Us'
      />

      <section className='main-contact-area ptb-100'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-8'>
              <ContactForm />
            </div>

            <div className='col-lg-4'>
              <div className='contact-info'>
                <h3>Get in Touch</h3>
                <p>
                  I look forward to hearing from you!
                </p>

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
        <MapWithNoSSR width={'100%'} />
      </div>
      {/* <div className='map-area'>
        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96573.31103674119!2d-73.91097366523668!3d40.85176866829554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28b553a697cb1%3A0x556e43a78ff15c77!2sThe%20Bronx%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1600202608808!5m2!1sen!2sbd'></iframe>
      </div> */}

      <Footer />
    </Fragment>
  );
};

export default Contact;
