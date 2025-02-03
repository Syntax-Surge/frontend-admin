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
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const userData = {
    email: email,
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

  const sendMail = async () => {
    if (email === "" || !validateEmail(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    setIsLoading(true);
    await axios
      .post("http://localhost:3002/api/v1/users/password/forgot-password", userData)
      .then((res) => {
        console.log("res.status", res.status);
        if (res.status === 200) {
            setIsLoading(false)
          toast.success("Reset link Successfully sent", {
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
        setIsLoading(false)
        console.log("error", error);
        toast.error("Sign In not successful !", {
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
        <div className=" w-1/2 flex  justify-center items-center  h-full ">
          {/* <div className="w-full"> */}
            <img
              src={require("../../images/Logo.png")}
              alt=""
              className=""
            />
            {/* <img
              src={require("../images/Frame61.png")}
              alt=""
              className="w-full"
            /> */}
          {/* </div> */}
        </div>

        <div className="w-1/2 flex  justify-center items-center h-full mx-16">
          <Card
            color="transparent"
            shadow={false}
            className="ml-10 w-3/4   gap-3"
          >
              <div className="mt-30"></div>
            <Typography
              variant="h4"
              color="black"
              className="font-normal text-3xl text-[#3FAEAE] font-roboto flex justify-center items-center"
            >
              Enter email to Reset Password!
            </Typography>
            {/* <Typography
              color="gray"
              className="mt-1 font-semibold text-[#3FAEAE] font-roboto flex justify-center items-center"
            >
              SignIn to explore the awesome plants
            </Typography> */}
            <form className=" mt-8 mb-2 w-full max-w-screen-xl sm:w-full">
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
              </div>
              {/* <div className="mt-8 gap-4"> */}
                <Button
                  className="mt-8 bg-[#3FAEAE]  normal-case text-[14px] transition duration-3000 ease hover:bg-[#696969]"
                  fullWidth
                  onClick={(e) => {
                    console.log("userData", userData);
                    sendMail();
                  }}
                  loading={isLoading}
                >
                  Submit
                </Button>
                <Link to={"/auth/signIn"}>
                  {" "}
                  <Button
                    className="my-2 bg-inherit normal-case text-[14px] text-[#3FAEAE] border-[#3FAEAE]  border-solid border-2"
                    fullWidth
                  >
                    Go Back
                  </Button>
                </Link>
              {/* </div> */}
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
