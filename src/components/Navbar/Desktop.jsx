import React from "react";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, animateScroll as scroll } from "react-scroll";
import { useMediaQuery } from "@mui/material";

const MenuText = styled(Typography)(({ theme }) => ({
  fontSize: useMediaQuery("(min-width: 1200px)") ? "26px" : "17px",
  fontFamily: "Alata",
  cursor: "pointer",
  opacity: 1,
  "&:hover": {
    opacity: 0.7,
  },
}));

function Desktop() {
  return (
    <>
      <Link
        to="StronaGlowna"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}
      >
        <MenuText>STRONA GŁÓWNA</MenuText>
      </Link>
      <Link to="About" spy={true} smooth={true} offset={-100} duration={1000}>
        <MenuText>O NAS</MenuText>
      </Link>
      <Link to="Uslugi" spy={true} smooth={true} offset={0} duration={1000}>
        <MenuText>USŁUGI</MenuText>
      </Link>
      <Link to="Marki" spy={true} smooth={true} offset={-70} duration={1000}>
        <MenuText>OBSŁUGIWANE MARKI</MenuText>
      </Link>
      <Link to="Kontakt" spy={true} smooth={true} offset={10} duration={1000}>
        <MenuText>KONTAKT</MenuText>
      </Link>
    </>
  );
}

export default Desktop;
