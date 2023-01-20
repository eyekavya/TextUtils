import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Container from "@mui/material/Container";
import About from "./components/About";
import Heading from "./components/Heading";
import { useState } from "react";
import { createTheme } from "@mui/material/styles";
import AlertMessage from "./components/AlertMessage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [alert, setAlert] = useState("Light mode enabled");
  const [showAlert, setShowAlert] = useState(false);
  const [modeText, setModeText] = useState("Light Mode");

  const handleToggleMode = () => {
    setDarkMode(!darkMode);
    setAlert(darkMode ? "Light mode enabled" : "Dark mode enabled");

    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 1500);

    !darkMode
      ? (document.body.style.backgroundColor = "#042743")
      : (document.body.style.backgroundColor = "#fff");

    !darkMode ? setModeText("Dark Mode") : setModeText("Light Mode");
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
      <Router>
        <Navbar
          title="TextUtils"
          darkTheme={darkTheme}
          toggleMode={handleToggleMode}
          darkMode={darkMode}
          modeText={modeText}
        />
        {showAlert && <AlertMessage alert={alert} />}

        <Switch>
          <Route path="/about">
            <About darkMode={darkMode} />
          </Route>

          <Container maxWidth="sm">
            <Heading heading="Enter the text to analyze" />
            <Route path="/">
              <TextForm darkMode={darkMode} />
            </Route>
          </Container>
        </Switch>
      </Router>
    </>
  );
}

export default App;
