import * as React from "react";
import { Alert, Avatar } from "@mui/material";
import BottomNav from "../../Products/BottomNav";
import prasad from "./Prasad.jpeg"


function ContactUs() {

  return (
    <>
      <Alert severity="success" color="info">
        You Can Contact me on — <strong>9966499429</strong>
      </Alert>

      <Avatar
        sx={{ width: 160, height: 160 }}
        style={{
          top: "18px",
          left: "31%"
        }} src={prasad} />

      <div style={{ paddingTop: "12%", paddingBottom: "15%" }}>
        <h2 style={{
          color: "#6f695d",
          fontFamily: "Inknut Antiqua Light",
          lineHeight: "1.4 !important",
          fontSize: "28px"
        }}>The Designer: Prasad Rao</h2>
        <p style={{
          color: "#555555",
          fontFamily: "News Gothic Regular",
          lineHeight: " 1.6 !important",
          fontSize: "18px"
        }}>Vijayawada Designer living in the Andhra Pradesh.
        </p>
        <p style={{
          color: "#555555",
          fontFamily: "News Gothic Regular",
          lineHeight: " 1.6 !important",
          fontSize: "18px"
        }}>  After graduating with a degree from the Academy of Fine Arts in Amsterdam, Gaia worked as a teacher, painter, sculptor and designer for many years in her native Holland.

          Before moving to south Portugal she saw a piece of modern Nuno felt which is different from the very known wet felting, as Nuno felting combines wool and fibres onto another fabric such as silk. That new technique opened a whole new range of possibilities, like creating very thin and shiny felt but also interesting textures.

          “ Immediately my body knew that that was what I wanted to explore. As I started working with this materials, I literally could feel it growing under, in and through my hands.

          Working with the beautiful, soft natural materials in gorgeous colours and lustre, I started to specialize in felting very light and delicate shawls. After a while this developed into felting dresses, jackets, waistcoats and bags.

          My most recent inspiration is to work with organic forms, earthy colours, textures and sometimes elements of the plant world, instead of the synthetic art that I was so keen
          on at the beginning of my career.

          I would love to bring this unique, natural feeling into our homes by way of wall hangings which enhances a sense of nature and give an interior a warm cozier home-like character.
          The felt panels not only enrich the wall in an unique way but also offer ideal acoustics to solve noise issues. ”</p>

      </div>
      <BottomNav /></>

  );
}

export default ContactUs;
