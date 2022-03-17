import { Fragment } from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AboutOnnieContent from '../components/About/AboutOnnieContent';
import Gallery from '../components/Common/Gallery';
import Protects from '../components/About/Protects';
// import Testimonials from '../components/Common/Testimonials';
import Sponsors from '../components/Common/Sponsors';
import Footer from '../components/_App/Footer';
import Image from 'next/image';

const AboutOnnie = () => {
  return (
    <Fragment>
      <Navbar />
      <PageBanner
        pageTitle='About Onnie'
        homePageUrl='/'
        homePageText='Home'
        activePageText='About Onnie'
      />

      <div className='pt-100 pb-70'>
        <AboutOnnieContent />
        
      </div>
      <Gallery />

      <Sponsors />

      <Footer />
    </Fragment>
  );
};

export default AboutOnnie;
