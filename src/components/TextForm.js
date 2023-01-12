import React, { useState } from "react";
import Textarea from "@mui/joy/Textarea";
import Button from "@mui/joy/Button";
import { Typography } from "@mui/joy";

function TextForm() {
  const [text, setText] = useState("");

  function handleUpClick() {
    let newText = text.toUpperCase();
    setText(newText);
  }

  function handleLowClick() {
    let newText = text.toLowerCase();
    setText(newText);
  }

  function handleClrClick() {
    let newText = "";
    setText(newText);
  }

  function handleRevClick() {
    let newText = text.split("").reverse().join("");
    setText(newText);
  }

  function handleOnChange(event) {
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.value);
    setText(event.target.value);
  }

  return (
    <>
      <Textarea
        sx={{ mt: "1rem" }}
        color="neutral"
        minRows={8}
        placeholder="Enter your text..."
        size="lg"
        variant="outlined"
        value={text}
        onChange={handleOnChange}
      />
      <Button
        sx={{
          background: "#1976d2",
          color: "white",
          mt: "1rem",
          mx: "0.2rem",
          // transition: "none",
        }}
        onClick={handleUpClick}
      >
        Convert to Uppercase
      </Button>

      <Button
        sx={{
          background: "#1976d2",
          color: "white",
          mt: "1rem",
          mx: "0.2rem",
          // transition: "none",
        }}
        onClick={handleLowClick}
      >
        Convert to Lowercase
      </Button>

      <Button
        sx={{
          background: "#1976d2",
          color: "white",
          mt: "1rem",
          mx: "0.2rem",
          // transition: "none",
        }}
        onClick={handleClrClick}
      >
        Clear Text
      </Button>

      <Button
        sx={{
          background: "#1976d2",
          color: "white",
          mt: "1rem",
          mx: "0.2rem",
          // transition: "none",
        }}
        onClick={handleRevClick}
      >
        Reverse Text
      </Button>

      <Typography variant="h1" component="h2" sx={{ mt: "3rem", mb: "1rem" }}>
        Your Text Summary
      </Typography>
      <Typography variant="h2">
        {text.split(" ").length} words and {text.length} characters
      </Typography>
      <Typography variant="h2">
        {0.008 * text.split(" ").length} Minutes Read
      </Typography>
      <Typography
        variant="h1"
        component="h2"
        sx={{ mt: "1.5rem", mb: "0.5em" }}
      >
        Preview Text
      </Typography>
      <Typography variant="h2" sx={{ maxWidth: "552px" }}>
        {text}
      </Typography>
    </>
  );
}

export default TextForm;
