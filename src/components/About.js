import React from "react";
import { Container, Typography } from "@mui/joy";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

function About(props) {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: "2rem" }}>
        <Accordion>
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            sx={{
              backgroundColor: !props.darkMode ? "#fff" : "#000000cf",
              border: !props.darkMode ? "inherit" : "1px solid #fff",
              color: !props.darkMode ? "#000000cf" : "#fff",
            }}
          >
            <Typography>Analyze Your text</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: !props.darkMode ? "#fff" : "#000000cf",
              border: !props.darkMode ? "inherit" : "1px solid #fff",
              color: !props.darkMode ? "#000000cf" : "#fff",
            }}
          >
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
            sx={{
              backgroundColor: !props.darkMode ? "#fff" : "#000000cf",
              border: !props.darkMode ? "inherit" : "1px solid #fff",
              color: !props.darkMode ? "#000000cf" : "#fff",
            }}
          >
            <Typography>Free to use</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: !props.darkMode ? "#fff" : "#000000cf",
              border: !props.darkMode ? "inherit" : "1px solid #fff",
              color: !props.darkMode ? "#000000cf" : "#fff",
            }}
          >
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
            sx={{
              backgroundColor: !props.darkMode ? "#fff" : "#000000cf",
              border: !props.darkMode ? "inherit" : "1px solid #fff",
              color: !props.darkMode ? "#000000cf" : "#fff",
            }}
          >
            <Typography>Browser Compatible</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: !props.darkMode ? "#fff" : "#000000cf",
              border: !props.darkMode ? "inherit" : "1px solid #fff",
              color: !props.darkMode ? "#000000cf" : "#fff",
            }}
          >
            <Typography>
              This word counter software works in any web browsers such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count characters in facebook, blog, books, excel document, pdf
              document, essays, etc.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </>
  );
}

export default About;
