import React from "react";
import { Typography } from "@mui/material";
import Menu from "@mui/icons-material/Menu";

function Mobile({ menu, setMenu }) {
  return (
    <>
      <Menu
        sx={{ fontSize: "35px", cursor: "pointer" }}
        onClick={() => {
          setMenu(!menu);
        }}
      />
    </>
  );
}

export default Mobile;
