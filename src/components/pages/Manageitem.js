import React from 'react';
import { Link } from 'react-router-dom';

const Manageitem = ({ product, index, setRemoveProducts }) => {

    // console.log(product);
    const { name, _id, img, price } = product

    return (
        <tr>
            <th>{index + 1}</th>
            <td><img className='rounded-full shadow-lg w-16' src={img} alt="" /></td>
            <td>{name}</td>
            <td>{price}</td>


            <td>
                <label onClick={() => setRemoveProducts(product)} htmlFor="remove-tool" className="btn modal-button btn-xs text-error modal-button">Remove</label>
                <Link to={`/update/${product._id}`}>
                    <label className="btn modal-button btn-xs text-error modal-button m-1">Update</label>
                </Link>
            </td>
        </tr>

    );
};

export default Manageitem;