import { Fragment } from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Fragment>
      <footer className='footer-area pt-100 pb-70 jarallax'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6'>
              <div className='single-footer-widget'>
                <Link href='/'>
                  <a className='logo'>
                    <img
                      src='/images/logo.png'
                      alt='Image'
                    />
                  </a>
                </Link>

                <p>
                  Lorem ipsum dolor sit amet, consec tetur
                  adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna
                  aliqua consec tetur adipiscing.
                </p>

                <ul className='social-icon'>
                  <li>
                    <a
                      href='https://www.facebook.com/LifeAboard'
                      target='_blank'>
                      <i className='bx bxl-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.instagram.com/mylifeaboard22'
                      target='_blank'>
                      <i className='bx bxl-instagram'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.linkedin.com/in/joeebner/'
                      target='_blank'>
                      <i className='bx bxl-linkedin-square'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://twitter.com/mylifeaboard22'
                      target='_blank'>
                      <i className='bx bxl-twitter'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-md-6'>
              <div className='single-footer-widget'>
                <h3>Address</h3>

                <ul className='address'>
                  <li className='location'>
                    <i className='bx bxs-location-plus'></i>
                    Portland, OR
                  </li>
                  <li>
                    <i className='bx bxs-envelope'></i>
                    <a href='mailto:info@mylifeaboard.com'>
                      info@mylifeaboard.com
                    </a>
                  </li>
                  <li>
                    <i className='bx bxs-phone-call'></i>

                    <a href='tel:+1-(503)-770-0382'>
                      +1 (503) 770-0382
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-md-6'>
              <div className='single-footer-widget'>
                <h3>The Adventure</h3>

                <ul className='import-link'>
                  <li>
                    <Link href='/coming-soon'>
                      <a>DIY Refit &amp; Remodel</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/coming-soon'>
                      <a>Living Aboard Onnie</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/coming-soon'>
                      <a>Videos</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/coming-soon'>
                      <a>Sailing Community</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='https://www.patreon.com/mylifeaboard'>
                      <a>Support Onnie</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/coming-soon'>
                      <a>Collaboration</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-md-6'>
              <div className='single-footer-widget'>
                <h3>Resources</h3>

                <ul className='import-link'>
                  <li>
                    <Link href='/sponsors'>
                      <a>Sponsors</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='https://asa.com/'>
                      <a>American Sailing Association</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/coming-soon'>
                      <a>Onnie Merch</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/blog-1'>
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/coming-soon'>
                      <a>Case Studies</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/contact'>
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className='copy-right-area'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-6'>
              <p>
                Copyright &copy; {currentYear} Noteworthy
                Productions, LLC.
              </p>
            </div>

            <div className='col-lg-6 col-md-6'>
              <ul className='footer-menu'>
                <li>
                  <Link href='/privacy-policy'>
                    <a>Privacy Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href='/terms-conditions'>
                    <a>Terms &amp; Conditions</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
