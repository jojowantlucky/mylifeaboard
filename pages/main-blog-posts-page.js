import { Fragment } from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import BlogSidebar from '../components/Blog/BlogSidebar';

import { blogPosts } from './api/dummyBlogPosts';

const MainBlogPostsPage = () => {
  return (
    <Fragment>
      <Navbar />
      <PageBanner
        pageTitle='All the News'
        homePageUrl='/'
        homePageText='Home'
        activePageText='All the News'
      />

      <div className='blog-column-two-area ptb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='left-sidebar'>
                <BlogSidebar />
              </div>
            </div>

            <div className='col-lg-8'>
              <div className='row'>
                {blogPosts.map((post) => (
                  <div
                    className='col-lg-6 col-md-6'
                    key={post.id}>
                    <div className='single-blog-posts'>
                      <Link
                        href={`/blog-details/${post.id}`}>
                        <a>
                          <img
                            src={post.imgUrl}
                            alt={post.alt}
                          />
                        </a>
                      </Link>

                      <div className='single-blog-content'>
                        <span>{post.category}</span>

                        <h3>
                          <Link
                            href={`/blog-details/${post.slug}`}>
                            <a>{post.headline}</a>
                          </Link>
                        </h3>

                        <p>{post.abstract}</p>

                        <ul className='admin'>
                          <li>
                            <a href='#'>
                              <i className='bx bx-user-circle'></i>
                              {post.author}
                            </a>
                          </li>
                          <li className='float'>
                            <i className='bx bx-calendar-alt'></i>
                            {post.date}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}

                <div className='col-lg-12'>
                  <div className='pagination-area'>
                    <a
                      href='#'
                      className='prev page-numbers'>
                      <i className='bx bx-chevron-left'></i>
                    </a>

                    <span
                      className='page-numbers current'
                      aria-current='page'>
                      1
                    </span>
                    <a href='#' className='page-numbers'>
                      2
                    </a>
                    <a href='#' className='page-numbers'>
                      3
                    </a>

                    <a
                      href='#'
                      className='next page-numbers'>
                      <i className='bx bx-chevron-right'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default MainBlogPostsPage;
