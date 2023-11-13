"use client";
import { useEffect, useState } from "react";
import LeaveCard from "./components/LeaveCard";
import { Box } from "@mui/material";
import axios from "axios";
import { APICall } from "./services/fetchData";
import WhosOnLeave from "./components/WhosOnLeave";
import CircularIndeterminate from "./components/Loader";
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
        const data1 = await APICall({ url: "/casual_leave" });
        const data2 = await APICall({ url: "/sick_leave" });
        const data3 = await APICall({ url: "/earned_leave" });
        const data4 = await APICall({ url: "/adjustment_leave" });
        const data5 = await APICall({ url: "/unpaid_leave" });
        const data6 = await APICall({ url: "/half_leave" });
        setGet([data1, data2, data3, data4, data5, data6]);
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
                type={colorPieType[i].type}
                available={Math.abs(item.available)}
                used={item.usedLeaves}
                colorPie={colorPieType[i].colorPie}
                key={i}
              />
            ))
          )}
        </Box>
        <Box>
          <WhosOnLeave />
        </Box>
      </Box>
    </>
  );
}
