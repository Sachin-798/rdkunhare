import React from "react";
import Architecture01 from "../assets/Images/Architecture01.jpg";

const InteriorServices = () => {
    return (
        <section className="w-full bg-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    <div
                        className="relative h-[420px] w-full bg-cover bg-center flex items-end"
                        style={{
                            backgroundImage: `url(${Architecture01})`,
                        }}
                    >
                        {/* BLACK SHADOW OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/80 to-black/80"></div>

                        {/* Content */}
                        <div className="relative z-10 p-6 text-white">
                            <h3 className="text-4xl font-semibold mb-4">
                                Need Help?
                            </h3>

                            <p className="text-lg leading-relaxed text-gray-200 mb-4 max-w-xs">
                                Speak with a human to filling out a form? call corporate office
                                and we will connect you with a team member who can help.
                            </p>


                            <p className="text-xl md:text-xl font-extrabold mb-5 tracking-wide">
                                +91-9826631470
                            </p>


                                         {/* Button */}
<div className="mt-8 sm:mt-10 flex flex-col items-center sm:items-start group">

  <a
    href="/contact"
    className="
      inline-block
      text-xs sm:text-sm
      font-semibold uppercase
      bg-white text-black
      px-6 sm:px-8
      py-3 sm:py-4
      rounded-sm
      shadow-sm
      transition-all duration-300

      /* Desktop hover */
      group-hover:bg-[#cb9d54]
      group-hover:text-white

      /* Mobile touch */
      active:bg-[#cb9d54]
      active:text-white
      focus-visible:bg-[#cb9d54]
      focus-visible:text-white
    "
    style={{ letterSpacing: "1px" }}
  >
    LEARN MORE
  </a>

  {/* Underline */}
  <div
    className="
      mt-2
      w-32 sm:w-36 md:w-40     /* 👈 mobile width bada */
      h-[2px]
      bg-gray-400/60
      transition-all duration-300 ease-in-out
      origin-center

      /* Desktop hover */
      group-hover:bg-[#cb9d54]
      group-hover:scale-x-110

      /* Mobile touch */
      active:bg-[#cb9d54]
      active:scale-x-110
      focus-visible:bg-[#cb9d54]
      focus-visible:scale-x-110
    "
  />
</div>
                        </div>
                    </div>


                    {/* RIGHT CONTENT */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-5">
                            Building & Construction Services in Indore
                        </h2>

                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            With regards to building frameworks and designs, we select what’s best for the building. Notwithstanding exemplary physical structures, we’ve conveyed probably the most mind-boggling modern development offices utilizing a scope of materials, innovations, and venture approach. By the day’s end, our offices need to perform so our clients can do what they specialize in. RD Kunhare joins the qualities and experience of the main with particular designing capacities for modern clients to create and drive an incorporated venture plan. The final product is dependably something very similar: A demonstrated, firm methodology that offers some benefit to clients and eventually works on cost, timetable, quality, and development consistency on each undertaking we convey.
                        </p>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default InteriorServices;
