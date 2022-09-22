import React from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const UpdateProduct = () => {
    const { id } = useParams()


    const handelFormSubmit = (e) => {
        e.preventDefault();

        const updatedata = {
            name: e.target.ProductName.value,
            condition: e.target.condition.value,
            img: e.target.img.value,
            price: e.target.price.value,

        }
        console.log(updatedata);
        fetch(`https://radiant-depths-53412.herokuapp.com/api/v1/products/${id}`, {
            "method": "PATCH",
            headers: {
                "content-type": " application/json",
            },
            body: JSON.stringify(updatedata)
        })
            .then(res => res.json())
            .then(data => {
                toast("New product added")
                e.target.reset()
            })
    }




    return (
        <div>
            <h2>Update your product {id}</h2>
            <div
                className='text-center py-5 mt-15'>
                <h2 className=' text-3xl mb-3'>ADD NEW PRODUCT</h2>


                <form onSubmit={handelFormSubmit}>
                    <input type="text" name='ProductName' placeholder="Product Name" className="input input-bordered input-md w-full max-w-sm mb-4" required />
                    <br />
                    <input type="text" name='condition' className="input input-bordered input-md w-full max-w-sm mb-4 " placeholder="This is a new product" required></input>
                    <br />
                    <input type="text" name='img' className="input input-bordered input-md w-full max-w-sm mb-4 " placeholder="Img link" required></input>
                    <br />
                    <input type="number" name='price' className="input input-bordered input-md w-full max-w-sm mb-4 " placeholder="Product price" required></input>
                    <br />

                    <input type="submit" value={"UPDTE PRODUCT"} className="input bg-primary font-bold text-lg text-white input-bordered input-md w-full max-w-xs mb-4" />

                </form>
                <ToastContainer />
            </div>

        </div>
    );
};

export default UpdateProduct;