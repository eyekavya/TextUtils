import React from "react";
import Alert from "@mui/material/Alert";

function AlertMessage(props) {
  return (
    <>
      <Alert
        severity="success"
        sx={{ position: "absolute", top: "0", width: "100%" }}
      >
        {props.alert}
      </Alert>
    </>
  );
}

export default AlertMessage;
