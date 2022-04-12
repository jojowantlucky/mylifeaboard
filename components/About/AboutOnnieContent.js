import React from 'react';
import Link from 'next/link';
import {
  resetIdCounter,
  Tab,
  Tabs,
  TabList,
  TabPanel,
} from 'react-tabs';
resetIdCounter();

const location = 'Portland, OR';

const AboutOnnieContent = () => {
  return (
    <div className='about-us-area'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <div className='about-img mb_30'>
              <img
                src='/images/about-img.jpg'
                alt='Image'
              />
            </div>
          </div>

          <div className='col-lg-6'>
            <div className='about-content'>
              <div className='about-title'>
                <span>1974</span>
                <h2>Cascade High Side 42'</h2>
              </div>

              <Tabs>
                <TabList>
                  <Tab>History</Tab>
                  <Tab>Cascade/Yacht Constructors</Tab>
                  <Tab>Vetus Engines</Tab>
                </TabList>

                <TabPanel>
                  <p>
                    Onnie was built in 1974 and finished by
                    XXXXX. Her name comes from her original
                    owner's kids names. John - her previous
                    owner and builder's son - share that
                    "while not exact names my siblings were
                    known by Connie, Donnie, Johnny and
                    Bonnie. So the obvious name for the boat
                    was ‘Onnie'.
                  </p>
                  <br />
                  <p>
                    Boats have piqued my interest for the
                    past couple of years. Everything about
                    them appeals to me: fixing her up, going
                    where ever I want, and having fun. Over
                    the years, I've worked for big companies
                    and for myself. Noteworthy Productions,
                    LLC led me all across the country and
                    helped me realize how much I love
                    exploring new places.
                  </p>

                  <ul>
                    <li>
                      <i className='bx bx-check-circle'></i>
                      Current Location: {location}
                    </li>
                    <li>
                      <i className='bx bx-check-circle'></i>
                    </li>
                    <li>
                      <i className='bx bx-check-circle'></i>
                      Sloop Rigged
                    </li>
                    <li>
                      <i className='bx bx-check-circle'></i>
                      Purchase Date: March 11, 2022
                    </li>
                  </ul>
                </TabPanel>

                <TabPanel>
                  <p>
                    In 1954, Tom Green, Merle Starr, Wade
                    Cornwell, Jarvis Gould and Henry Morton
                    decided to use a new material called
                    fiberglass to build large sailboat
                    hulls. To prove the strength of this
                    composite material a sample was laid-up
                    and tested for strength. The final test
                    was done by shooting bullets from
                    different fire arms at it from a 10 foot
                    range. This “bullet proof” sample is
                    still with us.
                  </p>
                  <br />

                  <p>
                    They started the company by the name of
                    Yacht Constructors and they decided to
                    build the 34‘ sloop “Vigilant” designed
                    by Frederick Geiger of Yacht Sales &amp;
                    Service in Philadelphia, PA.
                  </p>
                  <div className='source-url'>
                    <Link href='http://www.cascadeyachtworks.com/history/cascadehistory.htm'>
                      <a>Source</a>
                    </Link>
                  </div>

                  <ul>
                    {/* <li>
                      <i className='bx bx-check-circle'></i>
                      Expensive housing in Portland, OR
                    </li>
                    <li>
                      <i className='bx bx-check-circle'></i>
                      COVID
                    </li>
                    <li>
                      <i className='bx bx-check-circle'></i>
                      Learn about boat stuff
                    </li>
                    <li>
                      <i className='bx bx-check-circle'></i>
                      Get rid of everything I don't need
                    </li> */}
                  </ul>
                </TabPanel>

                <TabPanel>
                  <p>
                    For more than 50 years, VETUS has been
                    an internationally operating developer,
                    manufacturer and trading company,
                    selling marine engines, generators and
                    technical equipment for recreational
                    craft and small commercial vessels.
                  </p>
                  <br />
                  <p>
                    An important part of our philosophy is
                    to offer you innovation through design.
                    We supply almost 4.000 technical
                    products that are mostly designed or
                    partly designed by the VETUS engineering
                    team. We design our products to make
                    your life on your boat easy and
                    enjoyable.
                  </p>
                  <div className='source-url'>
                    <Link href='https://www.vetus.com/en/why-vetus'>
                      <a>Source</a>
                    </Link>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
            <img
              className='cascade-logo'
              src='/images/about/cascade-logo.png'
              alt='cascade yachts logo'
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOnnieContent;
