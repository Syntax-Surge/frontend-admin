import React from 'react'

const SearchBar = () => {
  return (
    <div class="w-full max-w-[100px] min-w-[150px]">
        <div class="relative">
            <input
                class="w-full bg-transparent placeholder:text-gray-400 text-gray-700 text-sm border border-gray-200 rounded-md pl-3 pr-10 py-2 transition duration-300 ease focus:outline-none focus:border-gray-400 hover:border-gray-300 shadow-sm focus:shadow"
                placeholder="Search here" 
            />
            <button
                class="absolute top-1 right-1 flex items-center rounded py-0.5 px-1 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-gray-300 focus:shadow-none active:bg-gray-700 hover:bg-gray-300 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>


            </button> 
        </div>
    </div>
  )
}

export default SearchBar
