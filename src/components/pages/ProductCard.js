import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { _id, InStock, condition, img, price } = product;

    return (
        <div className="rounded-md mb-7 w-52 ">
            <Link to="Product/id">
                <figure className='w-full'><img src={img} alt="Movie" /></figure>
            </Link>

            <div className='  gap-4 m-1'>
                <h2 className='text-lg font-noraml text-gray-800 hover:text-secondary '>{condition}</h2>

                <div className='flex justify-between'>
                    <h3 className='text-lg text-500 '>${price}</h3>
                    {/* <button className='text-2xl hover:bg-primary hover:text-white p-1 rounded-sm' onClick={() => handleAddToCart(product)} ><BsCartCheckFill /></button> */}
                    {/* <h3 className='text-2xl hover:bg-primary hover:text-white p-1 rounded-sm'><HiOutlineHeart /></h3> */}
                </div>

            </div>
        </div>
    );
};

export default ProductCard;