import React, { useState } from "react";
import { Container, Typography } from "@mui/joy";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@mui/material";

function About() {
  // Dark Mode State
  const [mode, setMode] = useState({
    backgroundColor: "#fff",
    color: "#000",
  });

  // Button State for Dark Mode
  const [modeBtnText, setModeBtnText] = useState("Enable Dark Mode");

  function changeMode() {
    if (mode.color === "#000") {
      setMode({
        backgroundColor: "#000",
        color: "#fff",
        border: "1px solid #fff",
      });
      setModeBtnText("Enable Light Mode");
    } else {
      setMode({
        backgroundColor: "#fff",
        color: "#000",
      });
      setModeBtnText("Enable Dark Mode");
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
            <Typography>Collapsible Group Item #1</Typography>
          </AccordionSummary>
          <AccordionDetails style={mode}>
            <Typography>
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
            <Typography>Collapsible Group Item #2</Typography>
          </AccordionSummary>
          <AccordionDetails style={mode}>
            <Typography>
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
            <Typography>
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
          {modeBtnText}
        </Button>
      </Container>
    </>
  );
}

export default About;
