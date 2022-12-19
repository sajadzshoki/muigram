/* eslint-disable jsx-a11y/img-redundant-alt */
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box flex={2} p="0rem 1rem" sx={{ display: { xs: "none", md: "block" }}}>
      <Box position="fixed" m="1rem 0rem" width={350} >
        {/* online friends */}
        <Typography
          fontWeight={100}
          sx={{ fontSize: "1.2rem", marginBottom: "1rem" }}
        >
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            sx={{ width: 50, height: 50 }}
            alt="Remy Sharp"
            src="http://mui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            sx={{ width: 50, height: 50 }}
            alt="Remy Sharp"
            src="http://mui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            sx={{ width: 50, height: 50 }}
            alt="Remy Sharp"
            src="http://mui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            sx={{ width: 50, height: 50 }}
            alt="Remy Sharp"
            src="http://mui.com/static/images/avatar/13.jpg"
          />
          <Avatar
            sx={{ width: 50, height: 50 }}
            alt="Remy Sharp"
            src="http://mui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            sx={{ width: 50, height: 50 }}
            alt="Remy Sharp"
            src="http://mui.com/static/images/avatar/5.jpg"
          />
          <Avatar
            sx={{ width: 50, height: 50 }}
            alt="Remy Sharp"
            src="http://mui.com/static/images/avatar/6.jpg"
          />
          <Avatar
            sx={{ width: 50, height: 50 }}
            alt="Remy Sharp"
            src="http://mui.com/static/images/avatar/7.jpg"
          />
        </AvatarGroup>
        {/* latest photos */}
        <Typography
          fontWeight={100}
          sx={{ fontSize: "1.2rem", margin: "1rem 0rem" }}
        >
          Latest Photos
        </Typography>
        <ImageList sx={{ width: 400, height: 200 }} cols={3}  >
          <ImageListItem >
            <img
            
              alt="image"
              src="https://images.freeimages.com/images/large-previews/218/my-dog-cutter-1499799.jpg"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              
              alt="image"
              src="https://images.freeimages.com/images/large-previews/e56/run-away-1555225.jpg"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              
              alt="image"
              src="https://images.freeimages.com/images/large-previews/186/red-car-1418847.jpg"
            />
          </ImageListItem>
        </ImageList>

        {/* chats */}
        <Typography
          fontWeight={100}
          sx={{ fontSize: "1.2rem", marginTop:"1rem" }}
        >
          Recent Chats
        </Typography>
        <List 
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper"}}
          
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem >
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;
