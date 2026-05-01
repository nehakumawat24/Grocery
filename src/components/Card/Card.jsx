import React from 'react'
import { category } from '../../assets/assets'
import { Link } from 'react-router-dom'
// import Button from '../../components/Button/Button'
const Card = () => {
    return (
        <>
            {category.map((data, idx) => (
                <div key={idx} className='  rounded-md  shadow hover:-translate-y-2'>
                    <div className='w-full min-h-[24vh] md:min-h-[35vh] relative -mb-10 '>

                    <img className='absolute bottom-0 object-cover object-center ' src={data.image} alt="" />
                    </div>


                    <div className='pt-12 p-8 bg-zinc-100 rounded-b-xl'>
                        <h2 className='font-bold text-3xl text-zinc-800 mb-3'>{data.title} </h2>
                        <p className='mb-6 font-medium text-zinc-600 text-sm'> {data.description}</p>
                        {/* <Button data={'See All'} /> */}
                        <Link to={data.path} className='text-white px-7 py-2 rounded-sm bg-linear-to-b from-orange-400 to-orange-500 text-lg hover:scale-105 transition-all duration-300 '>See All</Link>
                    </div>
                </div>

            ))}
        </>
    )
}

export default Card
