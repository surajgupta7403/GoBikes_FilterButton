import {
  Box,
  Typography,
  Tabs,
  Tab,
  Grid,
  IconButton,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import emptyBookings from "../../assets/images/emptyBookings.png";
import HondaActiva from "../../assets/images/HondaActiva.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SummarizeIcon from "@mui/icons-material/Summarize";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Booking() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  const [active, setActive] = useState("");

  return (
    <>
      <Box
        sx={{
          width: "100%",
          borderRadius: "8px",
          boxShadow: "2",
        }}
      >
        <div style={{ padding: "2%" }}>
          <Typography variant="h5" sx={{ fontWeight: "regular" }}>
            Bookings
          </Typography>
          <Typography variant="p" sx={{ fontSize: "18px" }}>
            Manage your bookings
          </Typography>
        </div>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Confirmed" />
          <Tab label="Pending" />
          <Tab label="Cancelled" />
        </Tabs>
        <TabPanel value={value} index={0} align="center">
          <Box
            sx={{
              width: "25%",
              borderRadius: "8px",
              padding: "3px",
              backgroundColor: "#fff3cd",
            }}
          >
            No orders found!
          </Box>
          <img
            src={emptyBookings}
            alt="No orders found"
            style={{ marginTop: "2%" }}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          {active === "" && (
            <Box
              sx={{
                width: "100%",
                borderRadius: "8px",
                padding: "3px",
                backgroundColor: "#eeeeee",
              }}
            >
              <div style={{ padding: "10px", display: "flex" }}>
                <img
                  src={HondaActiva}
                  alt="HondaActiva"
                  style={{
                    width: "auto",
                    height: "70px",
                    border: "1px solid gray",
                    borderRadius: "5px",
                    padding: "15px",
                    backgroundColor: "white",
                    marginTop: "28px",
                  }}
                />
                <div style={{ padding: "15px" }}>
                  <Typography variant="p" sx={{ fontWeight: "medium" }}>
                    <span>Honda Activa 125</span>
                    <span>
                      <Button
                        variant="text"
                        sx={{
                          color: "#4cbb17",
                          fontSize: "15px",
                          fontWeight: "medium",
                          marginLeft: "318px",
                          outline: "none",
                        }}
                        onClick={() => setActive("viewDetails")}
                      >
                        View Details
                      </Button>
                    </span>
                    <br />
                    <span>
                      BookingID: #20659 | Booking Date: Feb 22, 2023 12:35 PM
                    </span>
                    <br />
                    <span>Go Hub Details: Bangalore Railway Station</span>
                  </Typography>
                </div>
              </div>
              <hr style={{ fontWeight: "medium" }} />
              <Grid container>
                <Grid item xs={12} sm={4}>
                  <IconButton sx={{ color: "black" }}>
                    <CalendarMonthIcon fontSize="small" />
                  </IconButton>
                  <Typography variant="p">Feb 23,2023 1:00PM</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <IconButton sx={{ color: "black" }}>
                    <CalendarMonthIcon fontSize="small" />
                  </IconButton>
                  <Typography variant="p">
                    Feb 23,2023 1:00PM Paid: <span>&#8377;</span>
                    112.28
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Typography variant="p" sx={{ paddingLeft: "10px" }}>
                    Deposit: <span>&#8377;</span>200
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          )}
          {active === "viewDetails" && (
            <div>
              <Box
                sx={{
                  width: "100%",
                  borderRadius: "8px",
                  padding: "10px",
                  backgroundColor: "#eeeeee",
                }}
              >
                <Grid container spacing={5}>
                  <Grid item xs={12} sm={9}>
                    <IconButton>
                      <ArrowBackIosIcon fontSize="small" />
                    </IconButton>
                    <Typography variant="p">
                      BookingID: #20659 | Booking Date: Feb 22, 2023 12:35 PM
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        backgroundColor: "red",
                        ":hover": {
                          backgroundColor: "red",
                        },
                      }}
                    >
                      Status: Pending
                    </Button>
                  </Grid>
                </Grid>
              </Box>
              <div style={{ marginTop: "3px", marginBottom: "3px" }}>
                <IconButton>
                  <TwoWheelerIcon />
                </IconButton>
                <Typography variant="p" sx={{ paddingLeft: "2px" }}>
                  Bike Details
                </Typography>
              </div>
              <Box
                sx={{
                  width: "100%",
                  borderRadius: "8px",
                  padding: "3px",
                  backgroundColor: "#eeeeee",
                }}
              >
                <div style={{ padding: "10px", display: "flex" }}>
                  <img
                    src={HondaActiva}
                    alt="HondaActiva"
                    style={{
                      width: "auto",
                      height: "70px",
                      border: "1px solid gray",
                      borderRadius: "5px",
                      padding: "15px",
                      backgroundColor: "white",
                      marginTop: "18px",
                    }}
                  />
                  <div style={{ padding: "15px" }}>
                    <Typography variant="p" sx={{ fontWeight: "medium" }}>
                      <span>Honda Activa 125</span>
                      <br />
                      <span>Quantity: 1</span>
                      <br />
                      <span>
                        Rent Amount: <span>&#8377;</span>499 | Refundable
                        Deposit: <span>&#8377;</span>2000
                      </span>
                    </Typography>
                  </div>
                </div>
                <hr
                  style={{
                    color: "#9e9e9e",
                    borderColor: "#9e9e9e",
                    height: "3px",
                    paddingBottom: "5px",
                  }}
                />
                <Grid container spacing={40}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="p" sx={{ marginLeft: "10px" }}>
                      Pickup Date and Time
                    </Typography>
                    <IconButton sx={{ color: "black" }}>
                      <CalendarMonthIcon fontSize="small" />
                    </IconButton>
                    <Typography variant="p">Feb 23,2023 1:00PM</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="p" sx={{ marginRight: "10px" }}>
                      Dropoff Date and Time
                    </Typography>
                    <IconButton sx={{ color: "black" }}>
                      <CalendarMonthIcon fontSize="small" />
                    </IconButton>
                    <Typography variant="p">Feb 23,2023 1:00PM</Typography>
                  </Grid>
                </Grid>
              </Box>
              <div style={{ marginTop: "3px", marginBottom: "3px" }}>
                <IconButton>
                  <SummarizeIcon />
                </IconButton>
                <Typography variant="p" sx={{ paddingLeft: "2px" }}>
                  Fare Summary
                </Typography>
              </div>
              <Box
                sx={{
                  width: "100%",
                  borderRadius: "8px",
                  padding: "12px",
                  backgroundColor: "#eeeeee",
                }}
              >
                <Grid container spacing={5} sx={{ padding: "3px" }}>
                  <Grid item xs={12} sm={10}>
                    <Typography variant="p">Rent Now</Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <Typography variant="p">
                      <span>&#8377;</span>499.00
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={2}
                  sx={{ padding: "3px", marginLeft: "3px" }}
                >
                  <Grid item xs={12} sm={3}>
                    <Typography variant="p" fontSize="13px">
                      Daily Packages
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography variant="p" fontSize="13px">
                      1Day + <span>&#8377;</span>499.00 = <span>&#8377;</span>
                      499.00
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={5}
                  sx={{ padding: "3px", paddingBottom: "7px" }}
                >
                  <Grid item xs={12} sm={10}>
                    <Typography variant="p">Gohub Discount</Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <Typography variant="p" color="#4cbb17">
                      - <span>&#8377;</span>49.90
                    </Typography>
                  </Grid>
                </Grid>
                <hr
                  style={{
                    color: "#9e9e9e",
                    borderColor: "#9e9e9e",
                    height: "3px",
                  }}
                />
                <Grid
                  container
                  spacing={6}
                  sx={{ padding: "3px", paddingBottom: "7px" }}
                >
                  <Grid item xs={12} sm={10}>
                    <Typography variant="p">Total</Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <Typography variant="p">
                      <span>&#8377;</span>449.10
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={2}
                  sx={{ padding: "2px", marginLeft: "5px" }}
                >
                  <Grid item xs={12} sm={10}>
                    <Typography variant="p" fontSize="13px">
                      Remaining Rent
                    </Typography>
                    <br />
                    <Typography variant="p" fontSize="13px">
                      (To be paid at the time of pickUp)
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <Typography variant="p" fontSize="13px">
                      <span>&#8377;</span>336.83
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={2}
                  sx={{
                    padding: "2px",
                    marginLeft: "5px",
                    paddingBottom: "7px",
                  }}
                >
                  <Grid item xs={12} sm={10}>
                    <Typography variant="p" fontSize="13px">
                      Advanced Payment
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <Typography variant="p" fontSize="13px">
                      <span>&#8377;</span>112.28
                    </Typography>
                  </Grid>
                </Grid>
                <hr
                  style={{
                    color: "#9e9e9e",
                    borderColor: "#9e9e9e",
                    height: "3px",
                  }}
                />
                <Grid container spacing={6} sx={{ padding: "3px" }}>
                  <Grid item xs={12} sm={10}>
                    <Typography variant="p">Amount Paid</Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <Typography variant="p">
                      <span>&#8377;</span>112.28
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={6}
                  sx={{ padding: "3px", paddingBottom: "7px" }}
                >
                  <Grid item xs={12} sm={10}>
                    <Typography variant="p">Refundable Deposit</Typography>
                    <br />
                    <Typography variant="p" fontSize="13px">
                      (To be paid at the time of pickUp and will refunded after
                      the drop)
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <Typography variant="p">
                      <span>&#8377;</span>2000
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </div>
          )}
        </TabPanel>
        <TabPanel value={value} index={2} align="center">
          <Box
            sx={{
              width: "25%",
              borderRadius: "8px",
              padding: "3px",
              backgroundColor: "#fff3cd",
            }}
          >
            No orders found!
          </Box>
          <img
            src={emptyBookings}
            alt="No orders found"
            style={{ marginTop: "2%" }}
          />
        </TabPanel>
      </Box>
    </>
  );
}
