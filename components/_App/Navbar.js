import { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menu, setMenu] = useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    let elementId = document.getElementById('navbar');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky');
      } else {
        elementId.classList.remove('is-sticky');
      }
    });
    window.scrollTo(0, 0);
  });

  const classOne = menu
    ? 'collapse navbar-collapse'
    : 'collapse navbar-collapse show';
  const classTwo = menu
    ? 'navbar-toggler navbar-toggler-right collapsed'
    : 'navbar-toggler navbar-toggler-right';

  return (
    <header className='header-area'>
      <div id='navbar' className='navbar-area'>
        <div className='main-nav'>
          <div className='container'>
            <nav className='navbar navbar-expand-md'>
              <Link href='/'>
                <a
                  onClick={toggleNavbar}
                  className='navbar-brand'>
                  <img
                    src='/images/logo.png'
                    alt='my life aboard logo'
                  />
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'>
                <span className='icon-bar top-bar'></span>
                <span className='icon-bar middle-bar'></span>
                <span className='icon-bar bottom-bar'></span>
              </button>

              <div
                className={classOne}
                id='navbarSupportedContent'>
                <ul className='navbar-nav m-auto'>
                  <li className='nav-item'>
                    <Link href='/' activeclassname='active'>
                      <a
                        onClick={toggleNavbar}
                        className='nav-link'>
                        Home
                      </a>
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link
                      href='/#the-plan'
                      activeclassname='active'>
                      <a
                        onClick={toggleNavbar}
                        className='nav-link'>
                        The Plan
                      </a>
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link
                      href='/#about'
                      activeclassname='active'>
                      <a
                        onClick={toggleNavbar}
                        className='nav-link'>
                        About
                      </a>
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link href='/#at-a-glance'>
                      <a
                        onClick={toggleNavbar}
                        className='nav-link'
                        activeclassname='active'>
                        At A Glance
                      </a>
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link
                      href='/main-blog-posts-page'
                      activeclassname='active'>
                      <a
                        onClick={toggleNavbar}
                        className='nav-link'>
                        News
                      </a>
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link
                      href='/contact'
                      activeclassname='active'>
                      <a
                        onClick={toggleNavbar}
                        className='nav-link'>
                        Contact
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className='donate-button-container'>
                <div className='donate'>
                  <Link href='https://www.patreon.com/mylifeaboard'>
                    <a
                      className='default-btn'
                      target='_blank'>
                      <span>Donate</span>
                    </a>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
