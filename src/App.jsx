import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import React from "react";
import Navbar from "./components/Navbar";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";
import Posts from "./components/Posts";
import Add from "./components/Add";


function App() {
  const [mode, setMode] = React.useState("light");

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
          <SideBar setMode={setMode} mode={mode}/>
          <Posts />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
