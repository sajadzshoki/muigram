import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Box,
  ListItemButton,
  SwipeableDrawer,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
/* ---------------------------------- icons --------------------------------- */
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SettingsIcon from "@mui/icons-material/Settings";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import FeedIcon from "@mui/icons-material/Feed";
import GroupIcon from "@mui/icons-material/Group";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DarkModeBtn from "./DarkModeBtn";
/* ------------------------------------ . ----------------------------------- */

const BottomAppBar = ({mode,setMode}) => {
  const [state, setState] = React.useState(false);

  const toggleDrawer = () => {
    setState(!state);
  };
  return (
    <>
      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: "auto", bottom: 0, display: { xs: "block", md: "none" } }}
      >
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <MenuIcon onClick={toggleDrawer} />
          </IconButton>
          <IconButton color="inherit" sx={{ m: "0rem 1rem" }}>
            <SettingsIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit" sx={{ m: "0rem 1rem" }}>
            <StorefrontIcon />
          </IconButton>
          <IconButton color="inherit">
            <FavoriteIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <SwipeableDrawer
      
        open={state}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <Box role="presentation" >
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Homepage" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FeedIcon />
                </ListItemIcon>
                <ListItemText primary="Feed" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <GroupIcon />
                </ListItemIcon>
                <ListItemText primary="Groups" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <StorefrontIcon />
                </ListItemIcon>
                <ListItemText primary="Marketplace" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Setting" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon onChange={(e) => setMode(mode === "light" ? "dark" : "light")}>
                  <DarkModeBtn />
                </ListItemIcon>
                <ListItemText primary="Dark Mode" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default BottomAppBar;
