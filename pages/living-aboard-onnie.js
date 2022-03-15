import { Fragment } from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import PartnersTwo from '../components/Common/PartnersTwo';
import Services from '../components/Services/Services';

const LivingAboardOnnie = () => {
  return (
    <Fragment>
      <Navbar />
      <PageBanner
        pageTitle='Living Aboard Onnie'
        homePageUrl='/'
        homePageText='Home'
        activePageText='Living Aboard Onnie'
      />

      <div className='learn-more-details-area ptb-100'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <div className='learn-more-content'>
                <h3>Living Aboard Onnie</h3>
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
              <div className='learn-more-content-one'>
                <img
                  src='/images/solution-details/solution-details-1.jpg'
                  alt='Image'
                />
              </div>
            </div>

            <div className='col-lg-12'>
              <div className='learn-more-content two'>
                <h3>I didn't see that coming!</h3>

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
          </div>
        </div>
      </div>
      <PartnersTwo />
      <Services />

      <Footer />
    </Fragment>
  );
};

export default LivingAboardOnnie;
