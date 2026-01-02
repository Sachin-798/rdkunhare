import React, { useState } from "react";
import axios from "axios";

export default function ContactWithMap() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "", // <-- changed from phone
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setResponseMsg("");

  try {
    const res = await axios.post(
      "http://localhost:8000/api/contact/send",
      formData
    );

    setResponseMsg(res.data.message || "Message sent successfully!");
    setFormData({ name: "", email: "", number: "", message: "" });

    // Hide the success message after 4 seconds
    setTimeout(() => {
      setResponseMsg("");
    }, 4000);

  } catch (error) {
    console.error(error);
    setResponseMsg(
      error.response?.data?.message || "Something went wrong. Try again."
    );

    // Hide the error message after 4 seconds
    setTimeout(() => {
      setResponseMsg("");
    }, 4000);
  } finally {
    setLoading(false);
  }
};


  return (
    <section className="py-12 bg-gray-100 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-12">

            {/* LEFT: MAP */}
            <div className="lg:col-span-7 w-full">
              <div className="w-full rounded-sm overflow-hidden shadow-sm">
                <div className="relative w-full aspect-[16/10]">
                  <iframe
                    title="RD KUNHARE Builder & Broker"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.0158346023436!2d75.86788557406592!3d22.76479362590121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39630364a33560fd%3A0xab8c85163230c4b6!2sRD%20KUNHARE%20BUILDER%20%26%20BROKER!5e0!3m2!1sen!2sin!4v1765538638692!5m2!1sen!2sin"
                    className="absolute inset-0 w-full h-full border-0"
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
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  CONTACT US
                </h1>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-100 focus:ring-2 focus:ring-gray-300 rounded-sm outline-none"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-100 focus:ring-2 focus:ring-gray-300 rounded-sm outline-none"
                      required
                    />
                  </div>

                  <input
                    type="text"
                    name="number" // <-- change from "phone" to "number"
                    placeholder="Phone Number"
                    value={formData.number || ""}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-100 focus:ring-2 focus:ring-gray-300 rounded-sm outline-none"
                  />

                  <textarea
                    rows={5}
                    name="message"
                    placeholder="Write message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-100 focus:ring-2 focus:ring-gray-300 rounded-sm resize-none outline-none"
                    required
                  />

                  {/* BUTTON */}
                  <div className="mt-8 inline-block group">
                    <button
                      type="submit"
                      disabled={loading}
                      className="
                        inline-block
                        text-xs sm:text-sm
                        font-semibold uppercase
                        bg-black text-white
                        px-6 sm:px-8
                        py-3 sm:py-4
                        rounded-sm
                        shadow-sm
                        transition-colors duration-300
                        group-hover:bg-[#cb9d54]
                        group-hover:text-white
                        disabled:opacity-50 disabled:cursor-not-allowed
                      "
                      style={{ letterSpacing: "1px" }}
                    >
                      {loading ? "Sending..." : "SEND A MESSAGE"}
                    </button>

                    {/* UNDERLINE */}
                    <div className="
                        mt-2
                        w-40 sm:w-32 md:w-36 lg:w-48
                        h-[2px]
                        bg-gray-400/60
                        relative
                        overflow-hidden
                      "
                    >
                      <span className="
                          absolute left-0 top-0
                          h-full w-full
                          bg-[#cb9d54]
                          transform scale-x-0
                          origin-left
                          transition-transform duration-300
                          group-hover:scale-x-100
                        "
                      />
                    </div>
                  </div>

                  {responseMsg && (
                    <p className="mt-4 text-sm text-green-600">{responseMsg}</p>
                  )}
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
