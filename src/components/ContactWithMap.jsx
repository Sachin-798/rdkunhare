import React from "react";

export default function ContactWithMap() {
  return (
    <section className="py-12 bg-gray-100 w-full"> {/* Updated to gray background */}

      <div className="w-full px-4">
        <div className="bg-white shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-12">

            {/* LEFT: MAP */}
            <div className="lg:col-span-7 w-full">
              <div className="w-full rounded-sm overflow-hidden shadow-sm">

                <div className="relative w-full" style={{ paddingTop: "62%" }}>
                  <iframe
                    title="RD KUNHARE Builder & Broker"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.0158346023436!2d75.86788557406592!3d22.76479362590121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39630364a33560fd%3A0xab8c85163230c4b6!2sRD%20KUNHARE%20BUILDER%20%26%20BROKER!5e0!3m2!1sen!2sin!4v1765538638692!5m2!1sen!2sin"
                    className="absolute inset-0 w-full h-full"
                    style={{ border: "none" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

              </div>
            </div>

            {/* RIGHT: FORM */}
            <div className="lg:col-span-5 flex items-start">
              <div className="w-full">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  CONTACT US
                </h2>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-gray-100 focus:ring-2 focus:ring-gray-300 rounded-sm"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 bg-gray-100 focus:ring-2 focus:ring-gray-300 rounded-sm"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-gray-100 focus:ring-2 focus:ring-gray-300 rounded-sm"
                  />

                  <textarea
                    rows={6}
                    placeholder="Write message"
                    className="w-full px-4 py-3 bg-gray-100 focus:ring-2 focus:ring-gray-300 rounded-sm resize-y"
                  />


                 <div className="flex flex-col items-start group">
  <a
    href="#"
    className="
      inline-block
      text-xs md:text-sm
      font-semibold uppercase
      bg-black text-white
      px-6 md:px-8
      py-3 md:py-4
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
    style={{ letterSpacing: '1px' }}
  >
    SEND A MESSAGE
  </a>

  {/* Underline */}
  <div className="mt-1">
    <div
      className="
        w-36 sm:w-40 md:w-48   /* 👈 mobile width thodi badi */
        h-[2px]
        bg-gray-400/60
        transition-all duration-300 ease-in-out
        origin-left

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

                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
