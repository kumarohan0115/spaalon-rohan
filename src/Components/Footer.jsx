import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-div">
      <div className="quickLink">
        <h4>Quick Links</h4>
        <ul>
          <li>About</li>
          <li>Privacy Policy</li>
          <li>Terms and Condition</li>
          <li>Post Your Business</li>
        </ul>
      </div>
      <div className="categories">
        <h4>Categories</h4>
        <ul>
          <li>Top Categories</li>
          <li>Popular Spa and Saloon</li>
          <li>Best Deals</li>
          <li>Latest Submission</li>
        </ul>
      </div>
      <div className="contacts">
        <h4>Contact Us</h4>
        <ul>
          <li>
            <LocationOnIcon />
            Connaught Place, New Delhi, India
          </li>
          <li>
            <CallIcon />
            +91 9999-999-999
          </li>
          <li>
            <EmailIcon />
            info@spaalon.com
          </li>
        </ul>
      </div>
      <div className="keepintouch_social">
        <h4>Keep In Touch</h4>
        <div>
          <input
            className="form-control"
            type="email"
            placeholder="Enter Your Email"
          />
          <button className="btn btn-sm">
            <SendIcon/>
          </button>
        </div>
        <div className="keepintoucn_follow">
          <h4>Follow Us</h4>
          <ul>
            <li>
              <img src="https://spaalon.com/images/facebook_icon.svg" alt="" />
            </li>
            <li>
              <img src="https://spaalon.com/images/instagram_icon.svg" alt="" />
            </li>
            <li>
              <img src="https://spaalon.com/images/twitter_icon.svg" alt="" />
            </li>
            <li>
              <img src="https://spaalon.com/images/youtube_icon.svg" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
