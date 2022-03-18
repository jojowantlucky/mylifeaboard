import { useEffect, useState } from 'react';
import Link from 'next/link';
// import { dummyLatestBlogs } from '../../pages/api/dummyLatestBlogs';
import getAllBlogPosts from '../../pages/api/getAllBlogPosts';

const blogImgUrl = [
  '/images/blog/blog-cover-images/buying-onnie-cover.jpg',
  '/images/blog/blog-cover-images/day-one-cover.jpg',
  '/images/blog/blog-cover-images/to-do-cover.jpg',
];

// get 3 most recent posts

const LatestNews = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      getAllBlogPosts('date', 'desc').then((posts) => {
        setPosts(posts);
      });
    };
    getPosts();
  }, []);

  console.log(posts);
  const threeRecentPosts = posts.slice(0, 3);

  return (
    <div className='latest-news-area pb-70'>
      <div className='container'>
        <div className='section-title'>
          <span>Latest News</span>
          <h2>What's going on in Onnieland?</h2>
        </div>

        <div className='row'>
          {threeRecentPosts.map((post, index) => (
            <div
              key={`${post.fields.headline}-${index}`}
              className='col-lg-4 col-md-6'>
              <div className='latest-news-single'>
                <div className='latest-news-img'>
                  <div className='latest-news-cover-img-border'></div>
                  <Link href={`/post/${post.fields.url}`}>
                    <a>
                      <img
                        src={`/images/blog/blog-cover-images/${post.fields.thumbnailUrl}`}
                        alt='Image'
                      />
                    </a>
                  </Link>
                </div>

                <div className='latest-news-content'>
                  <span>{post.fields.date}</span>
                  <h3>
                    <Link href={`/post/${post.fields.url}`}>
                      <a>{post.fields.headline}</a>
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
