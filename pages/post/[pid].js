import { Fragment, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import BlogSidebar from '../../components/Blog/BlogSidebar';
import Comments from '../../components/Blog/Comments';
import Footer from '../../components/_App/Footer';
import getAllBlogPosts from '../api/getAllBlogPosts';
import { ContactsOutlined } from '@material-ui/icons';

const BlogDetails = (props) => {
  const [allPosts, setAllPosts] = useState([]);
  const router = useRouter();
  const { pid } = router.query;
  // const [post, setPost] = useState(null);
  let post;

  useEffect(() => {
    const getBlogPosts = async () => {
      getAllBlogPosts().then((posts) => setAllPosts(posts));
    };
    getBlogPosts();
  }, []);

  if (allPosts.length > 0) {
    post = allPosts.filter((post) => {
      return post.fields.url === pid;
    });
  }

  return (
    <Fragment>
      <Navbar />
      <PageBanner
        pageTitle={post && post[0].fields.headline}
        homePageUrl='/'
        homePageText='Home'
        activePageText={post && post[0].fields.headline}
      />

      <div className='blog-details-area ptb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='blog-details-content'>
                <div className='blog-details-img'>
                  <img
                    src='/images/blog-details/blog-details-img.jpg'
                    alt='Image'
                  />
                </div>

                <div className='blog-top-content'>
                  <div className='news-content'>
                    <ul className='admin'>
                      <li>
                        {/* <a href={postMeta.authorAboutPage}> */}
                        <i className='bx bx-user-circle'></i>
                        Written by:
                        {post && post[0].fields.author}
                        {/* </a> */}
                      </li>

                      <li>
                        <a href='#'>
                          <i className='bx bx-comment'></i>
                          No comments
                        </a>
                      </li>

                      <li className='float'>
                        <i className='bx bx-calendar-alt'></i>
                        {post && post[0].fields.date}
                      </li>
                    </ul>

                    <h3>
                      {post && post[0].fields.headline}
                    </h3>

                    <p>
                      {post && post[0].fields.paragraph1}
                    </p>

                    <p>
                      {post && post[0].fields.paragraph2}
                    </p>
                  </div>

                  <blockquote>
                    <p>
                      {post && post[0].fields.testimonial}
                    </p>
                    <i className='bx bxs-quote-alt-left'></i>
                  </blockquote>

                  <div className='news-content-2'>
                    <p>
                      {post && post[0].fields.paragraph3}
                    </p>
                  </div>

                  <div className='row'>
                    <div className='col-lg-6 col-md-6'>
                      <div className='single-blog-post-img'>
                        <img
                          src='/images/blog-details/blog-1.jpg'
                          alt='Image'
                        />
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                      <div className='single-blog-post-img'>
                        <img
                          src='/images/blog-details/blog-2.jpg'
                          alt='Image'
                        />
                      </div>
                    </div>
                  </div>

                  <div className='news-content-3'>
                    <p>
                      {post && post[0].fields.paragraph4}
                    </p>
                  </div>

                  <div className='tag-list'>
                    <span>Tags:</span>

                    <ul>
                      <li>
                        <a href='#' target='_blank'>
                          adfjadkf{' '}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* <Comments /> */}
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

export default BlogDetails;
