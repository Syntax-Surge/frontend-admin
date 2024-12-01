import React from "react";
import Sidebar from "../components/layout/SideBar";
import Header from "../components/layout/Header";
import OrdersTable from "../components/common/OrdersInProgressTable";
import { useParams } from "react-router-dom";
import FlexibleCard from "../components/common/FlexibleCard";
import { Typography } from "@material-tailwind/react";
import OrdersInProgressTable from "../components/common/OrdersInProgressTable";
import OrderItemsTable from "../components/common/OrderItemsTable";

const OrderInformation = () => {
  const { orderId } = useParams();

  return (
    <div>
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
          <div className="flex overflow-y-auto flex-col w-full px-8 py-2 pt-28 lg:pl-80">
            <div className="flex flex-row w-full">
              <div className="flex flex-row gap-3 ml-1 mt-2">
                <FlexibleCard height="12" width="19">
                  <div>
                    <h3
                      style={{ fontSize: "16px" }}
                      className="text-center text-sm font-semibold text-gray-700 text-lg"
                    >
                      Customer Information
                    </h3>
                  </div>

                  <div className="flex flex-row gap-1 mt-7">
                    <div>
                      <img
                        src="https://via.placeholder.com/150"
                        alt="sssssss"
                        className="w-12 h-12 rounded-full mr-4"
                      />
                    </div>
                    <div>
                      <Typography>Full Name : Sithum Sathsara </Typography>
                      <Typography>Mobile : 076-3509028 </Typography>
                      <Typography>Email : sathsaragms@uom.lk</Typography>
                    </div>
                  </div>
                </FlexibleCard>

                <FlexibleCard height="12" width="18">
                  <div>
                    <h3
                      style={{ fontSize: "16px" }}
                      className="text-center text-sm font-semibold text-gray-700 text-lg"
                    >
                      Payment Information
                    </h3>
                  </div>

                  <div className="flex flex-row gap-1 mt-7">
                    <div>
                      <img
                        src="https://via.placeholder.com/150"
                        alt="sssssss"
                        className="w-12 h-12 rounded-full mr-4"
                      />
                    </div>
                    <div>
                      <Typography>Total : LKR 15000 </Typography>
                      <Typography>Mobile : 076-3509028 </Typography>
                      <Typography>Email : sathsaragms@uom.lk</Typography>
                    </div>
                  </div>
                </FlexibleCard>
                <FlexibleCard height="12" width="18">
                  <h3
                    style={{ fontSize: "16px" }}
                    className="text-center text-sm font-semibold text-gray-700"
                  >
                    Billing Address
                  </h3>
                </FlexibleCard>
                <FlexibleCard height="12" width="18">
                  <h3
                    style={{ fontSize: "16px" }}
                    className="text-center text-sm font-semibold text-gray-700"
                  >
                    Shipping Address
                  </h3>
                </FlexibleCard>
              </div>
            </div>

            <div className="flex flex-col w-full ml-3 mt-8">
              <Typography>Items</Typography>
              <OrderItemsTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
