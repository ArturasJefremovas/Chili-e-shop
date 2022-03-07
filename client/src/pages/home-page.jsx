import React from "react";
import { Box } from '@mui/material';
import Navbar from "../components/navbar";
import Slider from "../components/slider";
import Categories from "../components/categories";
import Products from "../components/products";
import Footer from "../components/footer";



const HomePage = () => {
  return (
    <Box style={{  
      backgroundColor: "#f2f2f2",
    }}>
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Footer />
    </Box>
  );
};

export default HomePage;
