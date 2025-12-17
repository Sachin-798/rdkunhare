import ContactWithMap from "../components/ContactWithMap";
import HowWeWork from "../components/HowWeWork";
import RecentPost from "../components/Recentpost";
import FeaturesRow from "../components/FeaturesRow";

import RedesignDream from "../components/RedesignDream"
import WhyWeAreDifferent from "../components/WhyWeAreDifferent"
import AboutSection from "../components/AboutSection";

import VideoImageSlider from "../components/VideoImageSlider";
const Home = () => {
  return (
    <>
    <VideoImageSlider />
     <AboutSection/>
      <FeaturesRow/>
    <WhyWeAreDifferent/>

    <RedesignDream/>
    <HowWeWork/>
   
    <RecentPost/>
    <ContactWithMap/>
    </>
  );
};

export default Home;
