import axios from 'axios';
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { BASE_URL } from '../../../config';
import CustomColorOutlinedButton from '../../Buttons/CommonButtons/CustomColorOutlinedButton';

const UserTable = ({products, setIsModalOpen, setSelectedProduct, fetchProducts}) => {

    const onDelete = async (product) => {
        const id = product.id;
  
        try {
          const response = await axios.delete(`${BASE_URL}/products/${id}`);
  
          if (response.status === 200) {
            toast.success('Category Deleted Successfully', {
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
          console.error('category delete failed:', error);
          toast.error('Category deletion failed!', {
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
                            <th className="py-4 pl-4 border-b">Name</th>
                            <th className="border-b text-center">Total Purchase Amount</th>
                            <th className="border-b text-center">Last Order Date</th>
                            <th className="border-b text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {products.map((product) => (
                        <tr key={product.id} className="hover:bg-gray-100">
                        <td className="py-3 pl-4 border-b flex items-center">
                            <img
                                src={product.pictureLocation}
                                alt={product.productName}
                                className="w-10 h-10 rounded-full mr-4"
                            />
                            <div>
                                <p className="font-semibold">{product.productName}</p>
                                <p className="text-gray-500 text-sm">{product.orders}number of orders</p>
                            </div>
                        </td>
                        <td className="py-3 border-b text-center">{product.unitWeight}</td>
                        <td className="py-3 border-b text-center">{product.unitPrice}</td>
                        <td className="py-3 border-b text-center">

                            {/* Delete Button */}
                            <button className="text-green-500 hover:text-green-900 translation duration-300 ease"
                                onClick={() => {}}
                            >
                                View
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

export default UserTable
