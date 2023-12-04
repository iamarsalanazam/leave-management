import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useState } from "react";
import { APICall } from "../services/fetchData";

interface BasicModalProps {
  handleClose: () => void;
  open: boolean;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};

const BasicModal: React.FC<BasicModalProps> = ({ handleClose, open }) => {
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
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <Box className="">
              <h1 className="text-3xl text-[#372C8C] font-semibold text-center mb-10">
                Invite User
              </h1>
              <Box className=" mx-auto mb-5">
                <p>Email</p>
                <TextField
                  id="email"
                  className="w-full"
                  placeholder="Email"
                  type="email"
                  value={data.email}
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
                <Button
                  type="submit"
                  variant="contained"
                  className="text-white bg-[#F4336C] hover:bg-[#FE5889] w-full"
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
export default BasicModal;
