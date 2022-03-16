import { Fragment } from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import { Divider } from '@mui/material';
import EquipmentTable from '../components/equipmentTable';
import LatestNews from '../components/Common/LatestNews';
import OnboardEquipmentMosaic from '../components/Common/OnboardEquipmentMosaic';

// pageTitle='Electronics &amp; Navigation Equipment'
// homePageUrl='/'
// homePageText='Home'
// activePageText='Electronics &amp; Navigation Equipment'
// props.title = 'Navigation Equipment"
// props.category = 'nav'

const OnboardEquipmentDetails = (props) => {
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
        pageTitle={props.pageTitle}
        homePageUrl={props.homePageUrl}
        homePageText='Home'
        activePageText={props.pageTitle}
      />

      <div className='equipment-details-area'>
        <div className='container'>
          <div className='row'>
            <h1>{props.title}</h1>
            <ul className='mosaic-category'>
              {categoryList.map((item, index) => (
                <li
                  className='mosaic-category-item'
                  key={`${item}-${index}`}
                  onClick={clickHandler}>
                  {item}
                </li>
              ))}
            </ul>
            <Divider
              sx={{ marginBottom: '1rem' }}></Divider>
            <div className='mosaic-area col-lg-12'>
              <OnboardEquipmentMosaic
                category={props.category}
              />
            </div>
            <Divider />
            <EquipmentTable
              equipmentCategory={props.category}
            />
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default OnboardEquipmentDetails;
