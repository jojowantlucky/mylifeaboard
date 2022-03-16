import { useState, useEffect } from 'react';
import Link from 'next/link';
import projectCategories from '../../pages/api/projectCategories';

const ProjectCategoryGrid = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  /*
  1. fetch allBlogPosts
  2. fetch allBlogPostCategories
  3. create new array of objects called blogCategoryTiles
    a. for each allBlogPosts.category name, find allBlogPostCategory object name that matches allBlogPosts.category name. 
    b. add that allBlogPostCategory object to blogCategoryTiles 
  */

  useEffect(() => {
    fetch(
      'https://api.airtable.com/v0/appgzYrTBQ3bcGlF0/blog-posts?',
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((res) => res.json())
      .then((blogPost) => {
        setBlogPosts(blogPost.records);
      })
      .catch((error) => console.log(error));
  }, []);

  const blogCategoriesDupes = [];

  blogPosts.forEach((post) =>
    blogCategoriesDupes.push(
      post.fields.categories.split(', ')
    )
  );

  const blogCategories = [
    ...new Set(blogCategoriesDupes.flat()),
  ];
  console.log(blogCategories);

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
