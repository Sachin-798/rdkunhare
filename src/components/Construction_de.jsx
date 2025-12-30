import React from "react";
import DesigningImage from "../assets/Images/constra.png"; 

const Construction_de = () => {
    return (
        <section className="w-full bg-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Designing
                        </h2>

                        <ul className="space-y-4">
                            {[
                                "Quality Architect Designs",
                                "Quality Architect Designs",
                                "Highly Professional Members",
                                "Deliver Always on Time",
                                "Best Value Solutions",
                                "Professional and Qualified",
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-yellow-500 text-lg leading-[30px]">✓</span>

                                    <span className="text-[16px] leading-[30px] font-semibold ">
                                        {item}
                                    </span>
                                </li>

                            ))}
                        </ul>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px]">
                        <img
                            src={DesigningImage}
                            alt="Designing"
                            className="w-full h-full object-cover rounded-xl shadow-lg"
                        />
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Construction_de;
