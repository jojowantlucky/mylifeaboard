import { Fragment } from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Related from '../components/Services/Related';
import CostsSidebar from '../components/Services/CostsSidebar';
import Footer from '../components/_App/Footer';

const OnniesCost = () => {
  return (
    <Fragment>
      <Navbar />
      <PageBanner
        pageTitle="Onnie's Costs"
        homePageUrl='/'
        homePageText='Home'
        activePageText="Onnie's Costs"
      />

      <div className='services-details-area pt-100 pb-70'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='services-details-content'>
                <div className='services-content'>
                  <h2>Cost Breakdown For Onnie</h2>
                  <p>
                    Every purchase related to Onnie is here
                    somewhere.
                  </p>

                  <div className='services-details-one'>
                    <img
                      src='/images/services-details/services-details-1.jpg'
                      alt='Image'
                    />
                  </div>
                </div>

                <div className='services-content'>
                  <h3>What is Cyber Security?</h3>
                  <p>
                    Duis autem vel eum iriure dolor in
                    hendrerit in vulputate velit esse
                    molestie consequat, vel illum dolore eu
                    feugiat nulla facilisis at vero eros et
                    accumsan et iusto odio dignissim qui
                    blandit praesent luptatum zzril delenit
                    augue duis dolore te feugait nulla
                    facilisi. Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat
                    volutpat. eum iriure dolor in hendrerit
                    in vulputate
                  </p>
                </div>

                <div className='services-content'>
                  <h3>Why is it Important?</h3>
                  <p>
                    Duis autem vel eum iriure dolor in
                    hendrerit in vulputate velit esse
                    molestie consequat, vel illum dolore eu
                    feugiat nulla facilisis at vero eros et
                    accumsan et iusto odio dignissim qui
                    blandit praesent luptatum zzril delenit
                    augue duis dolore te feugait nulla
                    facilisi. Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat
                    volutpat. nulla facilisi. Lorem ipsum
                    dolor sit
                  </p>
                  <p>
                    Duis autem vel eum iriure dolor in
                    hendrerit in vulputate velit esse
                    molestie consequat, vel illum dolore eu
                    feugiat nulla facilisis at vero eros et
                    accumsan et iusto odio dignissim qui
                    blandit praesent luptatum zzril delenit
                    augue duis dolore te feugait nulla
                    facilisi. feugait nulla facilisi. Lorem
                    ipsum dolor sit amet, consectetuer
                    adipiscing elit,
                  </p>
                </div>

                <Related />
              </div>
            </div>

            <div className='col-lg-4'>
              <CostsSidebar />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default OnniesCost;
