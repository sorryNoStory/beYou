import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3 className="footer-title">About Us</h3>
            <p>
              We are a company dedicated to providing high-quality skincare
              products that are safe and effective for all skin types.
            </p>
          </div>
          <div className="col-md-3">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="list-unstyled">
              <li>Email: info@beyou.com</li>
              <li>Phone: 555-555-5555</li>
              <li>Address: 1234 Main St, Anytown USA</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="footer-title">Follow Us</h3>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.facebook.com/">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com/">Twitter</a>
              </li>
              <li>
                <a href="https://www.instagram.com/">Instagram</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="footer-title">Useful Links</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#about">FAQs</a>
              </li>
              <li>
                <a href="#about">Shipping & Returns</a>
              </li>
              <li>
                <a href="#about">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="copyright">Copyright © 2022 BeYou</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
