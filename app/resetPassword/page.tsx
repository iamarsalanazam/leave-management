"use client";
import { Box, TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useState } from "react";
import { APICall } from "../services/fetchData";

function RestPasssword() {
  const [data, setData] = useState({
    email: "",
  });
  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted with data:", data);
    APICall({ url: "user/resetPassword", method: "POST", data });
  };
  return (
    <>
      <Box className="p-4 flex justify-between items-center">
        <Box className="bg-login-left h-[95vh] w-[50%] bg-cover"></Box>
        <Box className="w-1/2">
          <form onSubmit={handleSubmit}>
            <h1 className="text-3xl text-[#372C8C] font-semibold text-center mb-10">
              Forgot Password
            </h1>
            <Box className="w-1/2 mx-auto mb-5">
              <p>Email</p>
              <TextField
                id="email"
                className="w-full"
                placeholder="Email"
                value={data.email}
                type="email"
                name="email"
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
            <Box className="w-1/2 m-auto">
              <Link href="./passwordconfirmation">
                <Button
                  type="submit"
                  variant="contained"
                  className="text-white bg-[#F4336C] hover:bg-[#FE5889] w-full"
                >
                  Submit
                </Button>
              </Link>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default RestPasssword;
