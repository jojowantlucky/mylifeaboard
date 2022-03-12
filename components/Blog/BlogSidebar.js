import React from 'react';
import Link from 'next/link';
import { blogPosts } from '../../pages/api/blogPosts';

const BlogSidebar = () => {
  const sortedByDate = blogPosts.sort((a, b) => {
    a.date > b.date ? 1 : -1;
  });

  const threeMostRecentPosts = sortedByDate.slice(0, 3);

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
          {threeMostRecentPosts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog-details/${post.slug}`}>
                <a>
                  {post.headline}
                  <img
                    src={post.recentPostImgUrl}
                    alt={post.alt}
                  />
                </a>
              </Link>
              <span>{post.date}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className='sidebar-widget categories'>
        <h3>Categories</h3>

        <ul>
          <li>
            <a href='/blog-1'>Hull</a>
          </li>
          <li>
            <a href='/blog-1'>Deck</a>
          </li>
          <li>
            <a href='/blog-1'>Interior</a>
          </li>
          <li>
            <a href='/blog-1'>Electrical</a>
          </li>
          <li>
            <a href='/blog-1'>Plumbing</a>
          </li>
          <li>
            <a href='/blog-1'>Navigation</a>
          </li>
          <li>
            <a href='/blog-1'>Explorations</a>
          </li>
          <li>
            <a href='/blog-1'>Planning Projects</a>
          </li>
          <li>
            <a href='/blog-1'>Gadgetry</a>
          </li>
          <li>
            <a href='/blog-1'>Propulsion</a>
          </li>
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
