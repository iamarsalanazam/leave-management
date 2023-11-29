import { Box } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";
import { APICall } from "../services/fetchData";
import Avatar from "@mui/material/Avatar";
import Variants from "./Sekeleton";
import CakeIcon from "@mui/icons-material/Cake";

function Celebrations() {
  const [selected, setSelected] = useState("today");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  function stringToColor(string: string) {
    let hash = 0;
    let i;
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
    return color;
  }
  function stringAvatar(name: string) {
    const name2 = name?.split(" ")?.[1]?.[0].toUpperCase() || "";
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0].toUpperCase()}${name2}`,
    };
  }
  const handleChange = async (event: SelectChangeEvent) => {
    try {
      setLoading(true);
      setSelected(event.target.value);
      const selectedData = await APICall({
        url: `?date=month`,
      });
      setData(selectedData.stats);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleChange({ target: { value: selected } } as SelectChangeEvent);
  }, []);
  return (
    <>
      <Box className="border border-grey-900 border-solid rounded-xl bg-white w-full h-[50%]">
        <Box className="p-4 border-b-2 border-grey-400">
          <h2 className="text-gray-600 font-bold">Celebrations this month</h2>
        </Box>
        <Box className="p-4 overflow-auto h-72">
          {loading ? (
            <Variants />
          ) : (
            data?.map((item: any, i: number) => {
              return (
                <Box key={i} className="mb-4 flex justify-between">
                  <Box className="flex">
                    <Avatar {...stringAvatar(item.userName)} />
                    <Box className="ml-5">
                      <p className="text-lg">
                        {item.userName.charAt(0).toUpperCase() +
                          item.userName.slice(1)}
                      </p>
                      <p className="text-xs">{item.leaveType}</p>
                    </Box>
                  </Box>
                  <Box>
                    <CakeIcon />
                  </Box>
                </Box>
              );
            })
          )}
        </Box>
      </Box>
    </>
  );
}
export default Celebrations;
