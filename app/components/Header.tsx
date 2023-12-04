import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function Header() {
  return (
    <Box className="p-4 flex  justify-end h-[8vh]">
      <Box className="border-l-2 flex items-center py-1 px-4">
        <Box className="w-10 h-10 bg-[#7872DC] rounded-full text flex justify-center items-center text-white">
          NR
        </Box>
        <KeyboardArrowDownIcon className="w-8 h-8 " sx={{ color: "gray" }} />
      </Box>
    </Box>
  );
}

export default Header;
