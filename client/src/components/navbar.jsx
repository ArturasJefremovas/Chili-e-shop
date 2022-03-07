import React from "react";
import {
  AppBar,
  Box,
  Grid,
  Typography,
  Divider,
  Menu,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import logo1 from "./images/logo1.png";

const Navbar = () => {
  let navigate = useNavigate();

  return (
    <AppBar sx={{ height: 100, background: "#222222" }}>
      <Divider variant="fullWidth" color="white" />

      <Grid container sx={{ maxWidth: 1440, display: "flex", margin: "auto" }}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: 50, display: { xs: "none", sm: "block" } }}></Box>
          <Box
            component="img"
            sx={{
              height: 40,
              display: { xs: "block", sm: "none" },
            }}
            alt="cili"
            src={logo1}
          />
          <Box
            component="img"
            sx={{
              height: 40,
              display: { xs: "none", lg: "block" },
            }}
            alt="cili"
            src={logo1}
          />
          <Box
            component="img"
            sx={{
              height: 40,
              display: { xs: "none", lg: "block" },
            }}
            alt="cili"
            src={logo1}
          />
          <Box
            component="img"
            sx={{
              height: 40,
              display: { xs: "none", lg: "block" },
            }}
            alt="cili"
            src={logo1}
          />
          <Typography
          onClick={() => navigate("/")}
            sx={{
              fontSize: 25,
              color: "white",
              lineHeight: 1,
              fontWeight: "ligth",
            }}
          >
            CHILIHEADS
          </Typography>
          <Box
            component="img"
            sx={{
              height: 40,
              display: { xs: "none", lg: "block" },
            }}
            alt="cili"
            src={logo1}
          />
          <Box
            component="img"
            sx={{
              height: 40,
              display: { xs: "none", lg: "block" },
            }}
            alt="cili"
            src={logo1}
          />
          <Box
            component="img"
            sx={{
              height: 40,
              display: { xs: "none", lg: "block" },
            }}
            alt="cili"
            src={logo1}
          />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <PermIdentityIcon
              onClick={() => navigate("/login")}
              sx={{
                color: "white",
                fontSize: 24,
                display: { xs: "block", sm: "none" },
              }}
            />
            <Menu></Menu>
            <ShoppingCartOutlinedIcon sx={{ fontSize: 24, color: "white" }} />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Divider variant="fullWidth" color="white" />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              maxWidth: 500,
              margin: "auto",
            }}
          >
            <Button
              sx={{ mt: "8px" }}
              color="primary"
              onClick={() => navigate("/sauces")}
            >
              SAUCES
            </Button>
            <Button
              sx={{ mt: "8px" }}
              color="primary"
              onClick={() => navigate("/sets")}
            >
              SETS
            </Button>
            <Button
              sx={{ mt: "8px" }}
              color="primary"
              onClick={() => navigate("/others")}
            >
              OTHERS
            </Button>
          </Box>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Navbar;
