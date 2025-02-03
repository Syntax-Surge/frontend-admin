import React from 'react'
import { Badge, IconButton, Avatar } from "@material-tailwind/react";

const BadgeOverlap = ({Icon}) => {
  return (
    <div className="flex items-center gap-8">
      <Badge content="5">
        <IconButton className="h-12 w-12 bg-green-500">
          <Icon className="h-5 w-5" />
        </IconButton>
      </Badge>   
      
    </div>
  )
}

export default BadgeOverlap;
