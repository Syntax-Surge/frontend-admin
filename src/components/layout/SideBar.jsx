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
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { useState } from "react";
import { useCookies } from 'react-cookie';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [isLoadingSignIn, setIsLoadingSignIn] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  // const [userId, setUserId] = useState("");

  const navigate = useNavigate();



  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  if (cookies.user) {

    console.log('coooooooooooookie 3:', cookies.user.userId)
    // setUserId(cookies.user.userId)
  } else {
    console.log("No user data found in cookies. signin page ");
  }
  
  // console.log('userId ', userId )
  

  const logout = async() => {
    
   try {
     await  axios.get("http://localhost:3002/api/v1/users/admin/logout", { withCredentials: true }).then( (res) => {
       console.log('res.status', res.status)
       
       if(res.status === 200){
          setIsLoadingSignIn(false)
          toast.success('Successfully Logged Out', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            removeCookie('user',{path:'/'});
            removeCookie('connect.sid',{path:'/'});
            setTimeout(() => {
              navigate("/admin/login/");
            }, 2000); // Slightly longer than `autoClose` duration to ensure the toast is fully visible
          
            // navigate('/')
          }
          console.log('res : ', res.data)
        }).catch( (error) => {
          setIsLoadingSignIn(false)
          console.log('error', error.response.data.msg)
          toast.error(`${error.response.data.msg} !`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }); 
        })
      } catch (error) {
     console.log('error', error)
    toast.error(`Error Occured..Try again!`, {
      position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    }); 
   }
  }
  const test = async() => {
     
    try {
      const response = await axios.post("http://localhost:4000/admin/inside", {}, { withCredentials: true });
      console.log('Response Headers:', response.headers);
      console.log('Response :', response);
      if (response.status === 200) {
        // Logout successful
        // Clear local authentication state
        // localStorage.removeItem('userId'); // Or any other relevant state
        // Redirect to login page
        // window.location.href = '/login'; 
      } else {
        // Handle non-200 responses (e.g., 400, 500)
        throw new Error(`Logout failed with status: ${response.status}`); 
      }
    } catch (error) {
      console.error('Logout error:', error);
      toast.error(`Error Occured..Try again!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <div className="flex fixed z-50 ">
       <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light" 
/>
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
          <ListItem>
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
          <ListItem onClick={() => test()}>
            <ListItemPrefix>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
              </svg>
            </ListItemPrefix>
            Testing
          </ListItem>
          <hr className="my-2 border-blue-gray-200" />
          <ListItem onClick={() => 
            // navigate("/buttontest")
            logout()
            }>
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
