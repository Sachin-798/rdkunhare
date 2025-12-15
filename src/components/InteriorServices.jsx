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


                            <div className="flex flex-col items-start group">
                                <a
                                    href="#"
                                    className="inline-block text-xs md:text-sm font-semibold uppercase bg-white text-black 
      px-6 md:px-8 py-3 md:py-4 rounded-sm shadow-sm transition-all duration-300
      group-hover:bg-[#cb9d54] group-hover:text-white"
                                    style={{ letterSpacing: "1px" }}
                                    aria-label="Learn more about Kunhare"
                                >
                                    LEARN MORE
                                </a>

                                {/* Underline below button */}
                                <div className="mt-1 w-full">
                                    <div className="w-40 h-[2px] bg-gray-400/60 transition-all duration-300 group-hover:bg-[#cb9d54]" />
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* RIGHT CONTENT */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-5">
                            Interior Design
                        </h2>

                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            House inside plan doesn’t mean moderate or straightforwardness. It can regardless be any sort of plan as long as it has the parts of advancement. RD kunhare is an awesome inside plan association, our understanding of the present-day inside plan is essential: it should be an excess house inside plan and a top inside plan in Indore. Configuration work portfolio gives everyone a view at her excess hands with anything luxury house inside plan; every system is overall around set and relative, and every task gives you a couple of knowledge about who and what each space is for. The plan is at the extreme front line of the new technique for lavishness inside plan and sorts of progress as the owner of the best inside plan association.
                        </p>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default InteriorServices;
