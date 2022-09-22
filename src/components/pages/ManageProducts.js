import { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../shared/Loading";
import Manageitem from "./Manageitem";
import ManageProduct from "./ManageProduct";
import RemoveProducts from "./RemoveProducts";

const ManageProducts = () => {
    const [removeProducts, setRemoveProducts] = useState(null)


    const { data: products, isLoading, refetch } = useQuery('manageProducts', () => fetch("http://localhost:5000/api/v1/products", {
        method: 'GET',

    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div>
            {/* <h2 className='mt-10 mb-5 text-3xl p-5  underline underline-offset-8 font-semibold'> Manage All Products</h2> */}

            <div>
                <h2 className="text-2xl text-white bg-red-900 py-5">Manage All Products</h2>

                <div>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>no.</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>min order quantity</th>
                                    <th>abailavle quantity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.data?.map((product, index) => <Manageitem
                                        key={product._id}
                                        product={product}
                                        index={index}
                                        setRemoveProducts={setRemoveProducts}
                                    ></Manageitem>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                    {removeProducts && <RemoveProducts
                        refetch={refetch}
                        removeProducts={removeProducts}
                        setRemoveProducts={setRemoveProducts}
                    ></RemoveProducts>}
                </div>



            </div>
        </div>
    );
};

export default ManageProducts;