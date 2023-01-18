import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ModeSwitch from "./ModeSwitch";
import { ThemeProvider } from "@emotion/react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const pages = [
    { route: "/", name: "Home" },
    { route: "/about", name: "About" },
  ];

  return (
    <ThemeProvider theme={props.darkTheme}>
      <AppBar position="static" enableColorOnDark={!props.darkMode}>
        <Container
          maxWidth="xl"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {props.title}
            </Typography>

            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => {}}
              >
                <Link to={page.route}>{page.name}</Link>
              </Button>
            ))}
          </Toolbar>
          <ModeSwitch toggleMode={props.toggleMode} modeText={props.modeText} />
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title",
};
