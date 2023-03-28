import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import PersonPinRoundedIcon from "@mui/icons-material/PersonPinRounded";

export default function Profile() {
  const [name, setName] = useState("");
  const [editName, setEditName] = useState(false);
  const [cancelEditName, setCancelEditName] = useState(false);
  const [myName, setMyName] = useState("Dibyajyoti Sahoo");
  const [showName, setShowName] = useState("Dibyajyoti Sahoo");
  const [nameSaved, setNameSaved] = useState(false);

  const handleCancelEditName = () => {
    setCancelEditName(!cancelEditName);
    setEditName(!editName);
    setName("");
  };

  const handleNameSave = () => {
    setNameSaved(!nameSaved);
    setEditName(!editName);
    setShowName(myName);
    setName("");
  };

  const [email, setEmail] = useState("");
  const [editEmail, setEditEmail] = useState(false);
  const [cancelEditEmail, setCancelEditEmail] = useState(false);
  const [myEmail, setMyEmail] = useState("strugend@gmail.com");
  const [showEmail, setShowEmail] = useState("strugend@gmail.com");
  const [emailSaved, setEmailSaved] = useState(false);

  const handleCancelEditEmail = () => {
    setCancelEditEmail(!cancelEditEmail);
    setEditEmail(!editEmail);
    setEmail("");
  };

  const handleEmailSave = () => {
    setEmailSaved(!emailSaved);
    setEditEmail(!editEmail);
    setShowEmail(myEmail);
    setEmail("");
  };

  const [address, setAddress] = useState("");
  const [editAddress, setEditAddress] = useState(false);
  const [cancelEditAddress, setCancelEditAddress] = useState(false);
  const [myAddress, setMyAddress] = useState("Odisha");
  const [showAddress, setShowAddress] = useState("Odisha");
  const [addressSaved, setAddressSaved] = useState(false);

  const handleCancelEditAddress = () => {
    setCancelEditAddress(!cancelEditAddress);
    setEditAddress(!editAddress);
    setAddress("");
  };

  const handleAddressSave = () => {
    setAddressSaved(!addressSaved);
    setEditAddress(!editAddress);
    setShowAddress(myAddress);
    setAddress("");
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          borderRadius: "8px",
          boxShadow: "2",
        }}
      >
        <div style={{ padding: "3%" }}>
          <Typography variant="h5" sx={{ fontWeight: "regular" }}>
            Profile
          </Typography>
          <Typography variant="p" sx={{ fontSize: "18px" }}>
            Basic Details
          </Typography>
          <hr style={{ marginTop: "3%" }} />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={7}>
              <Grid container sx={{ marginTop: "5%" }}>
                <Grid item xs={12} sm={10}>
                  <Typography variant="h5" sx={{ fontWeight: "regular" }}>
                    Name
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  {!editName ? (
                    <Button
                      variant="text"
                      size="small"
                      sx={{
                        fontSize: "15px",
                        backgroundColor: "#4cbb17",
                        ":hover": {
                          backgroundColor: "#4cbb17",
                        },
                        color: "white",
                      }}
                      onClick={() => {
                        setEditName(!editName);
                        setName("Name");
                      }}
                    >
                      Edit
                    </Button>
                  ) : (
                    <Button
                      variant="text"
                      size="small"
                      sx={{
                        fontSize: "15px",
                        backgroundColor: "#4cbb17",
                        ":hover": {
                          backgroundColor: "#4cbb17",
                        },
                        color: "white",
                      }}
                      onClick={handleCancelEditName}
                    >
                      Cancel
                    </Button>
                  )}
                </Grid>
              </Grid>
              {name === "" && (
                <Typography variant="p" sx={{ fontSize: "18px" }}>
                  {showName}
                </Typography>
              )}
              {name === "Name" && (
                <div>
                  <TextField
                    label="Name"
                    defaultValue="Dibyajyoti Sahoo"
                    size="small"
                    color="success"
                    sx={{
                      marginTop: "15px",
                    }}
                    focused
                    value={myName}
                    onChange={(e) => setMyName(e.target.value)}
                  />
                  <br />
                  <Button
                    variant="text"
                    size="small"
                    sx={{
                      fontSize: "15px",
                      backgroundColor: "#4cbb17",
                      ":hover": {
                        backgroundColor: "#4cbb17",
                      },
                      color: "white",
                      marginTop: "5px",
                    }}
                    onClick={handleNameSave}
                  >
                    Save
                  </Button>
                </div>
              )}
              <hr style={{ marginTop: "3%" }} />
              <Grid container sx={{ marginTop: "5%" }}>
                <Grid item xs={12} sm={10}>
                  <Typography variant="h5" sx={{ fontWeight: "regular" }}>
                    Email
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  {!editEmail ? (
                    <Button
                      variant="text"
                      size="small"
                      sx={{
                        fontSize: "15px",
                        backgroundColor: "#4cbb17",
                        ":hover": {
                          backgroundColor: "#4cbb17",
                        },
                        color: "white",
                      }}
                      onClick={() => {
                        setEditEmail(!editEmail);
                        setEmail("Email");
                      }}
                    >
                      Edit
                    </Button>
                  ) : (
                    <Button
                      variant="text"
                      size="small"
                      sx={{
                        fontSize: "15px",
                        backgroundColor: "#4cbb17",
                        ":hover": {
                          backgroundColor: "#4cbb17",
                        },
                        color: "white",
                      }}
                      onClick={handleCancelEditEmail}
                    >
                      Cancel
                    </Button>
                  )}
                </Grid>
              </Grid>
              {email === "" && (
                <Typography variant="p" sx={{ fontSize: "18px" }}>
                  {showEmail}
                </Typography>
              )}
              {email === "Email" && (
                <div>
                  <TextField
                    label="Email"
                    defaultValue="strugend@gmail.com"
                    size="small"
                    color="success"
                    focused
                    sx={{ marginTop: "15px" }}
                    value={myEmail}
                    onChange={(e) => setMyEmail(e.target.value)}
                  />
                  <br />
                  <Button
                    variant="text"
                    size="small"
                    sx={{
                      fontSize: "15px",
                      backgroundColor: "#4cbb17",
                      ":hover": {
                        backgroundColor: "#4cbb17",
                      },
                      color: "white",
                      marginTop: "5px",
                    }}
                    onClick={handleEmailSave}
                  >
                    Save
                  </Button>
                </div>
              )}
              <hr style={{ marginTop: "3%" }} />
              <div style={{ marginTop: "5%" }}>
                <Typography variant="h5" sx={{ fontWeight: "regular" }}>
                  Mobile Number
                </Typography>
                <Typography variant="p" sx={{ fontSize: "18px" }}>
                  8260921530
                  <IconButton sx={{ marginLeft: "2%", color: "green" }}>
                    <VerifiedRoundedIcon fontSize="small" />
                  </IconButton>
                </Typography>
                <hr style={{ marginTop: "3%" }} />
              </div>
              <Grid container sx={{ marginTop: "5%" }}>
                <Grid item xs={12} sm={10}>
                  <Typography variant="h5" sx={{ fontWeight: "regular" }}>
                    Address
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  {!editAddress ? (
                    <Button
                      variant="text"
                      size="small"
                      sx={{
                        fontSize: "15px",
                        backgroundColor: "#4cbb17",
                        ":hover": {
                          backgroundColor: "#4cbb17",
                        },
                        color: "white",
                      }}
                      onClick={() => {
                        setEditAddress(!editAddress);
                        setAddress("Address");
                      }}
                    >
                      Edit
                    </Button>
                  ) : (
                    <Button
                      variant="text"
                      size="small"
                      sx={{
                        fontSize: "15px",
                        backgroundColor: "#4cbb17",
                        ":hover": {
                          backgroundColor: "#4cbb17",
                        },
                        color: "white",
                      }}
                      onClick={handleCancelEditAddress}
                    >
                      Cancel
                    </Button>
                  )}
                </Grid>
              </Grid>
              {address === "" && (
                <Typography variant="p" sx={{ fontSize: "18px" }}>
                  {showAddress}
                </Typography>
              )}
              {address === "Address" && (
                <div style={{ marginTop: "10px" }}>
                  <TextField
                    label="Address"
                    defaultValue="Odisha"
                    size="small"
                    color="success"
                    focused
                    value={myAddress}
                    onChange={(e) => setMyAddress(e.target.value)}
                  />
                  <br />
                  <Button
                    variant="text"
                    size="small"
                    sx={{
                      fontSize: "15px",
                      backgroundColor: "#4cbb17",
                      ":hover": {
                        backgroundColor: "#4cbb17",
                      },
                      color: "white",
                      marginTop: "5px",
                    }}
                    onClick={handleAddressSave}
                  >
                    Save
                  </Button>
                </div>
              )}
            </Grid>
            <Grid item xs={12} sm={5}>
              <Box
                sx={{
                  border: "1px solid lightGrey",
                  borderRadius: "8px",
                  marginTop: "10px",
                  marginRight: "10px",
                  width: "100%",
                }}
              >
                <div style={{ padding: "4%" }}>
                  <IconButton>
                    <LockRoundedIcon fontSize="large" />
                  </IconButton>
                  <br />
                  <Typography variant="p">
                    Details GoBikes uses to verify your identity can't be
                    changed. Some personal details can be edited, but we may ask
                    you to verify your identity the next time you book or create
                    a listing.
                  </Typography>
                  <br />
                  <div style={{ marginTop: "5%" }}>
                    <IconButton>
                      <PersonPinRoundedIcon fontSize="large" />
                    </IconButton>
                    <br />
                    <Typography variant="p">
                      Personal info that you've shared with us, like email,
                      address and options to manage it. This info is private to
                      you.
                    </Typography>
                  </div>
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
}
