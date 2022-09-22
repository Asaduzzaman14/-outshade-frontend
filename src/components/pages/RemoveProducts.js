import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RemoveProducts = ({ setRemoveProducts, removeProducts, refetch }) => {

    const { _id } = removeProducts;
    console.log(_id);

    const handelDeleteTool = () => {
        fetch(`https://radiant-depths-53412.herokuapp.com/api/v1/products/${_id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success === true) {
                    toast('Delete success')
                    setRemoveProducts(null)
                    refetch()
                }
            })
    }

    return (
        <>
            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="remove-tool" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">

                    <h3 className="font-bold text-lg">Are you sure you want <span className='text-red-600'>delete</span> this product </h3>
                    <p className="py-4"><span className='font-semibold'>Name:</span> {removeProducts.name}</p>
                    <img className='w-32 rounded-full shadow-lg mx-auto' src={removeProducts.img} alt="" />
                    <div className="modal-action">
                        <button onClick={() => handelDeleteTool()} className='hover:bg-red-700 bg-white btn btn-sm'> Delete</button>
                        <label htmlFor="remove-tool" className="btn btn-sm">Cancel</label>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    );
};

export default RemoveProducts;