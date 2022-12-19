import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DateRangeIcon from "@mui/icons-material/DateRange";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "background.default",
  color:"text.primary",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};
const Add = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <Tooltip title="Add post">
        <IconButton  sx={{ position: "fixed", bottom: "1rem",zIndex:2000 ,left:{xs:"calc(44%)",md:"1rem"} } }>
          <Fab color="primary" aria-label="add" onClick={handleOpen}>
            <AddIcon />
          </Fab>
        </IconButton>
      </Tooltip>
      {/* modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            textAlign="center"
            color="gray"
            marginBottom="2rem"
            
          >
            Create a post
          </Typography>
          <Stack direction="row" alignItems="center"sx={{ m: "1rem 0rem" }}>
            <Avatar
              alt="Remy Sharp"
              src="http://mui.com/static/images/avatar/1.jpg"
              
            />
            <Typography sx={{ m: "0rem 1rem" }}>Sajad Shokraei</Typography>
          </Stack>
          <Box
            component="form"
            sx={{
              "& > :not(style)": {
                textAlign: "center",
                width: "100%",
                margin: "1rem 0rem 1rem 0.2rem",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="What is on your Mind ?!"
              variant="standard"
              multiline
            />
          </Box>
          <Stack
            direction="row"
            gap={2}
            alignItems="center"
            marginLeft="0.5rem"
          >
            <EmojiEmotionsIcon fontSize="large" color="warning" />
            <InsertPhotoIcon fontSize="large" color="primary" />
            <VideoCallIcon fontSize="large" color="secondary" />
            <PersonAddIcon fontSize="large" color="error" />
          </Stack>

          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            fullWidth
            sx={{marginTop: 5}}
            
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default Add;
