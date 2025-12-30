// src/components/ContactCareer.jsx
import React, { useState } from "react";
import careers from "../assets/Images/careers.jpg"; // adjust path/casing if required

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
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = "Invalid email";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length) return;

    // Prepare FormData if you want to send to server
    // const fd = new FormData();
    // Object.keys(form).forEach(k => { if (form[k]) fd.append(k, form[k]); });

    // demo reset
    setForm({ name: "", email: "", subject: "", message: "", file: null });
    setPreview(null);
    setErrors({});
    alert("Submitted (demo) — wire up API to actually send.");
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Grid: stacks on small, two-col on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:items-stretch">
            {/* Left: form (spans 7 on md+) */}
            <div className="md:col-span-7">
              <div className="bg-white h-full p-6 md:p-8 rounded-sm shadow-none">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">Contact Us</h2>

                <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-600 mb-1">
                      Your name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Enter your name"
                      className={`w-full px-4 py-3 bg-gray-100 border rounded focus:outline-none focus:ring-2 ${
                        errors.name ? "border-red-400 focus:ring-red-200" : "border-gray-100 focus:ring-gray-300"
                      }`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-xs text-red-500">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
                      Your email
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="name@example.com"
                        className={`w-full px-4 py-3 bg-gray-100 border rounded pr-12 focus:outline-none focus:ring-2 ${
                          errors.email ? "border-red-400 focus:ring-red-200" : "border-gray-100 focus:ring-gray-300"
                        }`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600 pointer-events-none">
                        <svg width="18" height="14" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                          <path d="M2 3h20v12H2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M2 3l10 7 10-7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm text-gray-600 mb-1">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-600 mb-1">
                      Your message (optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Write your message..."
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-gray-300 resize-y"
                    />
                  </div>

                  <div>
                    <label htmlFor="file" className="block text-sm text-gray-600 mb-2">
                      Attach file
                    </label>
                    <div className="flex items-center gap-4">
                      <input id="file" name="file" type="file" onChange={handleFile} className="text-sm" />
                      {preview && (
                        <div className="text-xs text-gray-500">
                          <span className="block">Preview ready</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-block px-8 py-3 bg-black text-white tracking-wider rounded hover:opacity-90 transition"
                    >
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right: image (spans 5 on md+) */}
            <div className="md:col-span-5 flex justify-center md:justify-end">
              {/* make image match form height and scale responsively */}
              <div className="w-full max-w-sm md:max-w-none md:w-[500px] md:h-[450px] lg:w-[620px] lg:h-[520px] flex items-center">
                <img
                  src={careers}
                  alt="contact preview"
                  className="w-full h-full object-cover rounded-sm shadow-sm"
                  style={{ objectPosition: "center" }}
                />
              </div>
            </div>
          </div>

          {/* optional small preview on mobile below grid */}
          {preview && (
            <div className="mt-6 md:hidden">
              <p className="text-sm text-gray-600 mb-2">Selected file preview:</p>
              <img src={preview} alt="file preview" className="w-full h-auto rounded" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactCareer;
