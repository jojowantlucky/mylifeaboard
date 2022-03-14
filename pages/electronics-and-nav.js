import { Fragment } from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import StackGrid from 'react-stack-grid';
import { Divider } from '@mui/material';
import EquipmentTable from '../components/equipmentTable';
import LatestNews from '../components/Common/LatestNews';

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
            <div className='mosaic-area col-lg-12'>
              <StackGrid
                columnWidth={150}
                gutterWidth={10}
                gutterHeight={10}>
                <div key='key1'>
                  <img src='/images/placeholder/mosaic-10.jpg' />
                </div>
                <div key='key2'>
                  <img src='/images/placeholder/mosaic-1.jpg' />
                </div>
                <div key='key3'>
                  <img src='/images/placeholder/mosaic-3.jpg' />
                </div>
                <div key='key4'>
                  <img src='/images/placeholder/mosaic-8.jpg' />
                </div>
                <div key='key5'>
                  <img src='/images/placeholder/mosaic-2.jpg' />
                </div>
                <div key='key6'>
                  <img src='/images/placeholder/mosaic-4.jpg' />
                </div>
                <div key='key7'>
                  <img src='/images/placeholder/mosaic-7.jpg' />
                </div>
                <div key='key8'>
                  <img src='/images/placeholder/mosaic-6.jpg' />
                </div>
              </StackGrid>
            </div>
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
              <StackGrid
                columnWidth={150}
                gutterWidth={10}
                gutterHeight={10}>
                <div key='key1'>
                  <img src='/images/placeholder/mosaic-10.jpg' />
                </div>
                <div key='key2'>
                  <img src='/images/placeholder/mosaic-1.jpg' />
                </div>
                <div key='key3'>
                  <img src='/images/placeholder/mosaic-3.jpg' />
                </div>
                <div key='key4'>
                  <img src='/images/placeholder/mosaic-8.jpg' />
                </div>
                <div key='key5'>
                  <img src='/images/placeholder/mosaic-2.jpg' />
                </div>
                <div key='key6'>
                  <img src='/images/placeholder/mosaic-4.jpg' />
                </div>
                <div key='key7'>
                  <img src='/images/placeholder/mosaic-7.jpg' />
                </div>
                <div key='key8'>
                  <img src='/images/placeholder/mosaic-6.jpg' />
                </div>
              </StackGrid>
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
