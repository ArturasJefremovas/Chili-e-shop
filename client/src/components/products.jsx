import { styled } from "@mui/system";
import { Box, Typography, Grid } from "@mui/material";
import { popularProducts } from "../data";
import Product from "./product-card";

const Container = styled(Box)({
  padding: 20,
  display: "flex",
  // flexWrap: "wrap",
  justifyContent: "space-between",
});

const TitleBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "10px",
});

const Products = () => {
  return (
    <>
      <TitleBox>
        <Typography
          sx={{ fontSize: "35px", fontWeight: "bold", margin: "40px" }}
        >
          POPULAR PRODUCTS
        </Typography>
      </TitleBox>
      <Container>
        <Grid container spacing={2}>
          {popularProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <Product product={product} key={product.id} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Products;

