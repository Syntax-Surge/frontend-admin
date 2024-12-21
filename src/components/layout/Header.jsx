import React from 'react'
import BreadcrumbsWithIcon from './Breadcrumbs'
import SearchBar from '../common/SearchBar'
import { UserCircleIcon } from '@heroicons/react/24/solid'

const Header = () => {
  return (
    <div className='flex fixed justify-between pt-6 pb-2 pl-2 lg:ml-72 ml-20 w-full bg-white z-30'>
      <BreadcrumbsWithIcon/>
      <div className='flex fixed right-0 flex-row gap-4 pr-8'>
        <SearchBar/>
        <div className='pt-1.5'>
          <UserCircleIcon className="h-6 w-6" />
        </div>
      </div>
    </div>
  )
}

export default Header
