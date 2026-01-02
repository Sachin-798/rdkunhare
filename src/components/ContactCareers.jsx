// src/components/ContactCareer.jsx
import React, { useState } from "react";
import careers from "../assets/Images/careers.jpg";

const ContactCareer = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    file: null,
  });

  const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleFile = (e) => {
    const file = e.target.files?.[0] ?? null;
    setForm((s) => ({ ...s, file }));

    if (file && file.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Name is required";
    if (!form.email.trim()) err.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      err.email = "Invalid email";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length) return;

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
      file: null,
    });
    setPreview(null);
    setErrors({});
    alert("Submitted (demo)");
  };

  return (
    <>
      {/* PAGE HEADING */}
      <h3 className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
        Careers at RD Kunhare
      </h3>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

              {/* IMAGE — mobile TOP, desktop RIGHT */}
              <div className="order-1 md:order-2 md:col-span-5 flex justify-center">
                <img
                  src={careers}
                  alt="Career"
                  className="w-full max-h-[300px] md:max-h-[520px] object-cover rounded-sm"
                />
              </div>

              {/* FORM — mobile BOTTOM, desktop LEFT */}
              <div className="order-2 md:order-1 md:col-span-7">
                <div className="bg-white p-6 md:p-8 rounded-sm">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Contact Us
                  </h2>

                  <form className="space-y-5" onSubmit={handleSubmit} noValidate>

                    {/* NAME */}
                    <div>
                      <label className="block text-base md:text-lg font-medium text-gray-700 mb-1">
                        Your name
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter your name"
                        className={`w-full px-4 py-3 bg-gray-100 border rounded
                          text-base md:text-lg
                          placeholder:text-base md:placeholder:text-lg
                          focus:outline-none focus:ring-2
                          ${
                            errors.name
                              ? "border-red-400 focus:ring-red-200"
                              : "border-gray-100 focus:ring-gray-300"
                          }`}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500 mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label className="block text-base md:text-lg font-medium text-gray-700 mb-1">
                        Your email
                      </label>
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="name@example.com"
                        className={`w-full px-4 py-3 bg-gray-100 border rounded
                          text-base md:text-lg
                          placeholder:text-base md:placeholder:text-lg
                          focus:outline-none focus:ring-2
                          ${
                            errors.email
                              ? "border-red-400 focus:ring-red-200"
                              : "border-gray-100 focus:ring-gray-300"
                          }`}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500 mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* SUBJECT */}
                    <div>
                      <label className="block text-base md:text-lg font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        type="text"
                        placeholder="Subject"
                        className="w-full px-4 py-3 bg-gray-100 
                          text-base md:text-lg
                          placeholder:text-base md:placeholder:text-lg
                          focus:outline-none focus:ring-2 focus:ring-gray-300"
                      />
                    </div>

                    {/* MESSAGE */}
                    <div>
                      <label className="block text-base md:text-lg font-medium text-gray-700 mb-1">
                        Your message (optional)
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Write your message..."
                        className="w-full px-4 py-3 bg-gray-100 
                          text-base md:text-lg
                          placeholder:text-base md:placeholder:text-lg
                          focus:outline-none focus:ring-2 focus:ring-gray-300"
                      />
                    </div>

                    {/* FILE */}
                    <div>
                      <label className="block text-base md:text-lg font-medium text-gray-700 mb-2">
                        Attach file
                      </label>
                      <input
                        type="file"
                        onChange={handleFile}
                        className="text-base"
                      />
                    </div>

                    {/* BUTTON */}
                    <button
                      type="submit"
                      className="px-8 py-3 bg-black text-white rounded hover:opacity-90 transition"
                    >
                      SUBMIT
                    </button>

                  </form>
                </div>
              </div>

            </div>

            {/* MOBILE FILE PREVIEW */}
            {preview && (
              <div className="mt-6 md:hidden">
                <p className="text-base text-gray-600 mb-2">
                  Selected file preview:
                </p>
                <img src={preview} alt="preview" className="w-full rounded" />
              </div>
            )}

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactCareer;
