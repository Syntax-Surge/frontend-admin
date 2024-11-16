import React from 'react'
import FileUpload from '../common/FileUpload'
import AddCategoryButton from '../Buttons/AddCategoryButton'

const CategoryForm = () => {
  return (
    <div className="flex flex-col w-full items-center p-4 px-8">
      <div class="w-full max-w-lg lg:min-w-[400px] min-w-[300px] p-2">
        <label className="text-lg font-bold">
          Add new Category
        </label>
      </div>
      <div class="w-full max-w-lg lg:min-w-[400px] min-w-[300px] p-2">
          <label class="block mb-2 text-sm text-gray-600">
              Category Name
          </label>
          <input class="w-full bg-transparent placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 transition duration-300 ease focus:outline focus:border-gray-400 hover:border-gray-600 shadow-sm focus:shadow" 
            placeholder="Bonsai" 
          />
      </div>
      <div class="w-full max-w-lg lg:min-w-[400px] min-w-[300px]  p-2">
          <label class="block mb-2 text-sm text-gray-600">
              Parent Category
          </label>
          <input class="w-full bg-transparent placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 transition duration-300 ease focus:outline focus:border-gray-400 hover:border-gray-600 shadow-sm focus:shadow" 
            placeholder="Indoor plants" 
          />
      </div>      
      <div class="w-full max-w-lg lg:min-w-[400px] min-w-[300px] p-2">
          <label class="block mb-2 text-sm text-gray-600">
              Description
          </label>
          <textarea class="w-full bg-transparent placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 transition duration-300 ease focus:outline focus:border-gray-400 hover:border-gray-600 shadow-sm focus:shadow" 
            placeholder="Bonsai is herbal plat that grows." 
          />
      </div>
      <div class="w-full max-w-lg lg:min-w-[400px] min-w-[300px]">
        <label class="block mx-2 mb-2 text-sm text-gray-600">
              Image
        </label>
        <FileUpload/>
      </div>
      <div className="px-4 pt-8 w-full flex justify-end">
        <AddCategoryButton/>
      </div>
    </div>
  )
}

export default CategoryForm
