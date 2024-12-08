import React from 'react'
import { Button } from "@material-tailwind/react";

const CustomColorFilledButton = ({name, onClick, loading}) => {
  return (
    <div>
      <Button
        variant="filled"
        className="flex bg-[#3FAEAE] items-center h-10 justify-center normal-case text-[16px] text-white hover:text-white border-2 rounded-3xl border-[#1B786F] hover:border-[#1B786F] hover:bg-[#1B786F] transition duration-300 ease"
        loading={loading}
        onClick={onClick}
      >
        {name}
      </Button>
    </div>
  )
}

export default CustomColorFilledButton
