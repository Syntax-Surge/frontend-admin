import React from 'react'

const UserTable = ({products}) => {

    return (
        <>
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
