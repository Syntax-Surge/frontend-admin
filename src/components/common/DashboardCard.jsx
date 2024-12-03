import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  CardHeader,
  Button,
} from "@material-tailwind/react";
import BadgeOverlap from "./BadgeOverlap";

const DashboardCard = ({title,count,percentage,Icon,color}) => {
  return (
    <Card className="mt-6 w-72">
      <CardBody>
        <div className="flex flex-row justify-between">
          <div className="relative -top-10">
            <BadgeOverlap color={color} Icon={Icon}/>
          </div>
          <div>
            <Typography>{title}</Typography>
            <Typography className="font-bold text-xl">{count}</Typography>
          </div>
        </div>

      </CardBody>
      <hr className="border-t border-gray-200" />
      <CardFooter className="pt-0">
        <Typography className="mt-2"><span className="text-green-500 font-bold">+55%</span> than last week</Typography>
      </CardFooter>
    </Card>
  );
};

export default DashboardCard;
