import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Container from "@mui/material/Container";
import About from "./components/About";
import Heading from "./components/Heading";
import { useState } from "react";
import { createTheme } from "@mui/material/styles";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleMode = () => {
    setDarkMode(!darkMode);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });

  return (
    <>
      <Navbar
        title="TextUtils"
        darkTheme={darkTheme}
        toggleMode={handleToggleMode}
        darkMode={darkMode}
      />

      {/* <About /> */}

      <Container maxWidth="sm">
        <Heading heading="Enter the text to analyze" />
        <TextForm />
      </Container>
    </>
  );
}

export default App;
