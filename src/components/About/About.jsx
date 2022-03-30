import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import text from "./text";
import { useMediaQuery } from "@mui/material";

//  Typography Typography Typography
const TypographyTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: useMediaQuery("(min-width: 500px)") ? "72px" : "60px",
  fontFamily: "Montserrat",
}));

const TypographySubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontFamily: "Alata",
  fontSize: "48px",
}));

const TypographyText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontFamily: "Alata",
  fontSize: "20px",
}));
// Typography Typography Typography

// flex flex flex flex flex flex
const AboutContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: useMediaQuery("(min-width: 1400px)") ? "row" : "column",
  width: "100%",
  alignItems: useMediaQuery("(min-width: 1400px)") ? "flex-start" : "center",
  justifyContent: useMediaQuery("(min-width: 1400px)")
    ? "flex-start"
    : "center",
  gap: theme.spacing(7),
  flexWrap: "wrap",
}));

const AboutItem = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: useMediaQuery("(min-width: 1400px)") ? "30%" : "95%",
  padding: theme.spacing(1),
}));
// flex flex flex flex flex flex
function About() {
  return (
    <>
      <Container
        id="About"
        maxWidth="md"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mt: "100px",
        }}
      >
        <TypographyTitle>PNEUMAX</TypographyTitle>
        <TypographySubtitle>O nas</TypographySubtitle>
      </Container>
      <Container maxWidth="xl" sx={{ mt: "70px", mb: "70px" }}>
        <AboutContainer>
          {text.map((_, index) => (
            <AboutItem key={index}>
              <TypographyText>{text[index]}</TypographyText>
            </AboutItem>
          ))}
        </AboutContainer>
      </Container>
    </>
  );
}

export default About;
