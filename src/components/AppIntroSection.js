import React from "react";

export default function AppIntroSection() {
  return (
    <section className="app-intro-section" data-aos="fade-up">
      <div className="app-intro-content">
        <img src="https://www.17track.net/assets/images/track_page/part3_01.webp" alt="Shopify App" className="app-intro-img" />
        <div>
          <h2>Shopify App <span className="badge">Built for Shopify</span></h2>
          <p className="app-intro-desc">
            A tracking App designed for Shopify merchants. It helps reduce 'Where is my order?' tickets. With powerful features, it enhances the shopping experience and creates more opportunities for repeat purchases.
          </p>
          <button className="app-intro-btn">Get started free &gt;&gt;</button>
        </div>
      </div>
    </section>
  );
} 