import React from 'react';
import Link from 'next/link';
import { dummyLatestBlogs } from '../../pages/api/dummyLatestBlogs';

const blogImgUrl = [
  '/images/blog/blog-cover-images/buying-onnie-cover.jpg',
  '/images/blog/blog-cover-images/day-one-cover.jpg',
  '/images/blog/blog-cover-images/to-do-cover.jpg',
];

const LatestNews = () => {
  return (
    <div className='latest-news-area pb-70'>
      <div className='container'>
        <div className='section-title'>
          <span>Latest News</span>
          <h2>What's going on in Onnieland?</h2>
        </div>

        <div className='row'>
          {dummyLatestBlogs.map((blogPost, index) => (
            <div
              key={`${blogPost.headline}-${blogPost.id}`}
              className='col-lg-4 col-md-6'>
              <div className='latest-news-single'>
                <div className='latest-news-img'>
                  <div className='latest-news-cover-img-border'></div>
                  <Link href={blogPost.url}>
                    <a>
                      <img
                        src={blogPost.coverImageUrl}
                        alt='Image'
                      />
                    </a>
                  </Link>
                </div>

                <div className='latest-news-content'>
                  <span>{blogPost.date}</span>
                  <h3>
                    <Link href='/blog-details'>
                      <a>{blogPost.headline}</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
