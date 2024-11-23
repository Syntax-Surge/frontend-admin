import React from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
 
const Pagination = ({handlePageChange, totalPages}) => {
  const [active, setActive] = React.useState(1);
 
  const next = () => {
    if (active === totalPages) return;
 
    setActive(active + 1);
    handlePageChange(active + 1)
  };
 
  const prev = () => {
    if (active === 1) return;
 
    setActive(active - 1);
    handlePageChange(active - 1)
  };
 
  return (
    <div className="flex items-center gap-6 py-2">
      <IconButton
        className="bg-gray-300 rounded-3xl"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={3} className="h-4 w-4 text-black" />
      </IconButton>
      <Typography color="gray" className="font-normal text-md">
        Page <strong className="text-gray-900">{active}</strong> of{" "}
        <strong className="text-gray-900">{totalPages}</strong>
      </Typography>
      <IconButton
        className="bg-gray-300 rounded-3xl"
        onClick={next}
        disabled={active === totalPages}
      >
        <ArrowRightIcon strokeWidth={3} className="h-4 w-4 text-black" />
      </IconButton>
    </div>
  );
}

export default Pagination;