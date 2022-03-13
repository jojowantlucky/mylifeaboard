import { Fragment } from 'react';
import Link from 'next/link';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';

const ElectronicsAndNav = () => {
  return (
    <Fragment>
      <Navbar />
      <PageBanner
        pageTitle='Navigation Equipment'
        homePageUrl='/'
        homePageText='Home'
        activePageText='Navigation Equipment'
      />

      <div className='equipment-details-area'>
        <div className='container'>
          <div className='row'>
            <h1>Navigation Equipment</h1>
            <ul>
              <li>Chartplotter</li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default ElectronicsAndNav;
