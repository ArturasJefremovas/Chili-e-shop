import { Box, styled } from "@mui/material";
import { Sauces } from "../data";
import SauceCard from "./sauces-card";

const Container = styled(Box)({
  padding: 20,
  display: "flex",
  // flexWrap: "wrap",
  justifyContent: "space-between",
});

const SauceCards = () => {
  return (

     <Container>
        {Sauces.map((item) => (
          <SauceCard item={item} key={item.id} />
        ))}
      </Container>
  );
};

export default SauceCards;