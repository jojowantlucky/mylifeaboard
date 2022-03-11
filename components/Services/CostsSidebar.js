import React from 'react';
import Link from 'next/link';

const costCategories = [
  'Electrical',
  'Engine',
  'Navigation',
  'Appliances',
  'Deck',
  'Sails & Rigging',
  'Interior Design',
];

const clickHandler = (category) => {
  console.log(category);
};

const ServiceSidebar = () => {
  return (
    <div className='services-sidebar'>
      <div className='services-category'>
        <ul>
          {costCategories.map((category) => (
            <li onClick={() => clickHandler(category)}>
              <Link href='/coming-soon'>
                <a>
                  {category}{' '}
                  <i className='bx bx-chevron-right'></i>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='services-pdf'>
        <ul>
          <li>
            <a href='/coming-soon'>
              <i className='bx bxs-file-pdf'></i>
              PDF Download
            </a>
          </li>
          <li>
            <a href='/coming-soon'>
              <i className='bx bxs-file-doc'></i>
              DOC Download
            </a>
          </li>
        </ul>
      </div>

      <div className='services-contact mb-30'>
        <h3>
          Do you have the money it takes to give me money?
        </h3>

        <Link href='https://www.patreon.com/mylifeaboard?fan_landing=true'>
          <a target='_blank' className='default-btn'>
            <span>Donate to the Adventure</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ServiceSidebar;
