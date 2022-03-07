import { Box, Button, Paper, Typography, Link, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { FavoriteBorderOutlined } from "@material-ui/icons";

// import { v4 as uuidv4 } from 'uuid';
// import { SwiperSlide } from 'swiper/react';
// import CardSwiper from './swiper';

const InfoHover = styled(Box)({
  margin: "10px",
  maxWidth: "220px",
  height: "300px",
  position: "relative",
  flex: 1,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  // justifyContent: "space-between",
  alignContent: "space-between",
  transition: "transform 1s",
  transformStyle: "preserve-3d",
  "&>.static, &>.hover": {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",

    backfaceVisibility: "hidden",
  },
  "&>.static": {
    zIndex: 5,
  },
  "&>.hover": {
    zIndex: 4,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  ":hover >.hover": {
    zIndex: 6,
  },
});

const Image = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  zIndex: 2,
});

const SpicinessCircle = styled(Box)({
  borderRadius: "50%",
  backgroundColor: "red",
  width: "35px",
  height: "35px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  border: "2px solid black",
  fontWeight: "bold",
});

const ButtonHover = styled(Link)({
  fontSize: '20px',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  display: 'inline-block',
  textAlign: 'center',
  width: '165px',
  fontWeight: '700',
  padding: '15px',
  border: '2px solid #000',
  backgroundColor: 'transparent',
  position: 'relative',
  color: '#000',
  textDecoration: 'none',
  transition: '0.3s ease all',
  ':hover': {
    color: '#fff',
  },
  ':before': {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '0',
    right: '100%',
    bottom: '0',
    opacity: '0',
    backgroundColor: '#000',
    zIndex: -1,
    transition: '0.5s all ease',
  },
  ':hover:before': {
    left: 0,
    right: 0,
    opacity: 1,
  },
});

const Desc = styled('h5')({
  // whiteSpace: 'nowrap',
  // overflowX: 'scroll',
textOverflow: 'ellipsis',
overFlow: 'hidden',
})

const SauceCard = ({ item }) => {
  return (
    <Paper elevation={7} sx={{ mb: 4 }}>
      <InfoHover>
        <Box className="static">
          <Image src={item.img} />
        </Box>
        <Box
          className="hover"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            alignContent: "space-between",
          }}
        >
          {/* {" "} */}
          <Box sx={{display: "flex", justifyContent: "flex-end" }}>
          <FavoriteBorderOutlined />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexGrow: "1",
              // alignContent: "center",
              flexDirection: "column",
              alignContent: "space-between"
            }}
          >
            <Desc sx={{ mb: 2 }}>{item.desc}</Desc>
            <ButtonHover href="/"
            >
              VIEW PRODUCT
            </ButtonHover>
          </Box>
        </Box>
      </InfoHover>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "220px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SpicinessCircle>{item.spicinessLevel}</SpicinessCircle>
        <Typography
          sx={{
            width: "100%",
            textAlign: "center",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          {item.name}
        </Typography>
      </Box>
      <Typography sx={{ width: "100%", textAlign: "center", pb: 2, color: "#757a79" }}>
        {item.price}
      </Typography>
    </Paper>
  );
};

export default SauceCard;
