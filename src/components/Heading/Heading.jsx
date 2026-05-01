import React from 'react'

const Heading = (props) => {
  return (
    <div className='w-fit mx-auto mb-10'>
      <h1 className='text-4xl md:text-5xl font-bold '><span className='text-orange-500'>{props.colored}</span> {props.underlined}</h1>
      <div className='w-34 h-1 bg-orange-400 mt-3 md:mt-4 ml-auto'></div>
    </div>
  )
}

export default Heading
