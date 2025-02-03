import React, { useState, useEffect } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
// import Frame61 from '../../../public/images/Frame61.png'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useCustomContext } from "../../contexts/Context";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isLoadingSignIn, setIsLoadingSignIn] = useState(false);
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const {setIsAuthenticated, isAuthenticated} = useCustomContext();

  const userData = {
    username: email,
    password: password,
  };

  useEffect(() => {
    if (isAuthenticated){
      navigate("/products");
    }
  },[setIsAuthenticated])

  const validateEmail = (email) => {
    console.log(
      "email validation :" +
        String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
    );
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const signIn = async () => {
    if (email === "" || !validateEmail(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (password === "" || password.length < 8) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    setIsLoadingSignIn(true);
    await axios
      .post("http://localhost:3002/api/v1/users/admin/login", userData, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("res.status", res.status);

        if (res.status === 200) {
          // const queryParams = new URLSearchParams(window.location.search);

          // queryParams.forEach((value, key) => {
          //   console.log(`${key}: ${value}`);
          // });

          // const userId = queryParams.get("userId");
          // const username = queryParams.get("username");

          // console.log("User ID:", userId);
          // console.log("Username:", username);

          setTimeout(() => {
            navigate("/products");
          }, 2000); // Slightly longer than `autoClose` duration to ensure the toast is fully visible

          setIsAuthenticated(false); //
          setIsLoadingSignIn(false);
          toast.success("Successfully Signed In", {
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
        console.log("res : ", res.data);
      })
      .catch((error) => {
        setIsLoadingSignIn(false);
        console.log("error", error.response.data.msg);
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
      });
  };

  if (cookies.user) {
    console.log("coooooooooooookie admin:", cookies.user.userId);
    // setUserId(cookies.user.userId);
  } else {
    console.log("No user data found in cookies. signin page ");
  }

  return (
    <>
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
      <div className="flex my-10 justify-center items-center">
        <div className=" w-1/2 flex  justify-center items-center  h-full">
          {/* <div className="w-full"> */}
            <img
              src={require("../../images/Logo.png")}
              alt="logo"
              className=""
            />
            {/* <img
              src={require("../images/Frame61.png")}
              alt=""
              className="w-full"
            /> */}
          {/* </div> */}
        </div>

        <div className="w-1/2 flex  justify-center items-center  h-full mx-16 mt-8">
          <Card
            color="transparent"
            shadow={false}
            className="ml-10 w-3/4   gap-3"
          >
            <Typography
              variant="h4"
              color="black"
              className="font-normal text-3xl text-[#3FAEAE] font-roboto flex justify-center items-center"
            >
              Welcome to the Green Haven
            </Typography>
            <Typography
              variant="h4"
              color="black"
              className=" font-normal text-3xl text-[#3FAEAE] font-roboto flex justify-center items-center"
            >
              Admin Dashboard
            </Typography>
            <Typography
              color="gray"
              className="mt-2 font-semibold text-[#3FAEAE] text-lg font-roboto flex justify-center items-center"
            >
              SignIn to Manage Your Shop's Data
            </Typography>
            <form className="mt-4 mb-2 w-full max-w-screen-xl sm:w-full">
              <div className=" flex flex-col gap-4">
                <Typography variant="h6" color="blue-gray" className="-mb-2">
                  Your Email
                </Typography>
                <div>
                  <Input
                    size="lg"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (email !== "" && validateEmail(email)) {
                        setEmailError(false);
                      }
                    }}
                    error={emailError ? "border-red-500" : ""}
                  />
                  <p className="text-red-700">
                    {emailError ? "Enter a valid e-mail" : ""}
                  </p>
                </div>

                <div className="gap-4  my-5   w-full  ">
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Password
                  </Typography>
                  <Input
                    type="password"
                    size="lg"
                    placeholder="********"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    onChange={(e) => setPassword(e.target.value)}
                    error={passwordError ? "border-red-500" : ""}
                  />
                </div>
              </div>
              <Link to={"/auth/admin/forgot-password"}>
                <Typography
                  variant="h4"
                  color="black"
                  className="font-normal text-md text-[#3FAEAE] font-roboto flex justify-center items-center mt-4 hover:underline transition duration-500 ease"
                  // onMouseEnter={}
                >
                  Forgot Password?{" "}
                </Typography>
              </Link>
              {/* <div className="flex items-center justify-center">*/}
                <Button
                  className="flex items-center justify-center mt-4 bg-[#3FAEAE]  normal-case text-[14px] transition duration-3000 ease hover:bg-[#696969]"
                  fullWidth
                  loading={isLoadingSignIn}
                  onClick={(e) => {
                    console.log("userData", userData);
                    signIn();
                  }}
                >
                  Sign In
                </Button>                
              {/* </div> */}
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SignIn;
