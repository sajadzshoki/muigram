import React from "react";
/* ---------------------------------- icons --------------------------------- */
import BoltIcon from "@mui/icons-material/Bolt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import SearchIcon from '@mui/icons-material/Search';
import { Logout, PersonAdd, Settings } from "@mui/icons-material";
/* ------------------------------------ . ----------------------------------- */

import {
  AppBar,
  Stack,
  Toolbar,
  Typography,
  styled,
  InputBase,
  Badge,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
} from "@mui/material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "20px",
  width: "40%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  
});
const Icons = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});
function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="sticky" >
      
      <StyledToolbar >
        <Stack direction="row" alignItems="center">
          <BoltIcon fontSize="large" />
          <Typography
            variant="h6"
            marginLeft={1}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Sajad Insta
          </Typography>
        </Stack>

        <Search>
          <InputBase placeholder="search..." />
          <SearchIcon color="primary" sx={{cursor:"pointer"}}/>
        </Search>

        <Icons>
          <Badge badgeContent={4} color="error" sx={{ cursor: "pointer" }}>
            <NotificationsIcon />
          </Badge>
          <Badge badgeContent={8} color="error" sx={{ cursor: "pointer" }}>
            <MailIcon />
          </Badge>
          <Avatar
            onClick={handleClick}
            alt="Remy Sharp"
            src="http://mui.com/static/images/avatar/3.jpg"
            sx={{ width: 45, height: 45, cursor: "pointer" ,marginLeft: 1 }}
          />
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
}
export default Navbar;
