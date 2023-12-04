import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TextField, TextareaAutosize } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import Link from "next/link";
import EventIcon from "@mui/icons-material/Event";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { APICall } from "../services/fetchData";

interface RequestTimeOutProps {
  handleClose: () => void;
  open: boolean;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 48,
  p: 6,
};

const RequestTimeOut: React.FC<RequestTimeOutProps> = ({
  handleClose,
  open,
}) => {
  const [data, setData] = useState({
    email: "",
    startDate: "",
    endDate: "",
    reason: "",
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
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            className="text-right mb-2 cursor-pointer absolute top-3 right-6"
            onClick={handleClose}
          >
            <CloseIcon />
          </Box>
          <form onSubmit={handleSubmit}>
            <Box className="">
              <h1 className="text-3xl text-[#372C8C] font-semibold text-center mb-10">
                Request Time Off
              </h1>
              <Box className=" mx-auto mb-5">
                <p>Email</p>
                <TextField
                  id="email"
                  className="w-full"
                  placeholder="Email"
                  name="email"
                  value={data.email}
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
              <Box className=" mx-auto mb-5">
                <p>Start Date</p>
                <TextField
                  id="date"
                  type="date"
                  className="w-full text-slate-500"
                  placeholder="Date"
                  name="startDate"
                  onChange={handleChange}
                  value={data.startDate}
                  InputProps={{
                    startAdornment: (
                      <EventIcon
                        className="text-[#B0B0B0]-color mr-5" // Customize the icon color
                        fontSize="small"
                      />
                    ),
                    style: { color: "gray" }, // Customize the text color
                  }}
                />
              </Box>
              <Box className=" mx-auto mb-5">
                <p>End Date</p>
                <TextField
                  id="endDate"
                  type="date"
                  className="w-full"
                  name="endDate"
                  value={data.endDate}
                  onChange={handleChange}
                  placeholder="Date"
                  InputProps={{
                    startAdornment: (
                      <EventIcon
                        className="text-custom-icon-color mr-5" // Customize the icon color
                        fontSize="small"
                      />
                    ),
                    style: { color: "gray" }, // Customize the text color
                  }}
                />
              </Box>
              <Box className=" mx-auto mb-5">
                <p>Reason</p>
                <TextareaAutosize
                  style={{ resize: "none" }}
                  id="email"
                  className="w-full border border-solid border-slate-400 p-1"
                  placeholder="Write your reason..."
                  name="reason"
                  value={data.reason}
                  onChange={handleChange}
                  minRows={4}
                />
              </Box>
              <Box className="w-1/2 m-auto">
                <Button
                  component="label"
                  variant="contained"
                  className="text-white bg-[#F4336C] hover:bg-[#FE5889] w-full"
                >
                  Done
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
export default RequestTimeOut;
