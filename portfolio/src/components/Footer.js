import React from "react";
import { Instagram, LinkedIn, GitHub } from "@mui/icons-material";
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Instagram />
        <LinkedIn />
        <GitHub />
      </div>
      <p> &copy; 2024 cs@sumedh.com</p>
    </div>
  );
}

export default Footer;
