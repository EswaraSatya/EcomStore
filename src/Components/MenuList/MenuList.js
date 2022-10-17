import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function MenuList({ filterValue }) {
  const [value, setValue] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        paddingTop: "15px",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab value="" label="All" />
        <Tab value="Clothes" label="Clothes" />
        <Tab value="Stiching" label="Stiching" />
        <Tab value="TieandDie" label="TieandDie" />
      </Tabs>
    </Box>
  );
}
