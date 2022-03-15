import { Fragment } from 'react';
import Link from 'next/link';
import Footer from '../components/_App/Footer';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Projects from '../components/Projects/Projects';

const Projects = () => {
  return (
    <Fragment>
      <Navbar />
      <PageBanner
        pageTitle='Projects'
        homePageUrl='/'
        homePageText='Home'
        activePageText='Projects'
      />
      <Projects />
      <Footer />
    </Fragment>
  );
};

export default Projects;
