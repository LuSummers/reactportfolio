
import React from "react";
// import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer">
      <div>
        <div md="4" className="footer-copywright">
          <h3>Designed and Developed by Lulu Summers</h3>
        </div>
        <div md="4" className="footer-copywright">
          <h3>Copyright © {year} LS</h3>
        </div>
        <div md="4" className="footer-body">
        <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/"
                style={{ color: "black" }}
                target="_blank" 
                rel="noopener noreferrer"
              >github</a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/"
                style={{ color: "black" }}
                target="_blank" 
                rel="noopener noreferrer"
              > twitter</a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/"
                style={{ color: "black" }}
                target="_blank" 
                rel="noopener noreferrer"
              > linkedin </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com"
                style={{ color: "black" }}
                target="_blank" 
                rel="noopener noreferrer"
              >instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;


