import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Box, Container } from "@mui/material";
import data from "./data";
import { useMediaQuery } from "@mui/material";

const TypographyTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: useMediaQuery("(min-width: 800px)") ? "72px" : "44px",
  textAlign: "center",
  fontFamily: "Alata",
}));

const TypographySubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontFamily: "Alata",
  fontSize: "48px",
}));

const MarkiContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  gap: 80,
  flexWrap: "wrap",
}));

const MarkiItem = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "180px",
  height: "180px",
  transition: ".5s",
  cursor: "pointer",
  alignItems: "center",
  justifyContent: "center",
}));

function Marki() {
  return (
    <>
      <Container
        id="Marki"
        maxWidth="md"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mt: "100px",
        }}
      >
        <TypographyTitle>Obsługiwane marki</TypographyTitle>
      </Container>
      <Container maxWidth="xl" sx={{ mt: "72px", mb: "110px" }}>
        <MarkiContainer>
          {data.map((item, index) => (
            <MarkiItem key={index}>
              <Box
                sx={{
                  width: "150px",
                  height: "150px",
                  transition: "0.5s",
                  "&:hover": {
                    width: "180px",
                    height: "180px",
                  },
                }}
              >
                <img src={data[index]} width="100%" height="100%" alt="" />
              </Box>
            </MarkiItem>
          ))}
        </MarkiContainer>
      </Container>
    </>
  );
}

export default Marki;
