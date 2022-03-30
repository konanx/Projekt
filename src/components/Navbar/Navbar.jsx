import React, { useState, useEffect } from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  listItemSecondaryActionClasses,
  Box,
} from "@mui/material";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import { useMediaQuery } from "@mui/material";
import { Link, animateScroll as scroll } from "react-scroll";
import Home from "@mui/icons-material/Home";
import Info from "@mui/icons-material/Info";
import { styled } from "@mui/material/styles";
import MiscellaneousServices from "@mui/icons-material/MiscellaneousServices";
import QuestionAnswer from "@mui/icons-material/QuestionAnswer";
import Phone from "@mui/icons-material/Phone";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const IconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  cursor: "pointer",
  paddingTop: "7px",
}));
const TypographyIcon = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontFamily: "Alata",
}));

function Navbar() {
  const [scroll, setScroll] = useState(true);
  const [menu, setMenu] = useState(false);
  const [menuDisplay, setMenuDisplay] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY < 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    setMenuDisplay(false);
    const timer = setTimeout(() => {
      setMenuDisplay(menu);
    }, 550);
    return () => {
      clearTimeout(timer);
    };
  }, [menu]);

  const handleClick = () => {
    setMenu(false);
  };

  return (
    <>
      <ClickAwayListener onClickAway={handleClick}>
        <AppBar
          sx={{ opacity: useMediaQuery("(min-width: 1000px)") ? 0.9 : 1 }}
        >
          <Toolbar
            sx={{
              mx: useMediaQuery("(min-width: 1400px)") ? "125px" : "30px",
              height:
                !useMediaQuery("(min-width: 1000px)") || !scroll
                  ? "100px"
                  : "150px",
              gap: "35px",
              transition: "1s",
              "@media all": {
                padding: "0px",
              },
            }}
          >
            <Link
              to="StronaGlowna"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              <Box
                transition="3s"
                width={
                  !useMediaQuery("(min-width: 1000px)") || !scroll
                    ? "90px"
                    : "150px"
                }
                height={
                  !useMediaQuery("(min-width: 1000px)") || !scroll
                    ? "70px"
                    : "120px"
                }
                minWidth={
                  !useMediaQuery("(min-width: 1000px)") || !scroll
                    ? "90px"
                    : "150px"
                }
                minHeight={
                  !useMediaQuery("(min-width: 1000px)") || !scroll
                    ? "70px"
                    : "120px"
                }
                sx={{
                  transition: "1s",
                  cursor: "pointer",
                }}
              >
                <img
                  src="https://cdn.discordapp.com/attachments/691584717610549338/957859304038346762/pneumax_logo_2.png"
                  alt=""
                  width="100%"
                  height="100%"
                />
              </Box>
            </Link>
            <Box flexGrow={1}></Box>
            {useMediaQuery("(min-width: 1000px)") ? (
              <Desktop />
            ) : (
              <Mobile setMenu={setMenu} menu={menu} />
            )}
          </Toolbar>

          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: menu ? "200px" : "0px",
              transition: "1s",
            }}
          >
            {menu && (
              <Box
                id="Prawidlowe"
                sx={{
                  opacity: menuDisplay ? 1 : 0,
                  transition: "1.5s",
                  pl: 5,
                }}
              >
                <Link
                  to="StronaGlowna"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={1000}
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  <IconBox>
                    <Home sx={{ fontSize: "30px" }} />
                    <TypographyIcon>Strona Główna</TypographyIcon>
                  </IconBox>
                </Link>
                <Link
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  <IconBox>
                    <Info sx={{ fontSize: "30px" }} />
                    <TypographyIcon>O Nas</TypographyIcon>
                  </IconBox>
                </Link>
                <Link
                  to="Uslugi"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  <IconBox>
                    <MiscellaneousServices sx={{ fontSize: "30px" }} />
                    <TypographyIcon>Uslugi</TypographyIcon>
                  </IconBox>
                </Link>
                <Link
                  to="Marki"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  <IconBox>
                    <QuestionAnswer sx={{ fontSize: "30px" }} />
                    <TypographyIcon>Obsługiwane Marki</TypographyIcon>
                  </IconBox>
                </Link>
                <Link
                  to="Kontakt"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  <IconBox>
                    <Phone sx={{ fontSize: "30px" }} />
                    <TypographyIcon>Kontakt</TypographyIcon>
                  </IconBox>
                </Link>
              </Box>
            )}
          </Box>
        </AppBar>
      </ClickAwayListener>
    </>
  );
}

export default Navbar;
