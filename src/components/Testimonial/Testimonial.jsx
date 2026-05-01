import React from 'react'
import Heading from '../Heading/Heading'
// import UserCard from './UserCard'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { FaStar } from "react-icons/fa";
import user1 from '../../assets/customer1.jpg'
import user2 from '../../assets/customer2.jpg'
import user3 from '../../assets/customer3.jpg'
import user4 from '../../assets/customer4.jpg'
import user5 from '../../assets/customer5.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonial = () => {
  return (
    <section className='py-20 max-w-6xl mx-auto px-10 '>
      <div className="">
        <Heading colored={'Customers'} underlined={'Saying'} />
        <div className='flex gap-2 justify-end mb-5'>
          <button className='bg-zinc-200 text-zinc-700 p-2 rounded hover:bg-linear-to-b hpver:from-bg-orange-400 hover:bg-orange-500 hover:text-white cursor-pointer custom-prev'>
            <FaChevronLeft />
          </button>
          <button className='bg-zinc-200 text-zinc-700 p-2 rounded hover:bg-linear-to-b hpver:from-bg-orange-400 hover:bg-orange-500 hover:text-white cursor-pointer custom-next'>
            <FaChevronRight />
          </button>
        </div>
        <Swiper navigation={{
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
          <div className='flex gap-4'>
            {Users.map((customer, idx) => (
              <SwiperSlide key={idx} className='p-2 shadow bg-zinc-50 rounded '>
                <div className='flex gap-2'>
                  <span className='border-2 border-orange-500 rounded-full p-0.5'><img className='w-16 h-16 object-cover object-center rounded-full' src={customer.image} alt="" /></span>
                  <div>
                    <h2 className='font-bold text-lg text-zinc-700'>{customer.name}</h2>
                    <p className='text-zinc-500 font-semibold text-sm '>{customer.role}</p>
                    <span className='flex gap-0.5 text-orange-400'>
                      {Array.from({ length: customer.rating }, (_, index) => (
                        <div key={index}>

                          <FaStar />
                        </div>
                      ))}
                    </span>

                  </div>
                </div>
                <p className='text-zinc-600 mt-4 min-h-[15vh]'>{customer.para}</p>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonial



const Users = [
  {
    image: user1,
    name: 'Emily Johnson',
    role: 'Food Blogger',
    rating: 3,
    para: 'FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options.',
  },
  {
    image: user2,
    name: 'David Smith',
    role: 'Chef',
    rating: 5,
    para: 'As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended.',
  },
  {
    image: user3,
    name: 'Alya Zahra',
    role: 'Model',
    rating: 2,
    para: 'Shopping online with FreshBasket has saved me so much time. I trust them for my family`s weekly groceries—always fresh, affordable, and reliable.',
  },
  {
    image: user4,
    name: 'Alya Zahra',
    role: 'Model',
    rating: 4,
    para: 'Shopping online with FreshBasket has saved me so much time. I trust them for my family`s weekly groceries—always fresh, affordable, and reliable.',
  },
  {
    image: user5,
    name: 'Alya Zahra',
    role: 'Model',
    rating: 2,
    para: 'Shopping online with FreshBasket has saved me so much time. I trust them for my family`s weekly groceries—always fresh, affordable, and reliable.',
  },
]
