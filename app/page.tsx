"use client";
import { useEffect, useState } from "react";
import LeaveCard from "./components/LeaveCard";
import { Box, Button } from "@mui/material";
import axios from "axios";
import { APICall } from "./services/fetchData";
import WhosOnLeave from "./components/WhosOnLeave";
import CircularIndeterminate from "./components/Loader";
import LeaveTable from "./components/LeaveTable";
import Celebrations from "./components/celebrations";
import Announcements from "./components/Announcements";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import Login from "./login/page";
import Signup from "./signup/page";
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data1 = await APICall({ url: "/leave_details" });
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
      <Box className="h-screen overflow-hidden bg-gray-100">
        <Box className="flex h-[5vh] justify-between items-end px-10">
          <Box className="">
            <h1 className="text-2xl">Welcome back, Nitesh</h1>
          </Box>
          <Box className="">
            <Button
              component="label"
              variant="contained"
              startIcon={<HourglassTopIcon />}
              className="text-white bg-[#F4336C] hover:bg-[#FE5889]"
            >
              Request Time Off
            </Button>
          </Box>
        </Box>
        <Box className="flex justify-center items-center bg-gray-100 h-[15vh]">
          {loading ? (
            <CircularIndeterminate />
          ) : (
            get.map((item: any, i: number) => (
              <LeaveCard
                type={item.leaveType}
                available={item.available}
                used={item.usedLeaves}
                colorPie={colorPieType[i].colorPie}
                key={i}
              />
            ))
          )}
        </Box>
        <Box className="flex gap-2 h-[79vh]">
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
