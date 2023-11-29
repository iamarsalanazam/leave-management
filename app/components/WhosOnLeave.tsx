import { Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";
import { APICall } from "../services/fetchData";
import Avatar from "@mui/material/Avatar";
import Variants from "./Sekeleton";

function WhosOnLeave() {
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
        url: `?date=${event.target.value}`,
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
      <Box className="border border-grey-900 border-solid rounded-xl bg-white w-1/4 h-96 m-1">
        <Box className="p-4 border-b-2 border-grey-400">
          <h2 className="text-gray-600 font-bold">Who's On Leave?</h2>
        </Box>
        <Box className="py-2 px-4 flex justify-between items-center">
          <h3 className="text-gray-600 font-semibold">
            On Leave: {data.length}
          </h3>
          <FormControl sx={{ m: 1, minWidth: 120, padding: 0 }}>
            <Select
              defaultValue="today"
              value={selected}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                "& .MuiSelect-select": {
                  paddingRight: 4,
                  paddingLeft: 2,
                  paddingTop: 1,
                  paddingBottom: 1,
                },
              }}
            >
              <MenuItem value={"today"}>Today</MenuItem>
              <MenuItem value={"yesterday"}>Yesterday</MenuItem>
              <MenuItem value={"week"}>Week</MenuItem>
              <MenuItem value={"month"}>Month</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box className="p-4 overflow-auto h-64">
          {loading ? (
            <Variants />
          ) : (
            data?.map((item: any, i: number) => {
              return (
                <Box key={i} className="mb-4 flex">
                  <Avatar {...stringAvatar(item.userName)} />
                  <Box className="ml-5">
                    <p className="text-lg">
                      {item.userName.charAt(0).toUpperCase() +
                        item.userName.slice(1)}
                    </p>
                    <p className="text-xs">{item.leaveType}</p>
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
export default WhosOnLeave;
