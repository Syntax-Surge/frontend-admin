import React from 'react'
import { useNavigate } from "react-router-dom";

const UserTable = ({users}) => {
    const navigate = useNavigate();

    return (
        <>
            <div>
                <table className="w-full text-left table-auto mb-8">
                    <thead className='bg-gray-200'>
                        <tr className="text-gray-900 uppercase text-md normal-case">
                            <th className="py-4 pl-4 border-b">Name</th>
                            <th className="border-b text-left">Email</th>
                            <th className="border-b text-left">Contact Number</th>
                            <th className="border-b text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-100">
                        <td className="py-3 pl-4 border-b flex items-center">
                            {user.profileImage ? (
                                <img
                                    src={user.profileImage}
                                    alt={user.firstName}
                                    className="w-10 h-10 rounded-full mr-4"
                                />                             
                            ):(                            
                                <img
                                    src={require("../../../images/Login.png")}
                                    alt={user.firstName}
                                    className="w-10 h-10 rounded-full mr-4"
                                />
                            )}
                            <div>
                                <p className="font-semibold">{user.firstName} {user.lastName}</p>
                            </div>
                        </td>
                        <td className="py-3 border-b text-left">{user.email}</td>
                        <td className="py-3 border-b text-left">{user.contactNo}</td>
                        <td className="py-3 border-b text-center">

                            <button className="text-green-500 hover:text-green-900 translation duration-300 ease"
                                onClick={() => navigate(`/users/${user.id}`,{ state: { user } })}
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
