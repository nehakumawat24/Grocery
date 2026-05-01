import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="bg-zinc-50 px-6 md:px-16 py-16 pt-40">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-orange-500 mb-6">
        Contact Us
      </h1>

      <p className="text-center text-zinc-600 max-w-2xl mx-auto mb-12">
        Have questions or need help? We're here to assist you anytime. Reach out to us and we'll respond quickly.
      </p>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-16">
        {ContactCard.map((contact, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow hover:scale-105 transition flex flex-col justify-center items-center">
            <span className="text-orange-500 text-3xl mx-auto mb-3" >
              {contact.icon}
            </span>
            <h3 className="font-semibold">{contact.heading}</h3>
            <p className="text-sm text-zinc-600 mt-1">{contact.detail}</p>
          </div>

        ))}
        {/* 
        <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition text-center">
          <FaEnvelope className="text-orange-500 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold">Email</h3>
          <p className="text-sm text-zinc-600 mt-1">support@grocery.com</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition text-center">
          <FaMapMarkerAlt className="text-orange-500 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold">Location</h3>
          <p className="text-sm text-zinc-600 mt-1">Delhi, India</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition text-center">
          <FaClock className="text-orange-500 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold">Working Hours</h3>
          <p className="text-sm text-zinc-600 mt-1">9 AM - 9 PM</p>
        </div> */}

      </div>

      {/* Contact Form */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side Info */}
        <div>
          <h2 className="text-3xl font-bold text-zinc-800 mb-4">
            Get In Touch
          </h2>

          <p className="text-zinc-600 mb-6">
            We'd love to hear from you. Fill out the form and our team will get back to you as soon as possible.
          </p>

          <ul className="space-y-3 text-zinc-600">
            <li>✔ Fast response within 24 hours</li>
            <li>✔ Dedicated support team</li>
            <li>✔ Easy communication</li>
          </ul>
        </div>

        {/* Right Side Form */}
        <div className="bg-white p-6 rounded-xl shadow">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 p-3 border rounded-lg outline-none focus:border-orange-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 p-3 border rounded-lg outline-none focus:border-orange-400"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full mb-4 p-3 border rounded-lg outline-none focus:border-orange-400"
          ></textarea>

          <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:scale-105 transition">
            Send Message
          </button>

        </div>

      </div>

      {/* CTA */}
      <div className="mt-16 text-center bg-orange-500 text-white p-10 rounded-xl">
        <h2 className="text-2xl font-bold mb-2">
          We’re Always Here to Help!
        </h2>
        <p>
          Contact us anytime for support or inquiries 🚀
        </p>
      </div>

    </div>
  )
}

export default Contact



const ContactCard = [
  {
    icon: <FaPhone />,
    heading: 'Call Us',
    detail: '+91 98765 43210',
  },
  {
    icon: <FaEnvelope />,
    heading: 'Email',
    detail: 'support@grocery.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    heading: 'Location',
    detail: 'Delhi, India',
  },
  {
    icon: <FaClock />,
    heading: 'Working Hours',
    detail: '9 AM - 9 PM',
  },
]
