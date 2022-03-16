import { Fragment } from 'react';
import Footer from '../components/_App/Footer';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ProjectCategoryGrid from '../components/Projects/ProjectCategoryGrid';


const ProjectsPage = () => {
  return (
    <Fragment>
      <Navbar />
      <PageBanner
        pageTitle='Projects'
        homePageUrl='/'
        homePageText='Home'
        activePageText='Projects'
      />
      <ProjectCategoryGrid />
      <Footer />
    </Fragment>
  );
};

export default ProjectsPage;
