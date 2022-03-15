import { Fragment } from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import BlogSidebar from '../components/Blog/BlogSidebar';
import Footer from '../components/_App/Footer';

const projects = [
  {
    id: '01',
    catogory: 'engine',
    blogBaseUrl: '/blog-details/',
    mainImgSrcUrl: '/images/blog/blog-4.jpg',
    mainImgAltText: 'alt text goes here',
    headline: 'headline 1',
    byline: 'byline goes here',
    firstParagraph:
      'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis mod tincidunt ut laoreet dolore magna aliquam erat volutpat. consectetuer adipiscing elit',
    author: "John Doe", 
    publishDate: 'September 1, 2029'
  },
];

const ProjectsByCategory = () => {
  return (
    <Fragment>
      <Navbar />
      <PageBanner
        pageTitle='Projects by Category'
        homePageUrl='/'
        homePageText='Home'
        activePageText='Projects by Category'
      />

      <div className='blog-column-one-area ptb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='row'>
                {projects.map((project) => (
                  <div className='col-lg-12'>
                    <div className='single-blog-posts'>
                      <Link href='/blog-details'>
                        <a>
                          <img
                            src={project.imgSrc}
                            alt={project.altText}
                          />
                        </a>
                      </Link>

                      <div className='single-blog-content'>
                        <span>Security</span>

                        <h3>
                          <Link href='/blog-details'>
                            <a>
                              The Essentials of
                              Cybersecurity Solutions
                            </a>
                          </Link>
                        </h3>

                        <p>
                          Nam liber tempor cum soluta nobis
                          eleifend option congue nihil
                          imperdiet doming id quod mazim
                          placerat facer possim assum. Lorem
                          ipsum dolor sit amet, consectetuer
                          adipiscing elit, sed diam nonummy
                          nibh euis mod tincidunt ut laoreet
                          dolore magna aliquam erat
                          volutpat. consectetuer adipiscing
                          elit
                        </p>

                        <ul className='admin'>
                          <li>
                            <a href='#'>
                              <i className='bx bx-user-circle'></i>
                              Posted by: Carl Bradshaw
                            </a>
                          </li>
                          <li className='float'>
                            <i className='bx bx-calendar-alt'></i>
                            September 20, 2020
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='col-lg-4'>
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default ProjectsByCategory;
