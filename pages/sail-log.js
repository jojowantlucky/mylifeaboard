import { Fragment } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import Footer from '../components/_App/Footer';
import TripSelectorDropdown from '../components/TripSelectorDropdown';

const SailLog = () => {
  const MapWithNoSSR = dynamic(
    () => import('../components/Map'),
    { ssr: false }
  );

  return (
    <Fragment>
      <Navbar />
      <PageBanner
        pageTitle='Sail Log'
        homePageUrl='/'
        homePageText='Home'
        activePageText='Sail Log'
      />

      <div className='sail-log-area pt-100 pb-70'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='sail-log-content'>
                <div className='sail-log-title'>
                  <span>Real-Time Sail Log</span>
                  <h2>How it works</h2>
                </div>

                <div className='row'>
                  <div className='col-lg-12 col-md-6'>
                    <div className='sail-log-single overlay-one'>
                      <div className='overlay-two'>
                        <h3>
                          Onboard GPS Device Sends SMS
                          Message
                        </h3>
                        <p>
                          The GPS device onboard Onnie is a{' '}
                          <a
                            href='https://www.garmin.com/en-US/p/631368#devices'
                            target='_blank'>
                            Garmin inReach
                          </a>
                          . The unit's access to satellites
                          makes it possible to update
                          location to send simple SMS
                          messages any time from anywhere on
                          earth. It uses a phone number
                          hosted with Twilio.
                        </p>
                        <span>01</span>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-12 col-md-6'>
                    <div className='sail-log-single overlay-one'>
                      <div className='overlay-two'>
                        <h3>
                          Zapier Watches Twilio Number
                        </h3>
                        <p>
                          Every 15 minutes,{' '}
                          <Link href='https://www.zapier.com'>
                            <a target='_blank'>Zapier</a>
                          </Link>{' '}
                          checks the Twilio phone number for
                          new messages. When it finds a new
                          SMS message, Zapier updates this
                          site's back end that provides the
                          data you see marked in the map.
                        </p>
                        <span>02</span>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-12 col-md-6 offset-md-3 offset-lg-0'>
                    <div className='sail-log-single overlay-one'>
                      <div className='overlay-two'>
                        <h3>
                          Update Website with Location
                          Information
                        </h3>
                        <p>
                          New texts trigger Zapier to update
                          this site's database with the new
                          location information. Every time
                          you refresh this page, it updates
                          the map with the current info.
                        </p>
                        <span>03</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-6 pr-0'>
              <TripSelectorDropdown />
              <MapWithNoSSR width={'100%'} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default SailLog;
