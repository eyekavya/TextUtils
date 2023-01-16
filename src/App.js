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

  const handleToggleMode = () => {
    setDarkMode(!darkMode);

    setAlert(darkMode ? "Light mode enabled" : "Dark mode enabled");
    // darkMode(false)
    //   ? setAlert("Dark mode enabled")
    //   : setAlert("Light mode enabled");
    // document.body.style.backgroundColor = "black";
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
        />
        <AlertMessage alert={alert} />

        <Switch>
          <Route path="/about">
            <About />
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
