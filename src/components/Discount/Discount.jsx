import React from 'react'
import Button from '../Button/Button'
import fruitSet from '../../assets/fresh-fruits.png'
const Discount = () => {
  return (
      <section className=' bg-zinc-100 max-sm:-my-10 bg-no-repeat bg-right bg-contain' style={{backgroundImage: `url(${fruitSet})`}}>
    <div className='md:bg-transparent bg-zinc-100 py-10 max-w-6xl mx-auto px-10 flex md:flex-row  flex-col '>
         <span className='text-5xl md:text-9xl font-bold text-orange-500 transform md:-rotate-90 h-fit md:self-center'>20%</span>
         <div className='max-w-[700px]'>
            <h3 className='text-5xl md:text-7xl text-zinc-800 font-bold'>First Order Discount!</h3>
            <p className='text-zinc-600 my-6'>Enjoy an exclusive first order discount on our grocery website! shop fresh essentials and save big on your first purchase. Fast Delivery and quality guaranteed.</p>
            <Button data={'Get a Discount'} />
         </div>
    </div>
      </section>
  )
}

export default Discount
