import React from "react";

import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="title">Contact Information</h1>
      <h2>Email: Fire.Fastpitch.Softball@gmail.com</h2>
      {/* <h2>Phone: 330-980-1366</h2> */}
      <p className="copyright">
        <a
          href="https://leighd2008.github.io/My_Profile/"
          rel="noopener noreferrer"
          target="_blank"
        >
         Copyright 2022, Diane Leigh{" "}
        </a>{" "}
      </p>
    </div>
  );
};

export default Footer;
