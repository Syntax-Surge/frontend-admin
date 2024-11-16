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
  Cog6ToothIcon,
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
    <div className="flex">
      <div className="lg:hidden pt-9 pl-8">
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
        className={`lg:relative fixed top-0 left-0 h-full w-[18rem] p-4 pt-8 lg:pb-16 shadow-xl shadow-blue-gray-900/5 bg-white z-40 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform lg:translate-x-0`}
      >
        <div className="mb-2 p-4">
          <Typography variant="h5" color="black">
            Plant Shop
          </Typography>
        </div>
        <hr className="my-2 border-blue-gray-200" />
        <List>
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Name
          </ListItem>
        </List>
        <hr className="my-2 border-blue-gray-200" />
        <List>
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
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Categories
          </ListItem>
          <ListItem onClick={() => navigate("/reviews")}>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
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
