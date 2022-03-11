import { Fragment } from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/Home/MainBanner';
import RefitLiveAboardSailLog from '../components/Home/RefitLiveAboardSailLog';
import ThePlan from '../components/Home/ThePlan';
import OnboardEquipment from '../components/Home/OnboardEquipment';
import AtAGlance from '../components/Home/AtAGlance';
import About from '../components/Common/About';
import GetInTouchForm from '../components/Common/GetInTouchForm';
import LatestNews from '../components/Common/LatestNews';
import Footer from '../components/_App/Footer';
import Sponsors from '../components/Common/Sponsors'

const Index = () => {
  return (
    <Fragment>
      <Navbar />
      <MainBanner />
      <RefitLiveAboardSailLog />
      <ThePlan />
      <AtAGlance />
      <OnboardEquipment />
      <About />

      <div className='pt-100'>
        <LatestNews />
      </div>

      <GetInTouchForm />
      <Sponsors />
      <Footer />
    </Fragment>
  );
};

export default Index;
