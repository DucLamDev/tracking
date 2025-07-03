import React from "react";

export default function FooterSection() {
  return (
    <footer className="footer-section">
      <div className="footer-main">
        <div className="footer-col">
          <div className="footer-title">ABOUT</div>
          <a href="#">About us</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Copyright</a>
        </div>
        <div className="footer-col">
          <div className="footer-title">USER GUIDE</div>
          <a href="#">Instruction manual</a>
          <a href="#">Package status</a>
          <a href="#">Tracking status</a>
          <a href="#">Shipping tips</a>
          <a href="#">Tracking page</a>
          <a href="#">Brands</a>
        </div>
        <div className="footer-col">
          <div className="footer-title">HELP</div>
          <a href="#">Contact us</a>
          <a href="#">Help center</a>
          <a href="#">Suggestion & Feedback</a>
          <a href="#">Donate</a>
        </div>
        <div className="footer-col">
          <div className="footer-title">17 <span className="footer-who">WHO WE ARE</span></div>
          <div className="footer-desc">Track all your orders in one place. Sign up to get notifications at every step, and keep your orders organized and managed here.</div>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" className="footer-social-icon" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" className="footer-social-icon" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg" alt="Twitter" className="footer-social-icon" />
            </a>
            <a href="#" aria-label="Zalo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" alt="Zalo" className="footer-social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        © Copyright 2011-2025 17TRACK All Rights Reserved
      </div>
    </footer>
  );
} 