import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductCard from './ProductCard'
import Button from '../Button/Button'
import {products} from '../../assets/assets'
import { Link } from 'react-router-dom'
const Products = () => {
    const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'Seafood']
    const [activeTab, setActiveTab] = useState('All')
    let filterItems = activeTab === 'All' ? products : products.filter(item => item.category === activeTab)

    return (
        <section>
            <div className='max-w-6xl px-10 mx-auto py-20'>
                <Heading colored={'Our'} underlined={'Product'} />
                <div className='flex flex-wrap justify-center gap-5'>
                    {categories.map((category, idx) => {
                        return (
                            <button key={idx} className={`px-5 py-2 text-lg rounded cursor-pointer ${activeTab === category ? 'bg-linear-to-b from-orange-400 to-orange-500 text-white' : 'bg-zinc-100'}`} onClick={() => { setActiveTab(category) }}>
                                {category}
                            </button>
                        )
                    })}
                </div>
                {/*-------------------------Cards---------------------- */}
                <div className="grid md:grid-cols-4 gap-6 mt-10">
                    {filterItems.slice(0, 8).map((product, idx) => (
                        <div key={idx}>
                            <ProductCard image={product.image} title={product.title} category={product.category} price={product.price} />
                        </div>
                    ))}
                </div>

                {/*---------------------- View All Button ---------------------- */}
                <div className='w-fit mx-auto my-10'>
                    {/* <Button data={'View All'} /> */}
                   <Link to='/allproduct' className='text-white px-7 py-2 rounded-sm bg-linear-to-b from-orange-400 to-orange-500 text-lg hover:scale-105 transition-all duration-300 '>View All</Link>
                </div>

            </div>

        </section>
    )
}

export default Products
