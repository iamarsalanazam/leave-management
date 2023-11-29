import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { APICall } from "../services/fetchData";

export default function LeaveTable() {
  const [get, setGet] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data1 = await APICall({ url: "/" });
        setGet(data1.stats);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <TableContainer component={Paper} className="w-full rounded-xl h-[65%]">
      <Box className="p-4 border-b-2 border-grey-400">
        <h2 className="text-gray-600 font-bold">Leave Request</h2>
      </Box>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Duration</TableCell>
            <TableCell align="left">Type</TableCell>
            <TableCell align="left">Days</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {get.map((row: any) => (
            <TableRow
              key={row._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              className="overflow-auto"
            >
              <TableCell component="th" scope="row">
                {row.userName}
              </TableCell>
              <TableCell align="left">{row.leaveType}</TableCell>
              <TableCell align="left">{row.datesOnLeave.length}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell align="left">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
