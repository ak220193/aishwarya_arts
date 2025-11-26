"use client";

import React from "react";

export default function ContactForm() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        {/* LEFT CONTENT */}
        <div>
          <h3 className="text-5xl font-semibold mb-8 leading-tight">
            Connect With Us
          </h3>

          <p className="text-gray-600 text-xl mb-6 leading-relaxed">
            From traditional Tanjore paintings to personalized art commissions,
            our studio creates pieces that last generations. Share your
            requirement and we’ll help you get started.
          </p>

          <p className="text-gray-500 text-lg mb-8">
            Expect a response within 24 hours. We believe art should feel
            personal — crafted with intention, detail, and care.
          </p>

          {/* CONTACT DETAILS */}
          <div className="space-y-2 text-lg">
            <p className="text-gray-800 font-semibold">Aishwarya Arts</p>

            <p className="text-gray-600">Namakkal, Tamil Nadu, India</p>

            <p className="text-gray-800 font-medium">
              Phone: <span className="text-gray-600">+91 9655007661</span>
            </p>

            <p className="text-gray-800 font-medium">
              Email:{" "}
              <span className="text-gray-600">
                contact.aishwaryaarts@gmail.com
              </span>
            </p>
          </div>
        </div>

        {/* FORM CARD */}
        <div className="bg-white/90 backdrop-blur-lg border border-gray-100 shadow-2xl rounded-3xl p-12">
          <h2 className="text-3xl font-semibold mb-10">Send us a message</h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Name */}
            <div className="flex flex-col">
              <label className="text-base font-medium mb-1">First Name</label>
              <input
                type="text"
                className="border p-4 rounded-xl text-lg w-full focus:ring-2 focus:ring-black/70 outline-none"
                placeholder="John"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col">
              <label className="text-base font-medium mb-1">Last Name</label>
              <input
                type="text"
                className="border p-4 rounded-xl text-lg w-full focus:ring-2 focus:ring-black/70 outline-none"
                placeholder="Doe"
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-base font-medium mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="border p-4 rounded-xl text-lg w-full focus:ring-2 focus:ring-black/70 outline-none"
                placeholder="+91 98765 43210"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-base font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="border p-4 rounded-xl text-lg w-full focus:ring-2 focus:ring-black/70 outline-none"
                placeholder="example@email.com"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-base font-medium mb-1">Message</label>
              <textarea
                className="border p-4 rounded-xl text-lg w-full focus:ring-2 focus:ring-black/70 outline-none"
                rows="4"
                placeholder="Write your message..."
              />
            </div>

            {/* BTN */}
            <button
              type="submit"
              className="bg-black text-white py-4 px-10 rounded-2xl md:col-span-2 font-semibold text-xl shadow-lg hover:bg-gray-900 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
