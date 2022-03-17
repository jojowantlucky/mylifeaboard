import { useState, useEffect } from 'react';
import Link from 'next/link';
import projectCategories from '../../pages/api/dummyProjectCategories';
import getCategories from '../../pages/api/getCategories';

const ProjectCategoryGrid = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getAllCategories = async () => {
      getCategories().then((categories) => {
        setCategories(categories);
      });
    };
    getAllCategories();
  }, []);

  const titleCase = (word) => {
    return word.replace(/\w\S*/g, (text) => {
      return (
        text.charAt(0).toUpperCase() +
        text.substr(1).toLowerCase()
      );
    });
  };

  return (
    <div className='project-category-grid-area pb-70'>
      <div className='container'>
        <div className='section-title'>
          <span>Onnie's Projects - DIY &amp; Not</span>
          <h2>Project Categories</h2>
        </div>

        <div className='row'>
          {categories.map((category) => (
            <div
              key={`${category.fields.categoryName}-${category.fields.id}`}
              className='col-lg-3 col-sm-6'>
              <div className='onboard-equipment-single'>
                <div className='onboard-equipment-img'>
                  <Link href='/'>
                    <a>
                      <img
                        src='/images/services/services-1.jpg'
                        alt='this is alt text'
                      />
                    </a>
                  </Link>
                </div>

                <div className='onboard-equipment-content'>
                  <h3>
                    <Link href='/onboard-equipment-details'>
                      <a>{titleCase(category.fields.categoryName)}</a>
                    </Link>
                  </h3>
                  <p>
                    {category.fields.categoryDescription}
                  </p>

                  <Link href={category.fields.categoryUrl}>
                    <a className='read-more'>
                      Read more{' '}
                      <i className='flaticon-right-arrow'></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCategoryGrid;
