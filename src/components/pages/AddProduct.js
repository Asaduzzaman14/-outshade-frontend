import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {

    const handelFormSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            name: e.target.ProductName.value,
            condition: e.target.condition.value,
            img: e.target.img.value,
            price: e.target.price.value,

        }

        console.log(newProduct);
        fetch('https://radiant-depths-53412.herokuapp.com/api/v1/products', {
            "method": "POST",

            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                toast("New product added")
                e.target.reset()
            })
    }




    return (

        <div
            className='text-center py-5 mt-15'>
            <h2 className=' text-3xl mb-3'>ADD NEW PRODUCT</h2>
            <p>https://i.ibb.co/gr5npWG/product-6.jpg</p>
            <p>https://i.ibb.co/zS7fHQV/product-12.jpg</p>

            <form onSubmit={handelFormSubmit}>
                <input type="text" name='ProductName' placeholder="Product Name" className="input input-bordered input-md w-full max-w-sm mb-4" required />
                <br />
                <input type="text" name='condition' className="input input-bordered input-md w-full max-w-sm mb-4 " placeholder="This is a new product" required></input>
                <br />
                <input type="text" name='img' className="input input-bordered input-md w-full max-w-sm mb-4 " placeholder="Img link" required></input>
                <br />
                <input type="number" name='price' className="input input-bordered input-md w-full max-w-sm mb-4 " placeholder="Product price" required></input>
                <br />

                <input type="submit" value={"ADD PRODUCT"} className="input bg-primary font-bold text-lg text-white input-bordered input-md w-full max-w-xs mb-4" />

            </form>
            <ToastContainer />
        </div>

    );
};

export default AddProduct;