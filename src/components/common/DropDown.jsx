import React, { useEffect, useState } from 'react'
import { useCustomContext } from '../../contexts/Context'

const DropDown = ({reset, onValueChange, categories}) => {
    // const [selectedValue, setSelectedValue] = useState('');
    const {parentValue, setParentValue} = useCustomContext();

    useEffect(() => {
        setParentValue("");
    },[reset])

    const handleChange = (event) => {
        setParentValue(event.target.value);
        if (onValueChange) {
            onValueChange(event.target.value);
        }
    };
console.log(parentValue)

    return (
            <div class="w-full">      
                <div class="relative">
                    <select
                        className={`w-full bg-transparent text-sm border border-gray-300 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline focus:border-gray-600 hover:border-gray-600 appearance-none cursor-pointer ${
                            parentValue === '' ? 'text-gray-400' : 'text-black'
                        }`}
                        defaultValue=""
                        value={parentValue}
                        onChange={handleChange}
                    >
                        <option value="" disabled hidden>
                            Select Parent Category
                        </option>
                        {categories.map((p) => (
                            <option value={p.id} >{p.name}</option>
                        ))}
                        <option value="" >Clear</option>
                    </select>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                    </svg>
                </div>
            </div>
        )
}

export default DropDown
