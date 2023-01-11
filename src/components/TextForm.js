import React from "react";
import Textarea from "@mui/joy/Textarea";

function TextForm() {
  return (
    <>
      <Textarea
        sx={{ mt: "4rem" }}
        color="neutral"
        minRows={3}
        placeholder="Enter your text..."
        size="lg"
        variant="outlined"
      />
    </>
  );
}

export default TextForm;
