import React from 'react'
import Banner from '../Banner/Banner'
import { products } from '../../assets/assets'
import Card from '../Card/Card'
const Categorypages = () => {

    const renderProduct = products.map((data, idx)=>{
        return(
          <div key={idx}>
            <Card product={data} />
          </div>
        )
    })


  return (
    <div>
      <Banner />
       <div className='flex flex-wrap gap-4'>
        {renderProduct}
       </div>
    </div>
  )
}

export default Categorypages
