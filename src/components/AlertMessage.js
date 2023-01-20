import React from "react";
import Alert from "@mui/material/Alert";

function AlertMessage(props) {
  return (
    <>
      {/* <div style={{ height: "50px" }}> */}
      <Alert sx={{ width: "100%" }} severity="success">
        {props.alert}
      </Alert>
      {/* </div> */}
    </>
  );
}

export default AlertMessage;
