import React from "react";

export default function TrackingAppSection() {
  return (
    <section className="tracking-app-section" data-aos="fade-up" style={{padding: '60px 0', background: '#fff'}}>
      <div style={{display: 'flex', alignItems: 'center', maxWidth: 1400, margin: '0 auto', justifyContent: 'space-between', gap: 0}}>
        <div style={{flex: 1, minWidth: 420, textAlign: 'left', paddingLeft: 24}}>
          <div style={{marginBottom: 32}}>
            <div style={{display: 'flex', alignItems: 'center', marginBottom: 24}}>
              <img src="https://www.17track.net/assets/images/logo/logo_17track_2.svg" alt="17TRACK" style={{width: 64, height: 64, borderRadius: 16, background: '#1763ff', padding: 8}} />
            </div>
            <div style={{fontSize: 48, fontWeight: 800, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 18}}>
              Tracking App
              <span style={{background: '#ff9900', color: '#fff', fontWeight: 700, fontSize: 22, borderRadius: 16, padding: '4px 18px', marginLeft: 8}}>Free</span>
            </div>
            <div style={{fontSize: 22, color: '#222', marginBottom: 32, maxWidth: 600}}>
              A free App with 15 million users. We help auto-track your packages, ensuring you receive real-time delivery updates so you never miss an important shipment.
            </div>
            <div style={{display: 'flex', gap: 18, marginTop: 24}}>
              <a href="#" target="_blank" rel="noopener noreferrer"><img src="https://www.17track.net/assets/images/appdown/appstore_en.svg" alt="App Store" style={{height: 48}} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><img src="https://www.17track.net/assets/images/appdown/googleplay_en.svg" alt="Google Play" style={{height: 48}} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><img src="https://www.17track.net/assets/images/appdown/apk_en.svg" alt="Android PKG" style={{height: 48}} /></a>
            </div>
          </div>
        </div>
        <div style={{flex: 1.2, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <img src="https://www.17track.net/assets/images/appdown/illustration.webp" alt="Tracking App" style={{width: 700, maxWidth: '100%', borderRadius: 32, boxShadow: '0 8px 32px rgba(0,0,0,0.10)'}} />
        </div>
      </div>
    </section>
  );
} 