import React from 'react'
import CategoryForm from '../components/layout/CategoryFrom'
import Sidebar from '../components/layout/SideBar'
import Header from '../components/layout/Header'

const Category = () => {
  return (
    <div>
        <div className='flex flex-row'>
            <Sidebar/>
            <div className='flex flex-col w-full'>
                <Header/>
                <div className='flex flex-row w-full'>
                    <Sidebar/>
                    <CategoryForm/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category
