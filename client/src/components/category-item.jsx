import React from "react";
import { Box, styled, Link,} from "@mui/material";

const Container = styled(Box)({
  flex: 1,
  margin: 15,
  position: "relative",
});

const ImageContainer = styled(Box)({
  minWidth: "400px",
  maxWidth: "500px",
  height: "550px",
  overflow: "hidden", 
})

const Image = styled('img')({
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  // minWidth: "400px",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "flex-start",
  filter: "brightness(70%)",
  obejectFit: "cover",
  transition: "3s",
  "&:hover": {
    transform: "scale(1.25)",
  }
});

const Info = styled(Box)({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "50%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-end",
});

const Title = styled("h1")({
  color: "white",
  paddingLeft: 30,
  fontSize: "28px",
  fontWeight: "bold",
});

const ButtonHover = styled(Link)({
  margin: "0px 30px 30px 30px",
  fontSize: '16px',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  display: 'inline-block',
  textAlign: 'center',
  width: '165px',
  fontWeight: '700',
  padding: '15px 8px 7px',
  border: '2px solid #000',
  backgroundColor: 'white',
  position: 'relative',
  color: 'black',
  textDecoration: 'none',
  transition: '0.3s ease all',
  zIndex: '10',
  ':hover': {
    color: 'white',
    backgroundColor: 'transparent',
    borderColor: 'white'
  },
  ':before': {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '0',
    right: '100%',
    bottom: '0',
    opacity: '0',
    backgroundColor: 'transparent',
    color: 'black',
    zIndex: -1,
    transition: '0.5s all ease',
  },
  ':hover:before': {
    left: 0,
    right: 0,
    opacity: 1,
  },
});


const CategoryItem = ({ item }) => {
  return (
    <Container>
      <ImageContainer>
      <Image src={item.img} />
      </ImageContainer>
      <Info>
        <Title>{item.title}</Title>
        <ButtonHover href="/sauces">SEE PRODUCTS</ButtonHover>
      </Info>
    </Container>
  );
};

export default CategoryItem;
