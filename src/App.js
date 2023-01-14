import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Container from "@mui/material/Container";
import About from "./components/About";
import Heading from "./components/Heading";

import { useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { palette } from "@mui/system";

function App() {
  const [mode, setMode] = useState("light");

  const dark = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const light = createTheme({
    palette: {
      mode: "light",
    },
  });

  return (
    <>
      <Navbar title="TextUtils" mode={dark} />

      {/* <About /> */}

      <Container maxWidth="sm">
        <Heading heading="Enter the text to analyze" />
        <TextForm />
      </Container>
    </>
  );
}
export default App;
