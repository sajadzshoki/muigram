import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import React from "react";
import Navbar from "./components/Navbar";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";
import Posts from "./components/Posts";
import Add from "./components/Add";
import BottomAppBar from "./components/BottomAppBar";

function App() {
  const [mode, setMode] = React.useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />

        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar setMode={setMode} mode={mode} />
          <Posts />
          <RightBar />
        </Stack>
        <Add />
        <BottomAppBar setMode={setMode} mode={mode} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
