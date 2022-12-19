import { Box, styled } from "@mui/material";
import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
/* ---------------------------------- icons --------------------------------- */
import HomeIcon from '@mui/icons-material/Home';
import FeedIcon from '@mui/icons-material/Feed';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DarkModeBtn from "./DarkModeBtn";
// import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

const ListItemButtons = styled(ListItemButton)({
  borderRadius:"0px 15px 15px 0px"
})
const SideBar = ({mode ,setMode}) => {
  return (
    <Box  flex={1} sx={{ display: { xs: "none", md: "block" } }}>
      <Box position="fixed"  >

        <List >
          <ListItem disablePadding >
            <ListItemButtons >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButtons>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButtons >
              <ListItemIcon>
                <FeedIcon />
              </ListItemIcon>
              <ListItemText primary="Feed" />
            </ListItemButtons>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButtons >
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButtons>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButtons >
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButtons>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButtons >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButtons>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButtons >
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButtons>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButtons >
              <ListItemIcon onChange={(e) => setMode(mode === "light" ? "dark" : "light")}>
                <DarkModeBtn />
              </ListItemIcon>
              <ListItemText primary="Dark Mode" />
            </ListItemButtons>
          </ListItem>
         
        
        </List>

      </Box>
    </Box>
  );
};

export default SideBar;
