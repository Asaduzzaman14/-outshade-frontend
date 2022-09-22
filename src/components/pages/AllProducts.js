import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const AllProducts = () => {


    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/api/v1/products")
            .then(res => res.json())
            .then(data => setProducts(data.data))

    }, [])




    return (
        <div>
            <h2>All Products</h2>

            <div className='grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-5'>
                {
                    products?.map(product => <ProductCard
                        product={product}
                        key={product._id}
                    > </ProductCard>
                    )
                }
            </div>
        </div>
    );
};

export default AllProducts;