import React, { useState } from "react";
import { Container, Typography } from "@mui/joy";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@mui/material";

function About() {
  const [mode, setMode] = useState({
    backgroundColor: "#fff",
    color: "#000",
  });

  function changeMode() {
    if (mode.color === "#000") {
      setMode({
        backgroundColor: "#000",
        color: "#fff",
      });
    } else {
      setMode({
        backgroundColor: "#fff",
        color: "#000",
      });
    }
  }

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: "2rem" }}>
        <Accordion
        // expanded={expanded === "panel1"}
        // onChange={handleChange("panel1")}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            style={mode}
          >
            <Typography style={mode}>Collapsible Group Item #1</Typography>
          </AccordionSummary>
          <AccordionDetails style={mode}>
            <Typography style={mode}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
        // expanded={expanded === "panel2"}
        // onChange={handleChange("panel2")}
        >
          <AccordionSummary
            aria-controls="panel2d-content"
            id="panel2d-header"
            style={mode}
          >
            <Typography style={mode}>Collapsible Group Item #2</Typography>
          </AccordionSummary>
          <AccordionDetails style={mode}>
            <Typography style={mode}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
        // expanded={expanded === "panel3"}
        // onChange={handleChange("panel3")}
        >
          <AccordionSummary
            aria-controls="panel3d-content"
            id="panel3d-header"
            style={mode}
          >
            <Typography>Collapsible Group Item #3</Typography>
          </AccordionSummary>
          <AccordionDetails style={mode}>
            <Typography style={mode}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Button
          sx={{
            background: "#1976d2",
            color: "white",
            mt: "1rem",
            mx: "0.2rem",
            // transition: "none",
          }}
          onClick={changeMode}
        >
          Enable Dark Mode
        </Button>
      </Container>
    </>
  );
}

export default About;
