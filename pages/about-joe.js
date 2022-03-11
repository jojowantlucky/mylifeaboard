import { Fragment } from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AboutJoeContent from '../components/About/AboutJoeContent';
import OurChallenges from '../components/Common/OurChallenges';
import Protects from '../components/About/Protects';
import Testimonials from '../components/Common/Testimonials';
import Sponsors from '../components/Common/Sponsors';
import Footer from '../components/_App/Footer';

const AboutUs = () => {
  return (
    <Fragment>
      <Navbar />
      <PageBanner
        pageTitle='About Me'
        homePageUrl='/'
        homePageText='Home'
        activePageText='About Me'
      />

      <div className='pt-100 pb-70'>
        <AboutJoeContent />
      </div>

      <OurChallenges />

      <Protects />

      <Testimonials />

      <Sponsors />

      <Footer />
    </Fragment>
  );
};

export default AboutUs;
