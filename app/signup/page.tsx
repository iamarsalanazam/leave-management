"use client";
import { Box, TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
import { useState } from "react";
import { APICall } from "../services/fetchData";

function Signup() {
  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted with data:", data);
    APICall({ url: "user/signup", method: "POST", data });
  };
  return (
    <>
      <Box className="p-4 flex justify-between items-center">
        <Box className="bg-login-left h-[95vh] w-[50%] bg-cover"></Box>
        <Box className="w-1/2">
          <h1 className="text-3xl text-[#372C8C] font-semibold text-center mb-10">
            Signup
          </h1>
          <form onSubmit={handleSubmit}>
            <Box className="w-1/2 mx-auto mb-5">
              <p>Username</p>
              <TextField
                type="text"
                name="userName"
                id="username"
                value={data.userName}
                className="w-full"
                placeholder="Username"
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <PersonIcon
                      className="text-[#B0B0B0] mr-5"
                      fontSize="small"
                    />
                  ),
                }}
              />
            </Box>
            <Box className="w-1/2 mx-auto mb-5">
              <p>Email</p>
              <TextField
                type="email"
                id="email"
                value={data.email}
                name="email"
                className="w-full"
                placeholder="Email"
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <EmailIcon
                      className="text-[#B0B0B0] mr-5"
                      fontSize="small"
                    />
                  ),
                }}
              />
            </Box>
            <Box className="w-1/2 m-auto mb-5">
              <p>Password</p>
              <TextField
                id="password"
                type="password"
                className="w-full"
                name="password"
                placeholder="Password"
                value={data.password}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <LockIcon
                      className="text-[#B0B0B0] mr-5"
                      fontSize="small"
                    />
                  ),
                }}
              />
            </Box>
            <Box className="w-1/2 m-auto mb-5">
              <p>Confirm Password</p>
              <TextField
                id="passwordConfirm"
                type="password"
                className="w-full"
                value={data.confirmPassword}
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <LockIcon
                      className="text-[#B0B0B0] mr-5"
                      fontSize="small"
                    />
                  ),
                }}
              />
            </Box>
            <Box className="w-1/2 m-auto">
              <Button
                variant="contained"
                className="text-white bg-[#F4336C] hover:bg-[#FE5889] w-full"
                type="submit"
              >
                Signup
              </Button>
              <Box className="py-4">
                <p>
                  If you already have an account?
                  <Link href="./login" className="text-blue-700 ">
                    {" "}
                    Login Now !
                  </Link>
                </p>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default Signup;
