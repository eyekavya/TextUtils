import React from "react";
import { Typography } from "@mui/joy";

function Heading(props) {
  return (
    <>
      <Typography
        sx={{ mt: "1rem", fontSize: 40 }}
        align="center"
        variant="h1"
        component="h2"
      >
        {props.heading}
      </Typography>
    </>
  );
}

export default Heading;
