import { Box, TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import Link from "next/link";

function Login() {
  return (
    <>
      <Box className="p-4 flex justify-between items-center">
        <Box className="bg-login-left h-[95vh] w-[50%] bg-cover"></Box>
        <Box className="w-1/2">
          <h1 className="text-3xl text-[#372C8C] font-semibold text-center mb-10">
            Login
          </h1>
          <Box className="w-1/2 mx-auto mb-5">
            <p>Email</p>
            <TextField
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
              className="w-full"
              placeholder="Password"
              InputProps={{
                startAdornment: (
                  <LockIcon className="text-[#B0B0B0] mr-5" fontSize="small" />
                ),
              }}
            />
            <p className="text-right text-blue-500 text-sm pt-2 cursor-pointer">
              <Link href="./resetPassword">Forget Password ?</Link>
            </p>
          </Box>
          <Box className="w-1/2 m-auto">
            <Button
              component="label"
              variant="contained"
              className="text-white bg-[#F4336C] hover:bg-[#FE5889] w-full"
            >
              Login
            </Button>
            <Box className="py-4">
              <p>
                Don't have an account?
                <Link href="./signup" className="text-blue-500 ">
                  {" "}
                  Signup!
                </Link>
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Login;
