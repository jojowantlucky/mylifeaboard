import React from 'react';
import Link from 'next/link';
import projectCategories from '../../pages/api/projectCategories';
// what will I use for the URL?

const ProjectCategoryGrid = () => {
  return (
    <div className='project-category-grid-area pb-70'>
      <div className='container'>
        <div className='section-title'>
          <span>Onnie's Projects - DIY &amp; Not</span>
          <h2>Project Categories</h2>
        </div>

        <div className='row'>
          {projectCategories.map((project) => (
            <div
              key={`${project.categoryName}-${project.id}`}
              className='col-lg-3 col-sm-6'>
              <div className='onboard-equipment-single'>
                <div className='onboard-equipment-img'>
                  <Link href={project.url}>
                    <a>
                      <img
                        src={project.imgUrl}
                        alt={project.altText}
                      />
                    </a>
                  </Link>
                </div>

                <div className='onboard-equipment-content'>
                  <h3>
                    <Link href='/onboard-equipment-details'>
                      <a>{project.categoryName}</a>
                    </Link>
                  </h3>
                  <p>{project.description}</p>

                  <Link href={project.url}>
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
