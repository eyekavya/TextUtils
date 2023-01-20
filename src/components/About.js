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
        <Accordion>
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            style={mode}
          >
            <Typography>Analyze Your text</Typography>
          </AccordionSummary>
          <AccordionDetails style={mode}>
            <Typography>
              Textutils gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count or read time.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            aria-controls="panel2d-content"
            id="panel2d-header"
            style={mode}
          >
            <Typography>Free to use</Typography>
          </AccordionSummary>
          <AccordionDetails style={mode}>
            <Typography>
              TextUtils is a free character counter tool that provides instant
              character count & word count statistics for a given text.
              TextUtils reports the number of words and characters. Thus it is
              suitable for writing text with word/ character limit.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            aria-controls="panel3d-content"
            id="panel3d-header"
            style={mode}
          >
            <Typography>Browser Compatible</Typography>
          </AccordionSummary>
          <AccordionDetails style={mode}>
            <Typography>
              This word counter software works in any web browsers such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count characters in facebook, blog, books, excel document, pdf
              document, essays, etc.
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
