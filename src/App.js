import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar/Navbar";
import SlideShow from "./components/SlideShow/SlideShow";
import About from "./components/About/About";
import Marki from "./components/Marki/Marki";
import Kontakt from "./components/Kontakt/Kontakt";
import Uslugi from "./components/Uslugi/Uslugi";
import { Box } from "@mui/material";

const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#232323",
    },
    secondary: {
      main: "#FFF",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Box backgroundColor="primary.main">
        <Navbar />
        <SlideShow />
        <About />
        <Uslugi />
        <Marki />
        <Kontakt />
      </Box>
    </ThemeProvider>
  );
}

export default App;
