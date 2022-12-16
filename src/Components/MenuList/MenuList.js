import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function MenuList({ menuItems, filterItem, users, setItem }) {
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
        <Tab onClick={() => setItem(users)}
          value="" label="All" />

        {menuItems.map((Val, id) => {
          return (
            <Tab
              className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
              onClick={() => filterItem(Val)}
              key={id}
              label={Val}
            />

          );
        })}
        {/* <Tab value="Clothes" label="Clothes" />
        <Tab value="Stiching" label="Stiching" />
        <Tab value="TieandDie" label="TieandDie" /> */}
      </Tabs>
    </Box>
  );
}
