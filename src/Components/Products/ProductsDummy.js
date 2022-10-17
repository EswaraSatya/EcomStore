import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DiamondIcon from "@mui/icons-material/Diamond";
import { useNavigate } from "react-router-dom";
import "../TopBar.css";
import { Paper, Skeleton } from "@mui/material";
import MenuList from "../MenuList/MenuList";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchBar from "./SearchBar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Backdrop from "@mui/material/Backdrop";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PhoneIcon from "@mui/icons-material/Phone";

function Copyright() {
  return (
    <>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
      <div>Social Links</div>
    </>
  );
}

const theme = createTheme();

export default function Album(props) {
  const [users, setUsers] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();
  const HomePage = () => {
    navigate("/EcomStore");
  };

  function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

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

  const searchItems = (searchValue) => {
    setSearchText(searchValue);
    if (searchText !== "") {
      const filteredData = users.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchText.toLowerCase());
      });
      setFilteredResults(filteredData);
      console.log(filteredData, "result");
    } else {
      setFilteredResults(users);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  let newData = [];
  if (searchText.length > 0) {
    newData = filteredResults;
  } else {
    newData = users;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <DiamondIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              onClick={HomePage}
            />{" "}
            <Typography variant="h6" color="inherit" noWrap onClick={HomePage}>
              EcomStore layout
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <main>
        {/* Hero unit */}

        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h4"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Customised Botique Products
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              paragraph
              className="p"
            >
              High Quality Products With Custom Designs
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <SearchBar searchItems={searchItems} />
            </Stack>

            <MenuList />
          </Container>
        </Box>
        <Container sx={{ py: 0 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {newData.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                {!isLoading ? (
                  <Skeleton
                    variant="rounded"
                    width={230}
                    height={385}
                    sx={{ bgcolor: "grey.600", borderRadius: "10px" }}
                  />
                ) : (
                  <Paper
                    elevation={20}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "10px",
                      width: "auto",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="auto"
                      width="auto" // sx={{ width: 220, marginLeft: "22px" }}
                      image={card.image}
                      alt="green iguana"
                      style={{
                        borderRadius: "15px",
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.title}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button color="primary" onClick={handleToggle}>
                        <AddShoppingCartIcon />
                        View
                      </Button>
                      <Backdrop
                        sx={{
                          color: "#fff",
                          zIndex: (theme) => theme.zIndex.drawer + 1,
                        }}
                        open={open}
                        onClick={handleClose}
                      >
                        <Dialog
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                          <DialogTitle id="alert-dialog-title">
                            {
                              "Contact Here for Custom Designs on Avaliable Products"
                            }
                          </DialogTitle>
                          <DialogContent dividers>
                            <p
                              id="alert-dialog-description"
                              style={{
                                fontFamily: "Times New Roman",
                                fontSize: "30px",
                                color: "black",
                              }}
                            >
                              You can contact by using This contact Number
                              <PhoneIcon /> 9966499429
                            </p>
                            <DialogContentText>
                              By the way don't Forgot to share my website with
                              your Loved Ones
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose} autoFocus>
                              Close
                            </Button>
                          </DialogActions>
                        </Dialog>{" "}
                      </Backdrop>
                    </CardActions>
                  </Paper>
                )}
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          © 2022 EcomStore. All rights reserved.
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
