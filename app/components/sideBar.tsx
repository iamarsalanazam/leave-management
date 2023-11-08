import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  ListItemButton,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
function SideBar() {
  return (
    <Box>
      <Drawer
        variant="permanent"
        // PaperProps={
        //   {
        //     //   sx: { width: "25%" },
        //   }
        // }
      >
        <Box className="pl-4 my-8">
          <DashboardIcon sx={{ color: "blue" }} />
        </Box>
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon sx={{ color: "blue" }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" sx={{ color: "blue" }} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <ManageHistoryIcon />
              </ListItemIcon>
              <ListItemText primary="History" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

export default SideBar;
