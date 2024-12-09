import React, { useEffect } from "react";
import { Menu, MenuHandler, MenuList, MenuItem, Button } from "@material-tailwind/react";

const EditOrderStatus = ({ orderId, orderStatus, setOrderStatus, onStatusUpdate, order }) => {
  const handleStatusChange = (newStatus) => {
    onStatusUpdate(orderId, newStatus);
    setOrderStatus(newStatus);
    console.log(newStatus);
  };

  useEffect(() => {
    setOrderStatus(order.status)
  },[]);

  return (
    <div className="w-full">
      <Menu>
        <MenuHandler>
          <Button className="flex bg-[#3FAEAE] items-center  p-2 px-3 justify-center text-white border-2  border-[#1B786F] hover:bg-[#1B786F]">
            {orderStatus}
          </Button>
        </MenuHandler>
        <MenuList className="max-h-60 overflow-y-auto">
          <MenuItem onClick={() => handleStatusChange("Pending")}>Pending</MenuItem>
          <MenuItem onClick={() => handleStatusChange("InProgress")}>InProgress</MenuItem>
          <MenuItem onClick={() => handleStatusChange("Delivering")}>Delivering</MenuItem>
          <MenuItem onClick={() => handleStatusChange("Completed")}>Completed</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default EditOrderStatus;
