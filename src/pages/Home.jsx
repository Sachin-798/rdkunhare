import ContactWithMap from "../components/ContactWithMap";
import HowWeWork from "../components/HowWeWork";
import RecentPost from "../components/Recentpost";

import RedesignDream from "../components/RedesignDream"
import WhyWeAreDifferent from "../components/WhyWeAreDifferent"
const Home = () => {
  return (
    <>
    <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Kunhare</h1>
      <p className="text-gray-700 leading-relaxed">
        This is the home page. Add your hero section, highlights and call to actions here.
      </p>
    </main>
    <WhyWeAreDifferent/>

    <RedesignDream/>
    <HowWeWork/>
   
    <RecentPost/>
    <ContactWithMap/>
    </>
  );
};

export default Home;
