import React from 'react'
import BreadcrumbsWithIcon from './Breadcrumbs'
import SearchBar from '../common/SearchBar'
import { UserCircleIcon } from '@heroicons/react/24/solid'

const Header = () => {
  return (
    <div className='flex justify-between pt-8 pl-2 w-full'>
      <BreadcrumbsWithIcon/>
      <div className='flex flex-row gap-4 pr-8'>
        <SearchBar/>
        <div className='pt-1.5'>
          <UserCircleIcon className="h-6 w-6" />
        </div>
      </div>
    </div>
  )
}

export default Header
