import { useEffect, useState } from 'react';
import Link from 'next/link';
// import { blogPosts } from '../../pages/api/dummyBlogPosts';
import getAllBlogPosts from '../../pages/api/getAllBlogPosts';
import dedupeCategories from '../../lib/dedupeCategories';

const BlogSidebar = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      getAllBlogPosts('date', 'desc').then((posts) => {
        setPosts(posts);
      });
    };
    getPosts();
  }, []);

  const categories = dedupeCategories(posts);
  // console.log(posts);
  const threeRecentPosts = posts.slice(0, 3);

  return (
    <div className='widget-sidebar'>
      <div className='sidebar-widget search'>
        <form className='search-form'>
          <input
            className='form-control'
            name='search'
            placeholder='Search here'
            type='text'
          />
          <button className='search-button' type='submit'>
            <i className='bx bx-search'></i>
          </button>
        </form>
      </div>

      <div className='sidebar-widget recent-post'>
        <h3 className='widget-title'>Recent Posts</h3>
        <ul>
          {threeRecentPosts.map((post, index) => (
            <li key={`recents-${index}`}>
              <Link
                href={`/blog-details/${post.fields.url}`}>
                <a>
                  {post.fields.headline}
                  <img
                    src={`/images/blog/blog-cover-images/${post.fields.thumbnailUrl}`}
                    alt={post.fields.thumbnailAltText}
                  />
                </a>
              </Link>
              <span>{post.fields.date}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className='sidebar-widget categories'>
        <h3>Categories</h3>

        <ul>
          {categories.map((category, index) => (
            <li key={`cateory-${index}`}>
              <a href='/blog-1'>{category}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className='sidebar-widget categories'>
        <h3>Archives</h3>

        <ul>
          <li>
            <a href='#'>July 2022</a>
          </li>
          <li>
            <a href='#'>June 2022</a>
          </li>
          <li>
            <a href='#'>May 2022</a>
          </li>
          <li>
            <a href='#'>April 2022</a>
          </li>
          <li>
            <a href='#'>March 2022</a>
          </li>
          <li>
            <a href='#'>November 2019</a>
          </li>
        </ul>
      </div>

      <div className='sidebar-widget tags mb-0'>
        <h3>Tags</h3>

        <ul>
          <li>
            <a href='/blog-1'>Marina</a>
          </li>
          <li>
            <a href='/blog-1'>Life</a>
          </li>
          <li>
            <a href='/blog-1'>Education</a>
          </li>
          <li>
            <a href='/blog-1'>Diesel</a>
          </li>
          <li>
            <a href='/blog-1'>Wiring</a>
          </li>
          <li>
            <a href='/blog-1'>Gadgeteering</a>
          </li>
          <li>
            <a href='/blog-1'>Opposite Day</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogSidebar;
