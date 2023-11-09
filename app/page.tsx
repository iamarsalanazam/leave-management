"use client";
import { useEffect, useState } from "react";
import LeaveCard from "./components/LeaveCard";
import { Box } from "@mui/material";
import axios from "axios";
import { APICall } from "./services/fetchData";
import WhosOnLeave from "./components/WhosOnLeave";

const data = [
  { type: "Casual Leave", available: 4, used: 6, colorPie: "text-[#AE83CA]" },
  { type: "Sick Leave", available: 5, used: 1, colorPie: "text-[#7A98CA]" },
  { type: "Earned Leave", available: 2, used: 8, colorPie: "text-[#76BB7E]" },
  {
    type: "Adjustment Leave",
    available: 3,
    used: 2,
    colorPie: "text-[#FE5889]",
  },
  { type: "Unpaid Leave", available: 10, used: 0, colorPie: "text-[#7872DC]" },
  { type: "Half Leave", available: 5, used: 1, colorPie: "text-[#5045A1]" },
];
export interface LeaveType {
  available: number;
  used: number;
}
export default function Home() {
  const [post, setPost] = useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      const data = await APICall({ url: "/casual_leave" });
      console.log(data);
    };
    //   const leaveTypes = [
    //     "casual_leave",
    //     "sick_leave",
    //     "earned_leave",
    //     "adjustment_leave",
    //     "unpaid_leave",
    //     "half_leave",
    //   ];

    //   const apiCalls = leaveTypes.map(async (type) => {
    //     const data = await APICall({ url: type });
    //     return { [type]: data };
    //   });
    //   const results = await Promise.all(apiCalls);
    //   setPost(results);
    // };

    fetchData();
  }, []);
  console.log(post);
  return (
    <>
      <Box className="h-screen bg-gray-100">
        <Box className="flex justify-center items-center bg-gray-100">
          {data.map((item, i) => {
            return (
              <LeaveCard
                type={item.type}
                available={item.available}
                used={item.used}
                colorPie={item.colorPie}
                key={i}
              />
            );
          })}
        </Box>
        <Box>
          <WhosOnLeave />
        </Box>
      </Box>
    </>
  );
}
