import { Fragment } from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';

const LearnMore = () => {
  return (
    <Fragment>
      <Navbar />
      <PageBanner
        pageTitle='Learn More'
        homePageUrl='/'
        homePageText='Home'
        activePageText='Learn More'
      />

      <div className='learn-more-details-area ptb-100'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <div className='learn-more-content'>
                <h3>Learn  More about stuff</h3>
                <p>
                  Duis autem vel eum iriure dolor in
                  hendrerit in vulputate velit esse molestie
                  conse quat, vel illum dolore eu feugiat
                  nulla facilisis at vero eros et accumsan
                  et iusto odio dignissim qui blandit
                  praesent luptatum zzril delenit augue duis
                  dolore te feugait nulla facilisi. Lorem
                  ipsum dolor sit amet, consectetuer
                  adipiscing elit, sed diam nonummy nibh
                  euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.
                </p>

                <p>
                  Ut wisi enim ad minim veniam, quis nostrud
                  exerci tation ullamcorper suscipit
                  lobortis nisl ut aliquip ex ea commodo
                  consequat. Duis autem vel eum iriure dolor
                  in hendrerit in vulputate velit esse
                  molestie consequat, vel illum dolore eu
                  feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui
                  blandit praesent luptatum zzril delenit
                  augue duis dolore te feugait nulla
                  facilisi.
                </p>
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='learn-more-details-one'>
                <img
                  src='/images/solution-details/solution-details-1.jpg'
                  alt='Image'
                />
              </div>
            </div>

            <div className='col-lg-12'>
              <div className='learn-more-content two'>
                <h3>
                  Noteworthy Productions is awesome!
                </h3>

                <p>
                  Duis autem vel eum iriure dolor in
                  hendrerit in vulputate velit esse molestie
                  consequat, vel illum dolore eu feugiat
                  nulla facilisis at vero eros et accumsan
                  et iusto odio dignissim qui blandit
                  praesent luptatum zzril delenit augue duis
                  dolore te feugait nulla facilisi. Lorem
                  ipsum dolor sit amet, consectetuer
                  adipiscing elit, sed diam nonummy nibh
                  euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.
                </p>

                <p>
                  Ut wisi enim ad minim veniam, quis nostrud
                  exerci tation ullamcorper suscipit
                  lobortis nisl ut aliquip ex ea commodo
                  consequat. Duis autem vel eum iriure dolor
                  in hendrerit in vulputate velit esse
                  molestie consequat, vel illum dolore eu
                  feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui
                  blandit praesent luptatum zzril delenit
                  augue duis dolore te feugait nulla
                  facilisi.
                </p>
              </div>
            </div>

            <div className='col-lg-12'>
              <div className='learn-more-content three'>
                <h3>Learn More For Everyone</h3>

                <p>
                  Duis autem vel eum iriure dolor in
                  hendrerit in vulputate velit esse molestie
                  consequat, vel illum dolore eu feugiat
                  nulla facilisis at vero eros et accumsan
                  et iusto odio dignissim qui blandit
                  praesent luptatum zzril delenit augue duis
                  dolore te feugait nulla facilisi. Lorem
                  ipsum dolor sit amet, consectetuer
                  adipiscing elit, sed diam nonummy nibh
                  euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.
                </p>
              </div>
            </div>

            <div className='col-lg-12'>
              <div className='learn-more-content four'>
                <h3>Learning more Challenge</h3>

                <p>
                  Duis autem vel eum iriure dolor in
                  hendrerit in vulputate velit esse molestie
                  consequat, vel illum dolore eu feugiat
                  nulla facilisis at vero eros et accumsan
                  et iusto odio dignissim qui blandit
                  praesent luptatum zzril delenit augue duis
                  dolore te feugait nulla facilisi. Lorem
                  ipsum dolor sit amet, consectetuer
                  adipiscing elit, sed diam nonummy nibh
                  euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.
                </p>

                <ul>
                  <li>
                    <i className='bx bx-check-circle'></i>
                    Words go here
                  </li>
                  <li>
                    <i className='bx bx-check-circle'></i>
                    move the needle towards low hanging fruit
                  </li>
                  <li>
                    <i className='bx bx-check-circle'></i>
                    Protecting malware
                  </li>
                  <li>
                    <i className='bx bx-check-circle'></i>
                    Defending insider threats
                  </li>
                  <li>
                    <i className='bx bx-check-circle'></i>
                    yay websites!
                  </li>
                  <li>
                    <i className='bx bx-check-circle'></i>
                    Things and stuff
                  </li>
                </ul>

                <div className='challenge-btn'>
                  <a
                    href='#'
                    className='default-btn overly-one'>
                    <span>Talk To an Expert</span>
                  </a>

                  <a
                    href='#'
                    className='default-btn overly-one two'>
                    <span>Talk To an Expert</span>
                  </a>
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

export default LearnMore;
