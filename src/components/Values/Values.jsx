import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from 'react-icons/fa'
import basket from '../../assets/basket-full-vegetables.png'
const Values = () => {


    const leftValues = value.slice(0, 2).map((item, idx) => {
        return (<div key={idx} className="flex flex-col max-sm:gap-5 justify-between items-center">
            {/* Left-Top  */}
            <div className="flex md:flex-row-reverse gap-2 justify-center items-center shadow p-2 py-4">
                <div className="">
                    <div className="h-10 w-10 rounded-full flex justify-center items-center bg-linear-to-b from-orange-400 to-orange-500 text-white text-xl">
                        {item.icon}
                    </div>
                </div>
                <div className="md:text-end">
                    <h2 className='font-bold text-zinc-800 text-2xl mb-2'>{item.title}</h2>
                    <p className='text-zinc-600'>{item.para}</p>
                </div>
            </div>
        </div>)
    })


    const rightValues = value.slice(2, 4).map((item, idx) => {
        return (<div key={idx} className="flex flex-col max-sm:gap-5 justify-between items-center">
            {/* Left-Top  */}
            <div className="flex flex-row gap-2 justify-center items-center shadow p-2 py-4">
                <div className="">
                    <div className="h-10 w-10 rounded-full flex justify-center items-center bg-linear-to-b from-orange-400 to-orange-500 text-white text-xl">
                        {item.icon}
                    </div>
                </div>
                <div className=" ">
                    <h2 className='font-bold text-zinc-800 text-2xl mb-2'>{item.title}</h2>
                    <p className='text-zinc-600'>{item.para}</p>
                </div>
            </div>
        </div>)
    })

    return (
        <section>
            <div className='max-w-6xl px-10 mx-auto py-20'>
                <Heading colored={'Our'} underlined={'Values'} />
                <div className=" grid md:grid-cols-3">

                    {/* Left Part  */}
                    <div className='md:min-h-100 flex flex-col md:justify-between'>
                        {leftValues}
                    </div>

                    {/* Middle Part  */}
                    <div className="md:pt-10 md:flex hidden">
                        <img src={basket} alt="" />
                    </div>


                    {/* Right Part  */}
                     <div className='md:min-h-100 flex flex-col md:justify-between'>
                        {rightValues}
                     </div>
                </div>
            </div>

        </section>
    )
}

export default Values


const value = [
    {
        id: 1,
        title: 'Trust',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaHeart />,
    },
    {
        id: 2,
        title: 'Always Fresh',
        para: 'We provide fresh fruits and vegetables sourced directly nutrition.',
        icon: <FaLeaf />,
    },
    {
        id: 3,
        title: 'Food Safety',
        para: 'All our products follow strict safety and healthy for consumption.',
        icon: <FaShieldAlt />,
    },
    {
        id: 4,
        title: '100% Organic',
        para: 'Our products are completely organic ensuring a healthier lifestyle.',
        icon: <FaSeedling />,
    },
]