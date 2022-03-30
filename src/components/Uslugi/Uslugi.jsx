import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Typography, Box, Container } from "@mui/material";
import data from "./data";
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

const TypographyCardTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: useMediaQuery("(min-width: 700px)") ? "48px" : "30px",
  fontFamily: "Alata",
  textAlign: "center",
}));

const TypographyCardSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: useMediaQuery("(min-width: 700px)") ? "34px" : "26px",
  fontFamily: "Alata",
  textAlign: "center",
}));

const TypographyText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontFamily: "Alata",
  fontSize: "15px",
}));
// Typography Typography Typography

// Flex// Flex// Flex

const UslugiContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  flexWrap: "wrap",
  gap: "30px",
}));

const UslugiItem = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "relative",
  flexDirection: "column",
  width: "550px",
  height: "270px",
  flexWrap: "wrap",
  cursor: "pointer",
  transition: "1.5s",
}));

// Flex// Flex// Flex

function Uslugi() {
  const [hover, setHover] = useState(null);

  return (
    <Box backgroundColor="#575757" sx={{ pb: "70px" }} id="Uslugi">
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <TypographyTitle sx={{ mt: "100px" }}>PNEUMAX</TypographyTitle>
        <TypographySubtitle>Usługi</TypographySubtitle>
      </Container>
      <Container maxWidth="xl" sx={{ mt: "30px" }}>
        <UslugiContainer>
          {data.map((item) => {
            const test = item.id === hover;
            return (
              <UslugiItem
                backgroundColor={item.backgroundColor1}
                key={item.id}
                onMouseEnter={() => {
                  setHover(item.id);
                }}
                onMouseLeave={() => {
                  setHover(null);
                }}
              >
                <Box
                  sx={{ backgroundColor: item.backgroundColor1, height: "23%" }}
                >
                  <TypographyCardTitle
                    sx={{ mt: test ? 1 : 2, transition: ".2s" }}
                  >
                    {item.title}
                  </TypographyCardTitle>
                </Box>

                <TypographyCardSubtitle
                  sx={{
                    mt: 5,
                    mx: 6,
                    zIndex: 1,
                  }}
                >
                  {test ? item.text2 : item.text}
                </TypographyCardSubtitle>
                <Box
                  sx={{
                    position: "absolute",
                    backgroundColor: item.backgroundColor2,
                    width: "100%",
                    height: test ? "190px" : "0px",
                    transition: ".2s",
                    bottom: 0,
                  }}
                ></Box>
              </UslugiItem>
            );
          })}
        </UslugiContainer>
      </Container>
    </Box>
  );
}

export default Uslugi;
