import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  InboxIcon,
  PowerIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex fixed z-50 ">
      <div className="lg:hidden pt-9 pl-8 bg-white p-2 pb-[17px]">
        {!isSidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-full bg-blue-gray-50 shadow-md"
          >
            <Bars3Icon className="h-6 w-6 text-blue-gray-900" />
          </button>
        )}
      </div>

      <Card
        className={`lg:relative fixed h-full min-h-[670px] w-[18rem] p-4 pt-4 mt-4 rounded-none rounded-r-xl lg:pb-16 shadow-xl shadow-gray-900/5 bg-[#1B786F] z-40 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform lg:translate-x-0`}
      >
        <div className="mb-2 p-4">
          <Typography variant="h5" color="white">
            Plant Shop
          </Typography>
        </div>
        <hr className="my-2 border-white-200" />
        <List className="text-white">
          <ListItem onClick={() => navigate("/adminProfile")}>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Name
          </ListItem>
        </List>
        <hr className="my-2 border-white-200" />
        <List className="text-white">
          <ListItem onClick={() => navigate("/")}>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
          <ListItem onClick={() => navigate("/users")}>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Users
          </ListItem>
          <ListItem onClick={() => navigate("/products")}>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Products
          </ListItem>
          <ListItem onClick={() => navigate("/orders")}>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            Orders
          </ListItem>
          <ListItem onClick={() => navigate("/categories")}>
            <ListItemPrefix>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
            </svg>
            </ListItemPrefix>
            Categories
          </ListItem>
          <ListItem onClick={() => navigate("/reviews")}>
            <ListItemPrefix>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
              </svg>
            </ListItemPrefix>
            Reviews
          </ListItem>
          <hr className="my-2 border-blue-gray-200" />
          <ListItem onClick={() => navigate("/buttontest")}>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>

      {/* Overlay for smaller screens */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
