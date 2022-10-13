// import * as React from "react";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";

// export default function Products() {
//   return (
//     <Box
//       className="product"
//       sx={{
//         display: "flex",
//         flexWrap: "wrap",
//         "& > :not(style)": {
//           width: 260,
//           height: 385,
//           marginLeft: "25px",
//           marginTop: "15px",
//           borderRadius: "15px",
//           paddingLeft: "25px",
//         },
//       }}
//     >
//       <Paper elevation={20} />
//       <Paper elevation={20} />
//       <Paper elevation={20} />
//       <Paper elevation={20} />
//       <Paper elevation={20} />
//       <Paper elevation={20} />
//       <Paper elevation={20} />
//       <Paper elevation={20} />
//       <Paper elevation={20} />
//     </Box>
//   );
// }

import { useEffect, useState } from "react";
import {
  Grid,
  Container,
  Paper,
  CardMedia,
  Skeleton,
  Fab,
} from "@mui/material";

import { Box, Stack } from "@mui/system";

const Products = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = () => {
    fetch("https://6347aadd0484786c6e85792f.mockapi.io/CardContent")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setIsLoading(true);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container sx={{ marginTop: "35px" }}>
      <Stack spacing={1}>
        <Grid container spacing={12}>
          {users.map((data) => (
            <Box
              className="product"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  width: 230,
                  height: 385,
                  marginLeft: "25px",
                  marginTop: "15px",
                  borderRadius: "15px",
                  paddingLeft: "25px",
                },
              }}
            >
              {!isLoading ? (
                <Skeleton
                  variant="rounded"
                  width={230}
                  height={385}
                  sx={{ bgcolor: "grey.600" }}
                />
              ) : (
                <Paper
                  elevation={20}
                  key={data.id}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="280"
                    sx={{ width: 220 }}
                    image={data.image}
                    alt="green iguana"
                    style={{
                      borderRadius: "15px",
                      paddingTop: "10px",
                    }}
                  />
                  <h1
                    style={{
                      fontSize: "1.7rem",
                      margin: 0,
                      color: "grey",
                      paddingTop: "10px",
                    }}
                  >
                    {data.title}
                  </h1>
                  <Fab
                    sx={{ mr: 2.5 }}
                    variant="extended"
                    style={{ paddingTop: "10px" }}
                  >
                    Read More
                  </Fab>
                </Paper>
              )}
            </Box>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
};

export default Products;
