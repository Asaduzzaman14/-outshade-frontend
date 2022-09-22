import React from 'react';

const Manageitem = ({ product, index, setRemoveProducts }) => {

    // console.log(product);
    const { name, _id, img, price } = product

    return (
        <tr>
            <th>{index + 1}</th>
            <td><img className='rounded-full shadow-lg w-16' src={img} alt="" /></td>
            <td>{price}</td>


            <td>
                <label onClick={() => setRemoveProducts(product)} htmlFor="remove-tool" className="btn modal-button btn-xs text-error modal-button">Remove</label>
            </td>
        </tr>

    );
};

export default Manageitem;