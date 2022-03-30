import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
function SlideShow() {
  const lista = [
    "https://cdn.discordapp.com/attachments/691584717610549338/957886109155745812/zdjecia5.jpg",
    "https://cdn.discordapp.com/attachments/691584717610549338/957886109424164914/zdjecia1.jpg",
    "https://cdn.discordapp.com/attachments/691584717610549338/957886109789081600/zdjecia2.jpg",
    "https://cdn.discordapp.com/attachments/691584717610549338/957886110246268988/zdjecia3.jpg",
    "https://cdn.discordapp.com/attachments/691584717610549338/957886110476931072/zdjecia4.jpg",
  ];

  const [slajd, setSlajd] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      if (lista.length - 1 === slajd) {
        setSlajd(0);
      } else {
        setSlajd(slajd + 1);
      }
    }, 12000);
    return () => {
      clearInterval(timer);
    };
  }, [slajd]);
  const la = lista[slajd];
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          mt: useMediaQuery("(min-width: 1000px)") ? "0px" : "100px",
          position: "relative",
          transform: "2s",
        }}
        id="StronaGlowna"
      >
        <img src={lista[slajd]} height="100%" width="100%" alt="" />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            right: "1%",
            width: useMediaQuery("(min-width: 1000px)") ? "80px" : "30px",
            height: useMediaQuery("(min-width: 1000px)") ? "80px" : "30px",
            cursor: "pointer",
            color: "yellow",
            transform: "translateY(-50%)",
          }}
        >
          <ArrowForwardIos
            sx={{
              fontSize: useMediaQuery("(min-width: 1000px)") ? "80px" : "30px",
            }}
            onClick={() => {
              if (lista.length > slajd + 1) {
                setSlajd(slajd + 1);
              } else {
                setSlajd(0);
              }
            }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "1%",
            width: useMediaQuery("(min-width: 1000px)") ? "80px" : "30px",
            height: useMediaQuery("(min-width: 1000px)") ? "80px" : "30px",
            cursor: "pointer",
            color: "yellow",
            transform: "translateY(-50%)",
          }}
        >
          <ArrowBackIos
            sx={{
              fontSize: useMediaQuery("(min-width: 1000px)") ? "80px" : "30px",
            }}
            onClick={() => {
              if (slajd >= 1) {
                setSlajd(slajd - 1);
              } else {
                setSlajd(lista.length - 1);
              }
            }}
          />
        </Box>
      </Box>
    </>
  );
}

export default SlideShow;
