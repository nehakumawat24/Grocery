import React from 'react'
import Grocery from '../../assets/grocery.png'
import Button from '../Button/Button'
const Hero = () => {
    return (
        < >
            <section>
                <div className='max-w-6xl min-h-screen mx-auto px-10  pt-40 md:pt-30 md:flex items-center'>
                    <div className="flex-1">
                        <button className='px-6 py-2 bg-orange-100  text-orange-500 rounded-full text-lg mb-5'>Export Best Quality...</button>
                        <h1 className='text-4xl/12 md:text-6xl/17 font-bold  mb-6'>Tasty Organic <span className='text-orange-600'>Fruits</span> & <span className='text-orange-600'>Veggies</span> <br/>  In Your City</h1>
                        <p className='mb-10 tracking-wide font-medium max-w-130'>Bred for a high content of beneficial subtances. Our products are all fresh and healthy.</p>

                        <Button data={'Shop Now'} />
                    </div>

                    <div className="flex-1 max-sm:mt-20">
                    <img src={Grocery}  alt="" /></div>
                </div>
            </section>
        </>
    )
}

export default Hero
