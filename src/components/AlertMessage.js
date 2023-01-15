import React from "react";
import Alert from "@mui/material/Alert";

function AlertMessage(props) {
  return (
    <>
      <Alert sx={{ width: "100%" }} severity="success">
        {props.alert}
      </Alert>
    </>
  );
}

export default AlertMessage;
