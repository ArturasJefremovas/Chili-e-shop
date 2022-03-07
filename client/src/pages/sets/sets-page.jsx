// import React from "react";
// import {
//   Box,
//   Grid,
//   Typography,
//   Divider,
//   Button,
//   Link,
//   styled,
// } from "@mui/material";
// import Footer from "../../components/footer";
// import Navbar from "../../components/navbar";
// import SauceCard from "./sauces-card";

// const TDContainer = styled(Box)({
//   paddingTop: "140px",
//   width: "100%",
//   height: "35vh",
//   // backgroundColor: "yellow",
//   dipslay: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// });

// const TitleContainer = styled(Box)({
//   // width: "40%",
//   // backgroundColor: "red",
//   dipslay: "flex",
//   margin: "auto",
// });

// const DescContainer = styled(Box)({
//   width: "40%",
//   // backgroundColor: "green",
//   dipslay: "flex",
//   margin: "auto",
// });

// const CardContainer = styled(Box)({
//   // backgroundColor: "grey",
//   height: "60vh",
// });

// const SaucesPage = () => {
//   return (
//     <Box>
//       <Navbar />
//       <TDContainer>
//         <TitleContainer>
//           <Typography
//             sx={{
//               textAlign: "center",
//               pb: 5,
//               fontSize: 50,
//               fontWeight: "bold",
//             }}
//           >
//             HOT SAUCES
//           </Typography>
//         </TitleContainer>
//         <DescContainer>
//           <Typography>
//             For many people, a meal isn’t a meal without Hot Sauce. Maybe
//             because you can find a Hot Sauce to accompany any dish. In recent
//             years, Lithuania has also opened its eyes to these impressive
//             flavour givers. Chiliheads have the finest Hot Sauce in the Hot
//             Sauce world. We have a personal relationship with many of the often
//             small producers in New York and New Zealand, for example. But Hot
//             Sauce is produced everywhere, and our most important mission is to
//             offer the very best we know.
//           </Typography>
//         </DescContainer>
//       </TDContainer>
//       <CardContainer>

//       </CardContainer>
//       <Footer />
//     </Box>
//   );
// };

// export default SaucesPage;

////////////////////////////////////////////////////////////////////

import React from "react";
import {
  Box,
  Grid,
  Typography,
  Divider,
  Button,
  Link,
  Paper,
  styled,
} from "@mui/material";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import SauceCard from "./sets-card";
// import SauceCards from "./sauces";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SaucesPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <Typography variant="h3" style={{ fontWeight: 600 }}>
              HOT SAUCES
            </Typography>
            </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
          <Grid item xs={3}>
            <Typography>
              For many people, a meal isn’t a meal without Hot Sauce. Maybe
              because you can find a Hot Sauce to accompany any dish. In recent
              years, Lithuania has also opened its eyes to these impressive
              flavour givers. Chiliheads have the finest Hot Sauce in the Hot
              Sauce world. We have a personal relationship with many of the
              often small producers in New York and New Zealand, for example.
              But Hot Sauce is produced everywhere, and our most important
              mission is to offer the very best we know.
            </Typography>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>SPICINESS LEVEL +</Item>
          <Item>PRICE RANGE +</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>Kortelės 4vnt</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SaucesPage;
