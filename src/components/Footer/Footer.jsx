import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <section className='bg-zinc-100 py-10'>
            <div className="max-w-6xl mx-auto px-10">
                <div className='flex max-sm:flex-col md:gap-31'>

                    <div className='md:w-1/3'>
                        <a className='font-bold text-3xl' href="">Gr<span className='text-orange-500 uppercase '>o</span>cery</a>

                        <p className='pt-3 text-zinc-600'>Bred for a high content of beneficial substances.
                            Our products are all fresh and healthy.</p>
                        <p className='text-zinc-600 font-semibold pt-3'>2025 © All Right Reserved</p>

                    </div>
                    <div className="md:w-2/3 flex max-sm:flex-col justify-between">
                        <div className="flex-1  max-sm:mt-6">
                            <h2 className='font-bold text-xl'>Company</h2>
                            <ul className='pt-5 font-semibold text-zinc-500'>
                                <li className=' cursor-pointer hover:text-zinc-700'> <Link to='/about'>About</Link> </li>
                                <li className=' cursor-pointer mt-5 hover:text-zinc-700'>FAQ</li>
                            </ul>
                        </div>
                        <div className="flex-1 max-sm:mt-6">
                            <h2 className='font-bold text-xl'>Support</h2>
                            <ul className='pt-5 font-semibold text-zinc-500'>
                                <li className=' cursor-pointer hover:text-zinc-700'>Support center</li>
                                <li className=' cursor-pointer mt-5 hover:text-zinc-700'>Feedback</li>
                                <li className=' cursor-pointer mt-5 hover:text-zinc-700'> <Link to='/contact' > Contact us </Link> </li>
                            </ul>
                        </div>
                        <div className="flex-1  max-sm:mt-6">
                            <h2 className='font-bold text-xl'>Support</h2>
                            <p className='pt-5 font-semibold text-zinc-500'>
                                Questions or Feedback?
                                we`d love to hear from you.
                            </p>
                            <div className='mt-6 flex justify-between items-center bg-white rounded pl-6'>
                                <input type="text" placeholder='Email Address' className='focus:outline-none ' />
                                <button className='bg-orange-500 text-white p-2  rounded-sm'><FaChevronRight /></button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
