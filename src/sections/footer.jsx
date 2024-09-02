import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="left">
        <p>&copy;Copyright All rights reserved </p>
      </div>
      <div className="right">
        <i class="fi-brands-facebook"></i>
        <i class="fi fi-brands-instagram"></i>
        <i class="fi fi-brands-github"></i>
      </div>
    </div>
  );
}

export default Footer;
