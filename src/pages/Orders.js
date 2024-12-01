import React from 'react'
import Sidebar from "../components/layout/SideBar";
import Header from "../components/layout/Header";
import OrdersTable from '../components/common/OrdersInProgressTable';

const Orders = () => {
  return (
    <div>
        <div className='flex flex-row'>
            <Sidebar/>
            <div className='flex flex-col w-full'>
                <Header/>
                <div className='flex overflow-y-auto flex-row w-full px-8 py-6 pt-28 lg:pl-80'>
                    <OrdersTable />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Orders
