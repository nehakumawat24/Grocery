import React from 'react'
import { FaLeaf, FaTruck, FaUsers, FaStar, FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import { Members } from '../assets/assets'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const About = () => {
  return (
    <div className="bg-zinc-50 px-6 md:px-16 py-16 pt-40">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-orange-500 mb-6">
        About Our Grocery Store
      </h1>

      <p className="text-center text-zinc-600 max-w-3xl mx-auto mb-12">
        We bring fresh groceries, vegetables, and daily essentials right to your doorstep with quality and care.
      </p>

      {/* WHY CHOOSE US */}
      <div className="grid md:grid-cols-4 gap-6 mb-16">

{CHOOSE.map((choose, idx)=>(

        <div key={idx} className="bg-white p-6 rounded-xl shadow hover:scale-105 transition duration-300 flex flex-col justify-center items-center">
          <span className="text-orange-500 text-3xl mx-auto mb-3" >{choose.icon} </span>
          <h3 className="font-semibold text-lg">{choose.heading} </h3>
          <p className="text-sm text-zinc-600">{choose.para} </p>
        </div>
))}

 
 

         

      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6 text-center mb-16">
        {STATS.map((stats, idx) => (
          <div key={idx} className="bg-orange-100 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-orange-700">{stats.heading} </h2>
            <p className="text-zinc-600">{stats.para} </p>
          </div>

        ))}


      </div>

      {/* TEAM */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-orange-500">
          Our Team
        </h2>
        <div className='flex gap-2 justify-end mb-5'>
          <button className='bg-zinc-200 text-zinc-700 p-2 rounded hover:bg-linear-to-b hpver:from-bg-orange-400 hover:bg-orange-500 hover:text-white cursor-pointer custom-prev'>
            <FaChevronLeft />
          </button>
          <button className='bg-zinc-200 text-zinc-700 p-2 rounded hover:bg-linear-to-b hpver:from-bg-orange-400 hover:bg-orange-500 hover:text-white cursor-pointer custom-next'>
            <FaChevronRight />
          </button>
        </div>


        <Swiper
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev'
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          modules={[Navigation]} className="mySwiper">


          <div className="grid md:grid-cols-3 gap-6">

            {Members.map((user, i) => (
              <SwiperSlide key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-zinc-200 overflow-hidden flex items-center justify-center"><img className='object-cover object-center' src={user.image} alt="" /> </div>
                <h3 className="font-semibold text-lg">{user.name}</h3>
                <p className="text-sm text-zinc-500">Team Member</p>
              </SwiperSlide>
            ))}

          </div>
        </Swiper>

      </div>

      {/* CTA */}
      <div className="text-center bg-orange-500 text-white p-10 rounded-xl">
        <h2 className="text-2xl font-bold mb-3">
          Start Shopping with Us Today!
        </h2>
        <p className="mb-5">Fresh groceries delivered in minutes 🚀</p>

        <button className="bg-white text-orange-700 px-6 py-2 rounded-lg font-semibold hover:scale-105 transition">
          Shop Now
        </button>
      </div>

    </div>
  )
}
export default About


const STATS = [
  {
    heading: '10K+',
    para: 'Customers',
  },
  {
    heading: '500+',
    para: 'Products',
  },
  {
    heading: '4.8⭐',
    para: 'Rating',
  }
]


const CHOOSE = [
  {
    icon: <FaLeaf />,
    heading: 'Fresh Products',
    para: 'Farm fresh vegetables & fruits',
  },
  {
    icon: <FaTruck />,
    heading: 'Fast Delivery',
    para: 'Quick & safe doorstep delivery',
  },
  {
    icon: <FaUsers /> ,
    heading: 'Happy Customers',
    para: 'Thousands trust us daily',
  },
  {
    icon: <FaStar />,
    heading: 'Top Quality',
    para: 'Best quality guaranteed',
  },
]