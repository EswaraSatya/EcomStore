import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function Products() {
  return (
    <Box
      className="product"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          width: 260,
          height: 385,
          marginLeft: "25px",
          marginTop: "15px",
          borderRadius: "15px",
          paddingLeft: "25px",
        },
      }}
    >
      <Paper elevation={20} />
      <Paper elevation={20} />
      <Paper elevation={20} />
      <Paper elevation={20} />
      <Paper elevation={20} />
      <Paper elevation={20} />
      <Paper elevation={20} />
      <Paper elevation={20} />
      <Paper elevation={20} />
    </Box>
  );
}
