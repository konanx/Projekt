import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import data from "./data";
import { useMediaQuery } from "@mui/material";
//  Typography Typography Typography
const TypographyTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: "72px",
  fontFamily: "Alata",
}));

const TypographySubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontFamily: "Alata",
  fontSize: useMediaQuery("(min-width: 1500px)") ? "60px" : "24px",
  textAlign: "center",
}));

const TypographyText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontFamily: "Alata",
  fontSize: useMediaQuery("(min-width: 1500px)") ? "55px" : "28px",
  opacity: 0.25,
}));
// Typography Typography Typography

// flex flex flex flex flex flex
const KontaktContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(7),
}));

const KontaktItem = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "24%",
}));
// flex flex flex flex flex flex

function Kontakt() {
  return (
    <Box backgroundColor="#111111" id="Kontakt">
      <Container maxWidth="md" sx={{ pt: "100px" }}>
        <TypographyTitle sx={{ textAlign: "center" }}>Kontakt</TypographyTitle>
      </Container>
      <Container maxWidth="xl" sx={{ mt: "30px" }}>
        <KontaktContainer>
          {data.map((item) => (
            <KontaktItem key={item.id}>
              <TypographySubtitle sx={{ mb: "25px" }}>
                {item.title}
              </TypographySubtitle>
              <img src={item.link} alt="" />
            </KontaktItem>
          ))}
        </KontaktContainer>
        <TypographyText sx={{ mt: "50px", textAlign: "center", pb: "100px" }}>
          *Dojeżdżamy do klientów w mieście i okolicach
        </TypographyText>
      </Container>
    </Box>
  );
}

export default Kontakt;
