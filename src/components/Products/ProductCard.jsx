import Button from '../Button/Button'
import { FaHeart, FaPlus } from 'react-icons/fa'
// import { products } from '../../assets/assets'
const ProductCard = (products) => {
    return (
        <>
            <div className="bg-gray-100 p-5 rounded-xl">
                <div className='flex justify-between'>
                    <div className='text-red-500 text-xl'>
                        <FaHeart />
                    </div>
                    <div className='bg-orange-500 text-white w-fit p-1 rounded'>
                        <FaPlus />
                    </div>
                </div>
                <div className="h-45 flex items-center justify-center">
                    <img className='w-full h-45 object-fit object-cover' src={products.image} alt="" />
                </div>
                <div className="text-center ">
                    <h2 className='font-bold text-2xl text-zinc-500'>{products.tittle}</h2>
                    <p className='font-bold text-xl text-zinc-800 mb-2'>{products.price}</p>
                    <Button data={'Shop Now'} />
                </div>
            </div>

        </>

    )
}

export default ProductCard
