import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const AllProducts = () => {


    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://radiant-depths-53412.herokuapp.com/api/v1/products")
            .then(res => res.json())
            .then(data => setProducts(data.data))

    }, [])




    return (
        <>
            <h2 className="text-2xl  text-white bg-red-700 py-5 text-center">All Products</h2>
            <div className='mx-auto p-5'>

                <div className='grid justify-center  p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-5'>
                    {
                        products?.map(product => <ProductCard
                            product={product}
                            key={product._id}
                        > </ProductCard>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default AllProducts;