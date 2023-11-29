import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";

function Announcements() {
  return (
    <>
      <Box className="border border-grey-900 border-solid rounded-xl bg-white h-[35%]">
        <Box className="p-4 border-b-2 border-grey-400">
          <h2 className="text-gray-600 font-bold">Announcements</h2>
        </Box>
        <Box className="flex p-4 items-center">
          <Box className="mr-4">
            <CampaignOutlinedIcon className="text-red-900 text-3xl" />
          </Box>
          <p className="text-lg">
            Employees who are pursuing for their studies & wants to apply for
            issuance of internship. Certifcate have to send a mail on
            barkha@htree.plus
          </p>
        </Box>
        <Box className="flex p-4 items-center">
          <Box className="mr-4">
            <CampaignOutlinedIcon className="text-red-900 text-3xl" />
          </Box>
          <p className="text-lg">
            Employees who are pursuing for their studies & wants to apply for
            issuance of internship. Certifcate have to send a mail on
            barkha@htree.plus
          </p>
        </Box>
      </Box>
    </>
  );
}

export default Announcements;
