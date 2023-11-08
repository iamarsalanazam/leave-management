"use client";
import { useEffect, useState } from "react";
import LeaveCard from "./components/LeaveCard";
import { Box } from "@mui/material";
import axios from "axios";

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

export default function Home() {
  const [post, setPost] = useState<any>({
    available: 0,
    used: 0,
  });
  useEffect(() => {
    // const data = APICall();
    // console.log(data);
    axios.get("http://localhost:8080/leave/casual_leave").then((response) =>
      setPost({
        available: response.data.data.available,
        used: response.data.data.usedLeaves,
      })
    );
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
                available={post.available}
                used={post.used}
                colorPie={item.colorPie}
                key={i}
              />
            );
          })}
        </Box>
      </Box>
    </>
  );
}
