
import React from "react";
// import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer">
      <div>
        <div md="4" className="footer-body">
          <div id="social-links">
        <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/"
                style={{ color: "#6e1446" }}
                target="_blank" 
                rel="noopener noreferrer"
              >github</a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/"
                style={{ color: "#6e1446" }}
                target="_blank" 
                rel="noopener noreferrer"
              > twitter</a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/"
                style={{ color: "#6e1446" }}
                target="_blank" 
                rel="noopener noreferrer"
              > linkedin </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com"
                style={{ color: "#6e1446" }}
                target="_blank" 
                rel="noopener noreferrer"
              >instagram</a>
            </li>
          </ul>
          </div>
        <div md="4" className="footer-copywright">
          <h5>Designed and Developed by Lulu Summers</h5>
        </div>
        <div md="4" className="footer-copywright">
          <h5>Copyright © {year} LS</h5>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;