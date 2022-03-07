import {
  Box,
  Grid,
  Typography,
  Divider,
  Button,
  Link,
  styled,
} from "@mui/material";
import {
  Add,
  Remove,
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
} from "@material-ui/icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const ButtonHover = styled(Link)({
  margin: "0px 0px 30px 30px",
  fontSize: "16px",
  letterSpacing: "1px",
  textTransform: "uppercase",
  display: "inline-block",
  textAlign: "center",
  width: "165px",
  fontWeight: "700",
  padding: "15px 8px 7px",
  border: "2px solid #000",
  backgroundColor: "white",
  position: "relative",
  color: "black",
  textDecoration: "none",
  transition: "0.3s ease all",
  zIndex: "10",
  ":hover": {
    color: "white",
    backgroundColor: "transparent",
    borderColor: "white",
  },
  ":before": {
    content: '""',
    position: "absolute",
    top: "0",
    left: "0",
    right: "100%",
    bottom: "0",
    opacity: "0",
    backgroundColor: "transparent",
    color: "black",
    zIndex: -1,
    transition: "0.5s all ease",
  },
  ":hover:before": {
    left: 0,
    right: 0,
    opacity: 1,
  },
});

const ProductPage = () => {
  const [count, setCount] = useState(0);

  function decrementCount() {
    setCount(count - 1);
  }

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <Box>
      <Navbar />
      <Box sx={{ pt: "50px", display: "flex", alignContent: "end" }}>
        <Box sx={{ flex: 1 }}>
          <Box
            component="img"
            sx={{
              width: "100%",
              height: "83vh",
              objectFit: "cover",
            }}
            src="https://en.chiliklaus.dk/cache/1/4/9/8/6/2/9/chili-klaus-hot-sauce-no-1-fit-1000x1000x95.jpg"
          />
          <Divider variant="middle" />
          <Box
            sx={{
              display: "flex",
              // alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                pt: "4px",
                display: "flex",
                alignContent: "space-between",
                width: 260,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography>Share:</Typography>
              <Facebook />
              <Twitter />
              <Instagram />
              <Pinterest />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            flex: 1,
            padding: "100px 100px",
            backgroundColor: "#ded5c4",
            flexDirection: "column",
            flexWrap: "wrap",
          }}
        >
          <Typography
            sx={{
              pb: 4,
              fontWeight: 400,
              fontSize: 30,
            }}
          >
            Hot Sauce Nº 1 - Smoky Ghost
          </Typography>
          <Typography sx={{ fontWeight: "light", fontSize: 15 }}>
            QUANTITY
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", fontWeight: 700 }}>
            <Remove onClick={decrementCount} />
            <Box
              sx={{
                width: "30px",
                height: "30px",
                fontSize: 20,
                borderRadius: 2,
                border: "1px solid black",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0px 5px",
              }}
            >
              {count}
            </Box>
            <Add onClick={incrementCount} />
          </Box>
          <Box
            sx={{
              textAlign: "right",
              fontWeight: "regular",
              fontSize: 35,
              pb: 2,
              pt: 1,
            }}
          >
            19.19 €
          </Box>
          <Box sx={{ pb: 4 }}>
            <ButtonHover>ORDER</ButtonHover>
          </Box>
          <Box
            sx={{
              // width: "100%",
              display: "flex",
              // alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box>
              <Divider />
              <Typography sx={{ pt: 5 }}>
                Hot Sauce Nº 1 is Chili Klaus' first Hot Sauce. It is made on
                Ghost and Chipotle chili, from which it also has its slightly
                smoked flavor. Pepper and grilled pepper are added, giving this
                Hot Sauce an intense flavor and color. Use Nº 1 on pizza, chili
                con carne, scrambled eggs, tacos, steak and not least your
                burger.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                pt: 3,
              }}
            >
              <Typography>Net weight:147 ml.</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                pt: 3,
              }}
            >
              <Typography>Spiciness Level 9/15</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default ProductPage;
