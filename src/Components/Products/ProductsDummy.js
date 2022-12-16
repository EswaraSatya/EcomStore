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
import FavIconChangedBG from "./FavIconChangedBG.png";
import { useNavigate } from "react-router-dom";
import "../TopBar.css";
import { CardActionArea, Pagination, Paper, Skeleton } from "@mui/material";
import MenuList from "../MenuList/MenuList";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Backdrop from "@mui/material/Backdrop";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import PhoneIcon from "@mui/icons-material/Phone";
import SocialIcons from "../SocialIcons/SocialIcons";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import BottomNav from "./BottomNav";

function Copyright() {
  return (
    <>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="http://EswaraSatya.github.io/EcomStore">
          PSR Designs
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </>
  );
}

const theme = createTheme();

export default function Album(props) {
  const [users, setUsers] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [open, setOpen] = useState(false);

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

  const searchItems = (event) => {
    setSearchText(event.target.value);
    if (event.target.value !== "") {
      const filteredData = users.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchText.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(users);
    }
  };
  //take care of menu filter

  const [item, setItem] = useState(users);

  const menuItems = [...new Set(users.map((Val) => Val.value))];

  const filterItem = (curcat) => {
    const newItem = users.filter((newVal) => {
      return newVal.value === curcat;
    });
    setItem(newItem);
  };
  //till here

  useEffect(() => {
    fetchData();
  }, []);

  let newData = [];
  if (item.length > 0) {
    newData = item;
  }
  else {
    newData = users;
  }
  const darkTheme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        main: "#000000",
        darker: "#053e85",
      },
      neutral: {
        main: "#64748B",
        contrastText: "#fff",
      },
    },
  });
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "black",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "82ch",
        height: "35px",
      },
    },
  }));
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "20px",
    backgroundColor: "#eeeeee",
    "&:hover": {
      backgroundColor: "#e3f2fd",
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <ElevationScroll {...props}>
          <AppBar color="transparent" sx={{ backdropFilter: "blur(20px)" }}>
            <Toolbar>
              <img
                src={FavIconChangedBG}
                alt="logo img"
                width="80"
                height="80"
              />
              <Typography
                variant="h6"
                color="inherit"
                noWrap
                onClick={HomePage}
              >
                PSR Designs
              </Typography>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <main>
          {/* Hero unit */}

          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 8,
              pb: 6,
              marginTop: "7%",
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h5"
                variant="h4"
                align="center"
                color="text.primary"
                fontFamily={"Aclonica Font"}
              >
                Customised Botique Products
              </Typography>
              <Typography
                variant="h8"
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
                <>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ "aria-label": "search" }}
                      onChange={(e) => searchItems(e)}
                      value={searchText}
                    />
                  </Search>
                </>
              </Stack>

              <MenuList filterItem={filterItem}
                setItem={setItem}
                menuItems={menuItems}
                users={users} />
            </Container>
          </Box>
          <Container sx={{ py: 0 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={3}>
              {newData.map((card) => (
                <Grid item key={card.id} xs={12} sm={6} md={4}>
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
                        borderRadius: "20px",
                        width: "auto",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="380px"
                        width="auto" // sx={{ width: 220, marginLeft: "22px" }}
                        image={card.image}
                        alt="green iguana"
                        style={{
                          borderRadius: "25px",
                        }}
                      />
                      <CardContent sx={{ flexGrow: 2 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {card.title}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button color="primary" onClick={handleToggle}>
                          <AddShoppingCartIcon />
                          Buy Now
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
                                You can contact on this
                                <PhoneIcon /> 9966499429 for orders
                              </p>
                              <p>
                                By the way don't Forgot to share my Website
                                with your
                                <span
                                  style={{ fontSize: "200%", color: "red" }}
                                >
                                  &hearts;
                                </span>
                                Ones
                              </p>
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
          <br />
          {newData.length > 0 ? (
            window.screen.width < 1280 ? <Pagination style={{ marginLeft: "5%" }} count={10} variant="outlined" color="secondary" size="medium" /> : ""

          ) : ""}
        </main>
        {/* Footer */}
        {newData.length > 0 ? (

          <><Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
              component="p"
            >
              © 2022 PSR Designs. All rights reserved.
            </Typography>
            <SocialIcons />
            <Copyright />
          </Box><br /></>
        ) : ""}
        <BottomNav />
        {/* End footer */}
      </ThemeProvider>
    </>
  );
}
