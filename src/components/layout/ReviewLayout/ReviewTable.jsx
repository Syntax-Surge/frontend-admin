import React from 'react'

const ReviewTable = ({reviews}) => {

    return (
        <>
            <div>
                <table className="w-full text-left table-auto mb-8">
                    <thead className='bg-gray-200'>
                        <tr className="text-gray-900 uppercase text-md normal-case">
                            <th className="py-4 pl-4 border-b">Name</th>
                            <th className="border-b text-center">Product Name</th>
                            <th className="border-b text-center">Rating</th>
                            <th className="border-b px-8 text-center">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    {reviews.map((review) => (
                        <tr key={review.id} className="hover:bg-gray-100">
                            <td className="py-3 pl-4 border-b flex items-center">
                                <img
                                    src={review.Product.pictureLocation}
                                    alt={review.Product.productName}
                                    className="w-10 h-10 rounded-full mr-4"
                                />
                                <div>
                                    <p className="font-semibold">{review.user.firstName} {review.user.lastName}</p>
                                </div>
                            </td>
                            <td className="py-3 border-b text-center">{review.Product.productName}</td>
                            <td className="py-3 border-b text-center">{review.rating}</td>
                            <td className="py-3 border-b text-center">{review.description}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ReviewTable;
