import React from 'react'
import Heading from '../Heading/Heading'
import Card from '../Card/Card'
const Category = () => {
    return (
        <section className='max-w-6xl px-10 mx-auto py-20'>
            <Heading colored={'Shop'} underlined={'by Category'} />
            <div className='grid md:grid-cols-3 gap-y-10 md:gap-5 mt-15'>
                <Card />
            </div>
        </section>
    )
}

export default Category


