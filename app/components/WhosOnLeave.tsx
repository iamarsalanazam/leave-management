import { Box, useForkRef } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";
import { APICall } from "../services/fetchData";

function WhosOnLeave() {
  const [selected, setSelected] = useState("today");
  const [data, setData] = useState([]);
  const handleChange = async (event: SelectChangeEvent) => {
    setSelected(event.target.value);
    // console.log({ age });
    const selectedData = await APICall({ url: `?date=${event.target.value}` });
    // console.log(selectedData.stats);
    setData(selectedData.stats);
    // console.log(data);
  };
  useEffect(() => {
    // Call handleChange manually on page load to fetch data for the default value
    handleChange({ target: { value: selected } } as SelectChangeEvent);
  }, []);

  return (
    <>
      <Box className="border border-grey-900 border-solid rounded-xl bg-white w-1/4 h-96">
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
        <Box className="p-4 overflow-scroll h-64">
          {data?.map((item: any, i: number) => {
            console.log(item.userName);
            return (
              <Box key={i} className="mb-2">
                <p>{item.userName}</p>
                <p className="text-xs">{item.leaveType}</p>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
}

export default WhosOnLeave;
