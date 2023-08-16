import React from "react";

import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="title">Contact Information</h1>
      <h2>Email: yourOrganization@email.com</h2>
      <h2>Phone: XXX-XXX-XXXX</h2>
      <p className="copyright">
        <a className="copyright"
          href="https://leighd2008.github.io/My_Profile/"
          rel="noopener noreferrer"
          target="_blank"
        >
         Copyright 2023, Diane Leigh{" "}
        </a>{" "}
      </p>
    </div>
  );
};

export default Footer;
