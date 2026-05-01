import React from 'react'
import Heading from '../Heading/Heading'
import ProcessCard from './ProcessCard'
const Process = () => {



  return (
    <section>
      <div className='py-20 max-w-6xl mx-auto px-10 '>

        <div className='w-fit ml-0'>
          <Heading colored={'Our'} underlined={'Process'} />
        </div>
        <div>
          <ProcessCard />
        </div>
      </div>

    </section>
  )
}

export default Process
