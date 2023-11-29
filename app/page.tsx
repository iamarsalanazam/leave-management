"use client";
import { useEffect, useState } from "react";
import LeaveCard from "./components/LeaveCard";
import { Box } from "@mui/material";
import axios from "axios";
import { APICall } from "./services/fetchData";
import WhosOnLeave from "./components/WhosOnLeave";
import CircularIndeterminate from "./components/Loader";
import LeaveTable from "./components/LeaveTable";
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
      <Box className="h-screen bg-gray-100">
        <Box className="flex justify-center items-center bg-gray-100 h-44">
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
        <Box className="flex">
          <LeaveTable />
          <WhosOnLeave />
        </Box>
      </Box>
    </>
  );
}
