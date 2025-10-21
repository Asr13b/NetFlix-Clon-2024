import React from "react";
import "./footer.css";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_container">
        
        {/* Top: Social media icons */}
        <div className="footer_socials">
          <span><FacebookOutlinedIcon/></span>
          <span><InstagramIcon/></span>
          <span><YouTubeIcon/></span>
        </div>

        {/* Middle: Links */}
        <div className="footer_links">
          <ul>
            <li>Audio and Subtitles</li>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notices</li>
          </ul>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>
          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>

        {/* Bottom: Service code + copyright */}
        <div className="footer_bottom">
          <button className="service_code">Service Code</button>
          <p>© 1997–2025 Netflix, Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

