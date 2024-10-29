import React from "react";
import { Instagram, LinkedIn, GitHub } from "@mui/icons-material";
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/sumedh-badnore"><LinkedIn /></a>
        <a href="https://github.com/sumedhbadnore"><GitHub /></a>
        <a href="https://www.instagram.com/sumedh_badnore?r=nametag"><Instagram /></a>
      </div>
      <p> &copy; 2024 CS@sumedh.com</p>
    </div>
  );
}

export default Footer;
