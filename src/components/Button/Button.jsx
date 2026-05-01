import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='bg-orange-500 text-white px-7 py-2 rounded-sm bg-linear-to-b from-orange-400 to-orange-500 text-lg hover:scale-105 transition-all duration-300 '> {props.data} </button>
    </div>
  )
}

export default Button
