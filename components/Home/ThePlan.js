import React from 'react';

const ThePlan = () => {
  return (
    <div id='the-plan' className='the-plan-area pb-70'>
      <div className='container'>
        <div className='section-title'>
          <span>The Plan</span>
          <h2>Start from the ground up.</h2>
          <p>
            I bought a 42' sailboat with no experience
            whatsoever. I started this journey by reading
            and researching as much as I possibly could
            before taking the leap. Onnie needs a lot of TLC
            and I'm totally betting I'll have to learn a
            thing or two for some projects.
          </p>

          <p>
            Anything that went unused for a year a more is
            no longer in my life. You've probably heard this
            before, but few things feel as good as not
            having a ton things you don't need or use.
          </p>
        </div>

        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <div className='the-plan-img'>
              <img src='/images/the-plan.jpg' alt='Image' />
            </div>
          </div>

          <div className='col-lg-6'>
            <div className='the-plan-content'>
              <h3>Main Goals</h3>

              <div className='row'>
                <div className='col-lg-6 col-sm-6'>
                  <div className='the-plan-single'>
                    <h3>Learn to sail</h3>
                    <p>
                      Before I leave the slip, I have to
                      learn to sail.
                    </p>
                  </div>
                </div>

                <div className='col-lg-6 col-sm-6'>
                  <div className='the-plan-single'>
                    <h3>Refit and Remodel</h3>
                    <p>
                      Onnie needs a lot of TLC. Returning
                      her to her former glory began March
                      23, 2022.
                    </p>
                  </div>
                </div>

                <div className='col-lg-6 col-sm-6'>
                  <div className='the-plan-single'>
                    <h3>Sail the world</h3>
                    <p>
                      See where we've been and where we're
                      going to go. The world is our for the
                      exploring and you only live once.
                    </p>
                  </div>
                </div>

                <div className='col-lg-6 col-sm-6'>
                  <div className='the-plan-single'>
                    <h3>Document it all</h3>
                    <p>
                      sed diam nonumy eirmod tempor invidunt
                      ut labore et.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThePlan;
