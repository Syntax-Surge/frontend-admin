import React from "react";
import {
  Card,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";

const DashboardCard = ({ title, count, Icon, color }) => {
  return (
    <Card className="mt-6 w-72">
      <CardBody>
        <div className="flex flex-row justify-between items-center">
          <div className=" gap-4 ">
            <Typography className="font-bold text-4xl">{count}</Typography>
            <Typography 
              className="pl-1 font-semibold text-md"
              variant="h6" 
              color="blue-gray">{title}
            </Typography>
          </div>
          <div className="bg-opacity-20 p-2 rounded-md" style={{ backgroundColor: color }}>
            <Icon className="h-8 w-8 text-white" />
          </div>
          
        </div>
      </CardBody>
    </Card>
  );
};

export default DashboardCard;
