import React from "react";
import { Instagram, LinkedIn, GitHub } from "@mui/icons-material";
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <p> Get In Touch </p>
      <strong><a href={`mailto:${'sbadnore@stevens.edu'}`} >sbadnore@stevens.edu</a> | +1 201 526 5735 </strong>

      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/sumedh-badnore"><LinkedIn /></a>
        <a href="https://github.com/sumedhbadnore"><GitHub /></a>
        <a href="https://www.instagram.com/sumedh_badnore?r=nametag"><Instagram /></a>
      </div>
    </div>
  );
}

export default Footer;
