import React from 'react';
import {
  resetIdCounter,
  Tab,
  Tabs,
  TabList,
  TabPanel,
} from 'react-tabs';
resetIdCounter();

const AboutJoeContent = () => {
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
                <span>About Me</span>
                <h2>
                  Holy crap....Am I really doing this?
                </h2>
              </div>

              <Tabs>
                <TabList>
                  <Tab>My Story</Tab>
                  <Tab>Why Now?</Tab>
                  <Tab>My Philosophy</Tab>
                </TabList>

                <TabPanel>
                  <p>
                    So...I am a musician, DJ, and a bit of a
                    tinker. One thing I most certainly am
                    not is a sailer. I've never even lived
                    on boats before. Not only that, Onnie is
                    the first boat I've every owned. She's
                    42.5 feet - 48' LOA - and needs some
                    work, but she's got good bones. I put my
                    offer down on her February 1, 2022 and
                    closed on 3/11/2022.
                  </p>
                  <br />
                  <p>
                    Boats have piqued my interest for the
                    past few years. Everything about them
                    appeals to me: fixing her up, learning
                    new things, overcoming challenges, going
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
                      Musician, DJ, &amp; Minister
                    </li>
                    {/* <li>
                      <i className='bx bx-check-circle'></i>
                      
                    </li> */}
                    <li>
                      <i className='bx bx-check-circle'></i>
                      Computer Programmer
                    </li>
                    <li>
                      <i className='bx bx-check-circle'></i>
                      Entrepreneur
                    </li>
                  </ul>
                </TabPanel>

                <TabPanel>
                  <p>
                    Have you ever felt that working in an
                    office always felt like being paid to
                    sit in detention? Nothing sucks more
                    than feeling trapped in an interminable
                    hell of boredom for so long. Working for
                    myself is so much better but has been
                    the single most difficult thing I've
                    ever done in my life.
                  </p>
                  <br />

                  <p>
                    It took me a while to realize that
                    living on a boat was going to be my next
                    quest. It makes total sense. Owning a
                    boat means a lot of work, a lot of
                    freedom, a lot of money, and a lot of
                    fun. Apart from the money piece, this
                    all sounds right up my alley. Boating
                    caught my eye years ago, but I needed to
                    learn more about eveything before I felt
                    comfortable taking the first step.
                  </p>
                  <p>
                    Before I could embark on the is crazy
                    jounrey, a couple of things needed to
                    fall in place:
                  </p>

                  <ul>
                    <li>
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
                    </li>
                  </ul>
                </TabPanel>

                <TabPanel>
                  <p>
                    Work hard - play hard and try not to be
                    an a-hole.
                  </p>

                  <ul>
                    <li>
                      <i className='bx bx-check-circle'></i>
                      Learn what you can
                    </li>
                    <li>
                      <i className='bx bx-check-circle'></i>
                      Stay humble
                    </li>
                    <li>
                      <i className='bx bx-check-circle'></i>
                      Embrace uncertainty
                    </li>
                    <li>
                      <i className='bx bx-check-circle'></i>
                      Get it done
                    </li>
                  </ul>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutJoeContent;
