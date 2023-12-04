"use client";
import { useEffect, useState } from "react";
import LeaveCard from "./components/LeaveCard";
import { Box, Button } from "@mui/material";
import { APICall } from "./services/fetchData";
import WhosOnLeave from "./components/WhosOnLeave";
import CircularIndeterminate from "./components/Loader";
import LeaveTable from "./components/LeaveTable";
import Celebrations from "./components/celebrations";
import Announcements from "./components/Announcements";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import PersonIcon from "@mui/icons-material/PersonAdd";
import BasicModal from "./components/InviteModal";
import RequestTimeOut from "./components/RequestTimeOut";
const colorPieType = [
  { type: "Casual Leave", colorPie: "text-[#AE83CA]" },
  { type: "Sick Leave", colorPie: "text-[#7A98CA]" },
  { type: "Earned Leave", colorPie: "text-[#76BB7E]" },
  { type: "Adjustment Leave", colorPie: "text-[#FE5889]" },
  { type: "Unpaid Leave", colorPie: "text-[#7872DC]" },
  { type: "Half Leaves", colorPie: "text-[#5045A1]" },
];
export interface LeaveType {
  available: number;
  used: number;
}
export default function Home() {
  const [get, setGet] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openRequest, setOpenRequest] = useState(false);
  const handleOpenRequest = () => setOpenRequest(true);
  const handleCloseRequest = () => setOpenRequest(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data1 = await APICall({
          url: "leave/leave_details",
          method: "GET",
        });
        setGet(data1);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Box className="h-[92vh] overflow-hidden bg-gray-100 p-4">
        <Box className="flex h-[5vh] justify-between items-end px-10">
          <Box className="">
            <h1 className="text-2xl">Welcome back, Nitesh</h1>
          </Box>
          <Box className="">
            <Button
              component="label"
              variant="contained"
              startIcon={<PersonIcon />}
              className="text-white bg-[#7872DC] hover:bg-[#6661bb] mr-3"
              onClick={handleOpen}
            >
              Invite
            </Button>
            <Button
              component="label"
              variant="contained"
              startIcon={<HourglassTopIcon />}
              className="text-white bg-[#F4336C] hover:bg-[#aa4e61]"
              onClick={handleOpenRequest}
            >
              Request Time Off
            </Button>
          </Box>
        </Box>
        <BasicModal handleClose={handleClose} open={open} />
        <RequestTimeOut handleClose={handleCloseRequest} open={openRequest} />
        <Box className="flex justify-center items-center bg-gray-100 h-[15vh]">
          {loading ? (
            <CircularIndeterminate />
          ) : (
            get?.map((item: any, i: number) => (
              <LeaveCard
                type={item?.leaveType}
                available={item?.available}
                used={item?.usedLeaves}
                colorPie={colorPieType[i]?.colorPie}
                key={i}
              />
            ))
          )}
        </Box>
        <Box className="flex gap-2 h-[68vh]">
          <Box className="w-3/4 flex flex-col gap-2">
            <Announcements />
            <LeaveTable />
          </Box>
          <Box className="w-1/4 flex flex-col gap-2">
            <WhosOnLeave />
            <Celebrations />
          </Box>
        </Box>
      </Box>
    </>
  );
}
