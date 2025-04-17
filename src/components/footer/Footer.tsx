import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../../styles/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/carolina-cordoba-455ab9166/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/carolinacordoba"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a href="mailto:carolina.cordoba@medieinstitutet.se">
          <FaEnvelope />
        </a>
      </div>
      <p className="footer-copy">© Carolina Cordoba 2025. All rights reserved.</p>
    </footer>
  );
};

export default Footer;