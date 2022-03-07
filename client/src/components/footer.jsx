import { Box, Typography, Grid } from "@mui/material";
import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";
  import styled from "styled-components";

  const Container = styled(Box)({
    display: "flex",
    margitTop: "auto",
    justifyContent: "space-between"
  })
  
  const Left = styled(Box)({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    backgroundColor: "#222222",
    color: "white",
  });
  
  const Logo = styled(Typography)({
  });
  
  const Desc = styled(Typography)({
    margin: "20px 0px"
  });
  
  const SocialContainer = styled(Box)({
    display: "flex",
  });
  
  const SocialIcon = styled(Box)({
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "20px",
  });
  
  const Title = styled(Typography)({
    marginBottom: "10px",
  });
  
  const Right = styled(Box)({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222222",
    color: "white",
  });
  
  const ContactItem = styled(Box)({
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
  });
  
  const Footer = () => {
    return (
       <Container>
      <Grid container sx={{ display: "flex", margin: "auto" }}>
        <Left>
          <Logo>CHILIHEADS</Logo>
          <Desc>
           Some magnificent description about how wonderful this company is & why chili can change yor life...
          </Desc>
          <SocialContainer>
            <SocialIcon>
              <Facebook />
            </SocialIcon>
            <SocialIcon>
              <Instagram />
            </SocialIcon>
            <SocialIcon >
              <Twitter />
            </SocialIcon>
            <SocialIcon>
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> Pilies g. 7 , Vilnius
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +370 655 66666
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> sails@chiliheads.com
          </ContactItem>
        </Right>
      </Grid>
        </Container>
    );
  };
  
  export default Footer;
