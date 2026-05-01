import React from 'react'
import { FaSeedling, FaBoxOpen, FaTruck, FaHome } from 'react-icons/fa'

const steps = [
  {
    icon: <FaSeedling />,
    title: "Sourcing from Farms",
    desc: "We collect fresh fruits and vegetables directly from trusted local farmers."
  },
  {
    icon: <FaBoxOpen />,
    title: "Quality Check & Packaging",
    desc: "All products go through strict quality checks and are packed hygienically."
  },
  {
    icon: <FaTruck />,
    title: "Fast Delivery",
    desc: "We ensure quick and safe delivery to your doorstep."
  },
  {
    icon: <FaHome />,
    title: "Delivered to You",
    desc: "Enjoy fresh groceries at your home without any hassle."
  }
]

const Processpage = () => {
  return (
    <div className="bg-zinc-50 px-6 md:px-16 py-16 pt-40">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-orange-500 mb-6">
        Our Process
      </h1>

      <p className="text-center text-zinc-600 max-w-3xl mx-auto mb-12">
        From farm to your home, we follow a simple and efficient process to deliver freshness.
      </p>

      {/* Steps */}
      <div className="grid md:grid-cols-4 gap-8">

        {steps.map((step, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg hover:-translate-y-2 transition duration-300 text-center relative"
          >

            {/* Step Number */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm">
              {index + 1}
            </div>

            {/* Icon */}
            <div className="text-3xl text-orange-500 mb-4 mt-4">
              {step.icon}
            </div>

            {/* Title */}
            <h3 className="font-semibold text-lg mb-2">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-zinc-600">
              {step.desc}
            </p>

          </div>
        ))}

      </div>

      {/* Timeline line (desktop only) */}
      <div className="hidden md:block h-1 bg-orange-200 mt-10 relative">
        <div className="absolute top-0 left-0 h-1 bg-orange-500 w-full"></div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center bg-orange-500 text-white p-10 rounded-xl">
        <h2 className="text-2xl font-bold mb-3">
          Experience Freshness Today!
        </h2>
        <p className="mb-5">
          Order now and get groceries delivered in minutes 🚀
        </p>

        <button className="bg-white text-orange-500 px-6 py-2 rounded-lg font-semibold hover:scale-105 transition">
          Shop Now
        </button>
      </div>

    </div>
  )
}

export default Processpage

