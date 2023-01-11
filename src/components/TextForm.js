import React from "react";
import Textarea from "@mui/joy/Textarea";
import Button from "@mui/joy/Button";

function TextForm() {
  return (
    <>
      <Textarea
        sx={{ mt: "1rem" }}
        color="neutral"
        minRows={8}
        placeholder="Enter your text..."
        size="lg"
        variant="outlined"
      />
      <Button sx={{ background: "#1976d2", color: "white", mt: "1rem" }}>
        Convert to Uppercase
      </Button>
    </>
  );
}

export default TextForm;
