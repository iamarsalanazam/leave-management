import { Box, TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";

function Signup() {
  return (
    <>
      <Box className="p-4 flex justify-between items-center">
        <Box className="bg-login-left h-[95vh] w-[50%] bg-cover"></Box>
        <Box className="w-1/2">
          <h1 className="text-3xl text-[#372C8C] font-semibold text-center mb-10">
            Signup
          </h1>
          <Box className="w-1/2 mx-auto mb-5">
            <p>Username</p>
            <TextField
              type="text"
              id="username"
              className="w-full"
              placeholder="Username"
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
              className="w-full"
              placeholder="Email"
              InputProps={{
                startAdornment: (
                  <EmailIcon className="text-[#B0B0B0] mr-5" fontSize="small" />
                ),
              }}
            />
          </Box>
          <Box className="w-1/2 m-auto mb-5">
            <p>Password</p>
            <TextField
              id="email"
              type="password"
              className="w-full"
              placeholder="Confirm Password"
              InputProps={{
                startAdornment: (
                  <LockIcon className="text-[#B0B0B0] mr-5" fontSize="small" />
                ),
              }}
            />
          </Box>
          <Box className="w-1/2 m-auto mb-5">
            <p>Confirm Password</p>
            <TextField
              id="email"
              type="password"
              className="w-full"
              placeholder="Password"
              InputProps={{
                startAdornment: (
                  <LockIcon className="text-[#B0B0B0] mr-5" fontSize="small" />
                ),
              }}
            />
          </Box>
          <Box className="w-1/2 m-auto">
            <Button
              component="label"
              variant="contained"
              className="text-white bg-[#F4336C] hover:bg-[#FE5889] w-full"
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
        </Box>
      </Box>
    </>
  );
}

export default Signup;
