import { Fragment } from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import { Divider } from '@mui/material';
import EquipmentTable from '../components/equipmentTable';
import LatestNews from '../components/Common/LatestNews';
import mosaicImages from './api/mosaicImages';

const ElectronicsAndNav = () => {
  const clickHandler = (event) => {
    console.log('clicked: ', event.target.innerHTML);
  };

  const categoryList = [
    'Category 1',
    'Category 2',
    'Category 3',
    'Category 4',
    'Category 5',
  ];

  return (
    <Fragment>
      <Navbar />
      <PageBanner
        pageTitle='Electronics &amp; Navigation Equipment'
        homePageUrl='/'
        homePageText='Home'
        activePageText='Electronics &amp; Navigation Equipment'
      />

      <div className='equipment-details-area'>
        <div className='container'>
          <div className='row'>
            <h1>Navigation Equipment</h1>
            <ul className='mosaic-picker'>
              {categoryList.map((item, index) => (
                <li
                  key={`${item}-${index}`}
                  onClick={clickHandler}>
                  {item}
                </li>
              ))}
            </ul>
            <Divider
              sx={{ marginBottom: '1rem' }}></Divider>
            <div className='mosaic-area col-lg-12'></div>
            <Divider />
            <EquipmentTable />
          </div>
          <div className='row'>
            <h1>Electronics Equipment</h1>
            <ul className='mosaic-picker'>
              {categoryList.map((item, index) => (
                <li
                  key={`${item}-${index}`}
                  onClick={clickHandler}>
                  {item}
                </li>
              ))}
            </ul>
            <Divider
              sx={{ marginBottom: '1rem' }}></Divider>
            <div className='mosaic-area col-lg-12'>
              {/* ****************************
MOSIAC GOES HERE
**************************** */}
            </div>
            <Divider />
            <EquipmentTable />
          </div>
          <LatestNews />
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default ElectronicsAndNav;
