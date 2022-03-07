import React from "react";
import { Box, styled, Grid } from "@mui/material";
import { categories } from "../data";
import CategoryItem from "./category-item";

const Container = styled(Box)({
  paddingTop: 30,
  flexWrap: "wrap",
  justifyContent: "space-between",
});

const Categories = () => {
  return (
    <Container sx={{ display: 'flex' }}>
       <Grid container spacing={2}>
        {categories.map((item) => (
          <Grid item xs={12} sm={8} md={6} lg={4}>
          <CategoryItem item={item} key={item.id} />
          </Grid>
        ))}
</Grid>
     </Container>
  );
};

export default Categories;