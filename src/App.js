import { Stack } from "@mui/material";
import React from "react";
import Navbar from "./components/Navbar";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";

function App() {
  return (
    <React.Fragment className="App" >
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </React.Fragment>
  );
}

export default App;
