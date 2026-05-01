import React from 'react'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from 'react-icons/fa'
import { TbBadge, TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from "react-icons/tb";
import { PiFactory, PiPlant, PiShoppingBagDuotone } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";
const ProcessCard = () => {
    return (
        <>
            <div className="flex max-sm:flex-col gap-4 max-sm:gap-5 justify-between items-center md:mt-60">
                {/* Left-Top  */}
                {steps.map((data, idx)=>(
                <div key={idx} className= {`flex flex-col justify-center items-center shadow hover:scale-102 p-2 py-4 gap-2 ${data.id % 2 === 0 ? 'md:-mt-90' : 'none'}   `}>
                    <span className="h-12 w-12 text-8xl bg-zinc-800 outline-[3px] outline-offset-5 outline-zinc-800 outline-dotted flex justify-center items-center rounded-full text-white">{data.number} </span>
                    <div className="flex gap-2 justify-center items-center pt-6">
                        <div className="">
                            <div className="h-10 w-10 rounded-full flex justify-center items-center bg-linear-to-b from-orange-400 to-orange-500 text-white text-xl">
                                {data.icon}
                            </div>
                        </div>
                        <div >
                            <h2 className='font-bold text-zinc-800 text-xl mb-2'>{data.title} </h2>
                            <p className='text-zinc-600 text-sm'> {data.para} </p>
                        </div>
                    </div>
                </div>
                ))}
            </div>

        </>
    )
}

export default ProcessCard


const steps = [
    { id: 1,
        number: <TbCircleNumber1Filled />,
        title: 'Sourcing',
        para: ' It is long established fact that a reader.',
        icon: <PiPlant />,
     },
    { id: 2,
        number: <TbCircleNumber2Filled />,
        title: 'Manufacturing',
        para: ' It is long established fact that a reader.',
        icon: <PiFactory />,
     },
    { id: 3,
        number: <TbCircleNumber3Filled />,
        title: 'Quality Control',
        para: ' It is long established fact that a reader.',
        icon: <SlBadge/>,
     },
    { id: 4,
        number: <TbCircleNumber4Filled />,
        title: 'Logistics',
        para: ' It is long established fact that a reader.',
        icon: <BsTruck />,
     },

]