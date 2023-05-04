import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-2 md:p-10 bg-neutral text-neutral-content">
        <div>
          <span className="footer-title">Pages</span>
          <Link to="/" className="link link-hover">Home</Link>
          <Link to="/blog" className="link link-hover">Blog</Link>
          <Link to="/user/register" className="link link-hover">Register</Link>
          <Link to="/user/register" className="link link-hover">Register</Link>
          
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
