// import HouseGallery from "../components/HouseGallery";
// import VideoGallery from "../components/VideoGallery"
// import { Link } from "react-router-dom";

// const Gallery = () => {
//   return (
//     <>
//       <section className="w-full bg-black text-white h-40 sm:h-52 md:h-64 lg:h-65 flex items-center justify-center">
//         <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
//           {/* Main heading */}
//           <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold tracking-[0.2em] uppercase">
//             Gallery
//           </h1>


//           <p className="mt-2 text-[10px] sm:text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-gray-300">
//             <Link
//               to="/"
//               className="hover:text-[#cb9d54] transition"
//             >
//               Home
//             </Link>
//             <span className="mx-2">/</span>
//             <Link
//               to="/gallery"
//               className="hover:text-[#cb9d54] transition"
//             >
//               Gallery
//             </Link>
//           </p>
//         </div>
//       </section>
//       <HouseGallery />
//       <VideoGallery />
//     </>
//   );
// };

// export default Gallery;






// import Blog from "../components/RecentBlog"
import RecentBlog from "../components/RecentBlog";
import { Link } from "react-router-dom";
const Blog = () => {
  return (
    <>

          <section className="w-full bg-black text-white h-40 sm:h-52 md:h-64 lg:h-65 flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
          {/* Main heading */}
          <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold tracking-[0.2em] uppercase">
            Gallery
          </h1>


          <p className="mt-2 text-[10px] sm:text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-gray-300">
            <Link
              to="/"
              className="hover:text-[#cb9d54] transition"
            >
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              to="/gallery"
              className="hover:text-[#cb9d54] transition"
            >
              Gallery
            </Link>
          </p>
        </div>
      </section>
      <RecentBlog />
    </>
  );
};

export default Blog;
