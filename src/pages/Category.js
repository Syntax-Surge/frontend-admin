import React from 'react'
import CategoryForm from '../components/layout/CategoryFrom'
import Sidebar from '../components/layout/SideBar'
import Header from '../components/layout/Header'
import AllCategories from '../components/layout/AllCategories'

const Category = () => {
  return (
    <div>
        <div className='flex flex-row'>
            <Sidebar/>
            <div className='flex flex-col w-full'>
                <Header/>
                <div className='flex flex-row w-full'>
                    <AllCategories/>
                    <CategoryForm/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category
