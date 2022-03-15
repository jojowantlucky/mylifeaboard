import { Fragment } from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import PartnersTwo from '../components/Common/PartnersTwo';
import Services from '../components/Projects/Projects';
import Link from 'next/link';

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
                  I'm a total noob at this and living aboard
                  is already very different from living on
                  land. Thankfully, I downsized a couple of
                  years ago. Despite being 42', space is a
                  rare commodity.
                </p>
                <p>
                  Since I don't know how to sail yet and
                  have no experience on such a big boat,
                  Onnie is going to stay put in the marina.
                  This is actually a good thing because I
                  can learn while I'm fixing her up.
                </p>

                <p>
                  Living aboard and fixing her up going to
                  be challenging. Her head doesn't work and
                  I can't use much power. So...what have I
                  learned so far?
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
                  Prior to buying Onnie I got her a{' '}
                  <Link href='/surveys/#vessel'>
                    <a>survey</a>
                  </Link>
                  ,{' '}
                  <Link href='/surveys/#mechanical'>
                    <a> mechanical inspection</a>
                  </Link>
                  , and{' '}
                  <Link href='/surveys/#rigging'>
                    <a>rigging inspection.</a>
                  </Link>{' '}
                  It was a{' '}
                  <Link href='/onnies-costs'>
                    <a>bit pricey</a>
                  </Link>
                  , but was totally worth it. The surveys
                  alone revealed around 100 <Link href="/projects">projects</Link>{' '} to get
                  me started.
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
