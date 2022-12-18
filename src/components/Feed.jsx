import { Box, Checkbox } from "@mui/material";
import React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Feed = () => {
  return (
    <Box flex={4}>
      <Card sx={{ maxWidth: "90%", m: "2rem auto" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Sajad Shokraei"
          subheader="December 18, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.freeimages.com/images/large-previews/bdb/ski-sun-fun-and-love-1635239.jpg"
          alt="image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <div>
            <Checkbox
              color="error"
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            />
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <Checkbox
            color="success"
              {...label}
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
            />
          </div>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Feed;
