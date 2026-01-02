import ContactWithMap from "../components/ContactWithMap";
import HowWeWork from "../components/HowWeWork";
// import Recent from "../components/Recent";
import RecentBlog from "../components/RecentBlog";
import FeaturesRow from "../components/FeaturesRow";

import RedesignDream from "../components/RedesignDream"
import WhyWeAreDifferent from "../components/WhyWeAreDifferent"
import AboutSection from "../components/AboutSection";

import VideoImageSlider from "../components/VideoImageSlider";
import  FAQSection  from "../components/FAQSection"
const Home = () => {
  return (
    <>
    <VideoImageSlider />
     <AboutSection/>
      <FeaturesRow/>
    <WhyWeAreDifferent/>
  <HowWeWork/>
    <RedesignDream/>

   
    {/* <Recent/> */}
    <RecentBlog/>
     <FAQSection />
    <ContactWithMap/>
    </>
  );
};

export default Home;
