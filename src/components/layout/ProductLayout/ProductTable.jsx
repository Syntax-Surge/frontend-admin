import axios from 'axios';
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { BASE_URL } from '../../../config';

const ProductTable = ({products, setIsModalOpen, setSelectedProduct, fetchProducts}) => {

    const onDelete = async (product) => {
        const id = product.id;

        const confirmed = window.confirm("Are you sure you want to delete this product?");
        if (!confirmed) return; // Exit if user cancels
  
        try {
          const response = await axios.delete(`${BASE_URL}/products/${id}`);
  
          if (response.status === 200) {
            toast.success('Product Deleted Successfully', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
              console.log('response : ', response.data)
              fetchProducts();
          }
        } catch (error) {
          console.error('Product delete failed:', error.response.data.message);
          toast.error(`Product deletion failed! ${error.response.data.message}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            }); 
        }
      }

    const handleEditClick = (product) => {
        setSelectedProduct(product); // Set the product to edit
        setIsModalOpen(true); // Open the modal
    };

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                limit={2} 
                theme="light" 
            />
            <div>
                <table className="w-full text-left table-auto mb-8">
                    <thead className='bg-gray-200'>
                        <tr className="text-gray-900 uppercase text-md normal-case">
                            <th className="py-4 pl-4 border-b">Product Name</th>
                            <th className="border-b text-center">Unit Weight</th>
                            <th className="border-b text-center">Unit Amount</th>
                            <th className="border-b text-center">Available Unit</th>
                            <th className="border-b text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {products.map((product) => (
                        <tr key={product.id} className="hover:bg-gray-100">
                        <td className="py-3 pl-4 border-b flex items-center">
                            {product.pictureLocation ? (
                                <img
                                    src={product.pictureLocation}
                                    alt={product.productName}
                                    className="w-10 h-10 rounded-full mr-4"
                                />                                
                            ):(                            
                                <img
                                    src={require("../../../images/category.png")}
                                    alt={product.productName}
                                    className="w-10 h-10 rounded-full mr-4"
                                />
                            )}

                            <div>
                                <p className="font-semibold">{product.productName}</p>
                                <p className="text-gray-500 text-sm">{product.orders}number of orders</p>
                            </div>
                        </td>
                        <td className="py-3 border-b text-center">{product.unitWeight} kg</td>
                        <td className="py-3 border-b text-center">Rs {product.unitPrice}</td>
                        <td className="py-3 border-b text-center">{product.availableQuantity}</td>
                        <td className="py-3 border-b text-center">
                            
                            {/* Edit Button */}
                            <button
                                className="text-green-500 hover:text-green-900 translation duration-300 ease pr-2"
                                onClick={() => handleEditClick(product)} 
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                </svg>

                            </button>

                            {/* Delete Button */}
                            <button className="text-green-500 hover:text-green-900 translation duration-300 ease"
                                onClick={() => onDelete(product)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ProductTable
