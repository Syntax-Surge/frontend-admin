import React, { useState } from "react";
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

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isLoadingSignIn, setIsLoadingSignIn] = useState(false);
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const userData = {
    username: email,
    password: password,
  };

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

          // const queryParams = new URLSearchParams(window.location.search);

          // queryParams.forEach((value, key) => {
          //   console.log(`${key}: ${value}`);
          // });

          // const userId = queryParams.get("userId");
          // const username = queryParams.get("username");

          // console.log("User ID:", userId);
          // console.log("Username:", username);

          setTimeout(() => {
            navigate("/home");
          }, 2000); // Slightly longer than `autoClose` duration to ensure the toast is fully visible

          // navigate('/')
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
      <div className="flex my-10 justify-center ">
        <div className=" w-1/2 flex  justify-center items-center  h-full mx-10">
          <div className="w-full">
            <img
              src={require("../images/Planty's Logo.png")}
              alt=""
              className="mb-10"
            />
            <img
              src={require("../images/Frame61.png")}
              alt=""
              className="w-full"
            />
          </div>
        </div>

        <div className="w-1/2 flex  justify-center items-center  h-full">
          <Card
            color="transparent"
            shadow={false}
            className="ml-10 w-3/4   gap-3"
          >
            <Typography
              variant="h4"
              color="black"
              className="font-normal text-3xl text-[#239b56] font-roboto flex justify-center items-center"
            >
              Welcome Admin portal !
            </Typography>
            <Typography
              color="gray"
              className="mt-1 font-semibold text-[#3FAEAE] font-roboto flex justify-center items-center"
            >
              Sign In
            </Typography>
            <form className=" mt-4 mb-2 w-full max-w-screen-xl sm:w-full">
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
                  className="font-normal text-xl text-[#239b56] font-roboto flex justify-center items-center mt-4 hover:underline"
                  // onMouseEnter={}
                >
                  Forgot Password ?{" "}
                </Typography>
              </Link>
              <Button
                className="mt-6 bg-[#3FAEAE] flex justify-center"
                fullWidth
                loading={isLoadingSignIn}
                onClick={(e) => {
                  console.log("userData", userData);
                  signIn();
                }}
              >
                sign In
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SignIn;
