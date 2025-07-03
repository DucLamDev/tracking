import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/main.css";
import CarrierSection from "./CarrierSection";
import AppIntroSection from "./AppIntroSection";
import TrackingAppSection from "./TrackingAppSection";
import ApiSection from "./ApiSection";
import FeatureSection from "./FeatureSection";
import StatsSection from "./StatsSection";
import FooterSection from "./FooterSection";

function Home() {
  const [codes, setCodes] = useState("");
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Chỉ cho phép nhập 1 mã, nếu nhiều mã thì báo lỗi
    const arr = codes.split("\n").map(s => s.trim()).filter(Boolean);
    if (arr.length === 1) {
      navigate(`/tracking/${arr[0]}`);
    } else {
      alert("Chỉ tra cứu 1 mã mỗi lần!");
    }
  };

  return (
    <div className="main-bg">
      {/* Header */}
      <header className="header" style={{background: '#fff', boxShadow: '0 1px 0 #f2f5f7', height: 72, width: '100%'}}>
        <div style={{maxWidth: 1270, margin: '0 auto', padding: '0 50px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <div className="logo" style={{display: 'flex', alignItems: 'center', fontWeight: 700, fontSize: 28, letterSpacing: 1}}>
            <span className="logo-17" style={{color: '#ff9900', fontWeight: 700, fontSize: 28}}>17</span>
            <span className="logo-track" style={{color: '#1763ff', fontWeight: 700, fontSize: 28, marginLeft: 2}}>TRACK</span>
          </div>
          <nav className="menu" style={{display: 'flex', gap: 32, flex: 1, justifyContent: 'center', marginLeft: 40, position: 'relative'}}>
            {['Products', 'Resources', 'Carriers', 'Developers'].map((item, idx) => (
              <div key={item} style={{position: 'relative', display: 'inline-block'}} onMouseEnter={() => setOpenMenu(item)} onMouseLeave={() => setOpenMenu(null)}>
                <a href="#" style={{color: '#222', textDecoration: 'none', fontWeight: 500, fontSize: 16, padding: '8px 0', display: 'inline-block'}}>{item} {['Products','Resources','Carriers'].includes(item) && <span style={{fontSize: 12}}>▼</span>}</a>
                {openMenu === item && ['Products','Resources','Carriers'].includes(item) && (
                  <div style={{position: 'fixed', left: 0, right: 0, top: 72, width: '100vw', zIndex: 1000, background: '#fff', borderRadius: '0 0 24px 24px', boxShadow: '0 12px 32px rgba(0,0,0,0.12)', display: 'flex', justifyContent: 'center', animation: 'dropdownFadeIn 0.3s', overflow: 'visible', minHeight: 340}} onMouseEnter={() => setOpenMenu(item)} onMouseLeave={() => setOpenMenu(null)}>
                    <div style={{width: 1270, display: 'flex', background: 'transparent', borderRadius: '0 0 24px 24px', overflow: 'visible'}}>
                      <div style={{padding: 48, minWidth: 340, borderRight: '1px solid #f0f0f0', display: 'flex', flexDirection: 'column', gap: 32, justifyContent: 'center'}}>
                        {item === 'Products' && <>
                          <div>
                            <div style={{fontWeight: 700, fontSize: 26}}>Shopify App</div>
                            <div style={{color: '#444', fontSize: 17}}>Reduce WISMO & Boost repurchases</div>
                          </div>
                          <div>
                            <div style={{fontWeight: 700, fontSize: 26}}>Tracking API</div>
                            <div style={{color: '#444', fontSize: 17}}>Seamless integration & Stable tracking data from 2500+ carriers</div>
                          </div>
                          <div>
                            <div style={{fontWeight: 700, fontSize: 26}}>17TRACK Mobile App</div>
                            <div style={{color: '#444', fontSize: 17}}>Track packages in your pocket anytime anywhere</div>
                          </div>
                        </>}
                        {item === 'Resources' && <>
                          <div>
                            <div style={{fontWeight: 700, fontSize: 26}}>Tracking Widget</div>
                            <div style={{color: '#444', fontSize: 17}}>Track package in your website</div>
                          </div>
                          <div>
                            <div style={{fontWeight: 700, fontSize: 26}}>Partners</div>
                            <div style={{color: '#444', fontSize: 17}}>Connect with top platforms & brands</div>
                          </div>
                          <div>
                            <div style={{fontWeight: 700, fontSize: 26}}>API Document</div>
                            <div style={{color: '#444', fontSize: 17}}>Comprehensive guides for seamless integration</div>
                          </div>
                          <div>
                            <div style={{fontWeight: 700, fontSize: 26}}>Help center</div>
                            <div style={{color: '#444', fontSize: 17}}>Guide to using our products</div>
                          </div>
                        </>}
                        {item === 'Carriers' && <>
                          <div>
                            <div style={{fontWeight: 700, fontSize: 26}}>Carriers</div>
                            <div style={{color: '#444', fontSize: 17}}>Support 2500+ carriers and 190+ airlines worldwide</div>
                          </div>
                          <div>
                            <div style={{fontWeight: 700, fontSize: 26}}>Carriers Integration</div>
                            <div style={{color: '#444', fontSize: 17}}>Join 17TRACK as a carrier for free</div>
                          </div>
                        </>}
                      </div>
                      <div style={{padding: 48, minWidth: 900, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        {item === 'Products' && <img src="https://www.17track.net/assets/images/nav/shopify_0903.webp" alt="Shopify App" style={{width: 700, height: 300, borderRadius: 32}} />}
                        {item === 'Resources' && <img src="https://www.17track.net/assets/images/nav/tracking_widget_0903.webp" alt="Widget" style={{width: 700, height: 300, borderRadius: 32}} />}
                        {item === 'Carriers' && <img src="https://www.17track.net/assets/images/nav/carriers_1118.webp" alt="Carriers" style={{width: 700, height: 300, borderRadius: 32}} />}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="header-right" style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <a href="#" className="header-link" style={{color: '#222', fontWeight: 600, fontSize: 15, marginRight: 8}}>English</a>
            <Link to="/login" className="header-link" style={{color: '#1763ff', fontWeight: 600, fontSize: 15, marginRight: 8, textDecoration: 'none'}}>Sign in</Link>
            <Link to="/register" style={{textDecoration: 'none'}}>
              <button className="header-btn" style={{background: '#0060df', color: '#fff', borderRadius: 18, fontWeight: 700, fontSize: 18, padding: '12px 36px', marginLeft: 8, border: 'none', boxShadow: '0 2px 8px rgba(0,96,223,0.10)', display: 'flex', alignItems: 'center', gap: 10}}>
                <i className="fa-solid fa-user-plus" style={{fontSize: 20}}></i>
                Sign up For Free
              </button>
            </Link>
            <button className="header-btn green" style={{background: '#009e4f', color: '#fff', borderRadius: 18, fontWeight: 700, fontSize: 18, padding: '12px 32px', marginLeft: 8, border: 'none', boxShadow: '0 2px 8px rgba(0,158,79,0.10)', display: 'flex', alignItems: 'center', gap: 10}}>
              <i className="fa-brands fa-shopify" style={{fontSize: 22}}></i>
              Shopify App
            </button>
          </div>
        </div>
      </header>
      {/* Main content */}
      <div className="center-content" style={{maxWidth: 900, margin: '40px auto 0 auto', textAlign: 'center'}}>
        <h1 style={{fontSize: 44, fontWeight: 800, color: '#0047ab', marginBottom: 8, letterSpacing: 1, textTransform: 'uppercase'}}>ALL-IN-ONE PACKAGE TRACKING</h1>
        <div style={{fontWeight: 700, fontSize: 20, color: '#222', marginBottom: 24}}>Support 2500+ carriers and 190+ airlines worldwide</div>
        <form className="track-form" onSubmit={handleSubmit} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 0}}>
          <div style={{background: '#fff', borderRadius: 16, border: '3px solid #bfc8d0', padding: 0, display: 'flex', alignItems: 'stretch', boxShadow: 'none', width: 650}}>
            <textarea
              className="track-textarea"
              rows={8}
              placeholder={"1. Enter up to 40 tracking numbers, one per line\nSupports airline cargo tracking (e.g. 123-12345678)."}
              value={codes}
              onChange={e => setCodes(e.target.value)}
              style={{width: 605, height: 242, border: 'none', borderRadius: '13px', padding: '0 32px', fontSize: 17, background: '#fff', color: '#222', outline: 'none', boxSizing: 'border-box', fontFamily: 'monospace', resize: 'none'}}
            />
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: 18, gap: 18}}>
            <div className="carrier-box" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#fff', border: '2px solid #bfc8d0', borderRadius: 16, width: 120, height: 120, boxShadow: 'none', fontSize: 15, margin: 0, padding: 0}}>
              <i className="fa-solid fa-truck" style={{fontSize: 24, color: '#222', marginBottom: 8, marginTop: 16}}></i>
              <div style={{fontSize: 15, fontWeight: 700, color: '#222', marginBottom: 2}}>Carrier</div>
              <div style={{color: '#888', fontSize: 12, fontWeight: 400, marginTop: 0}}>(Auto-detect)</div>
            </div>
            <button className="track-btn" type="submit" style={{background: '#ff9900', color: '#fff', border: 'none', borderRadius: 16, width: 120, height: 120, margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6, boxShadow: 'none', transition: 'background 0.2s', textTransform: 'uppercase', letterSpacing: 1, fontSize: 16, fontWeight: 700, padding: 0}}>
              <i className="fa-solid fa-magnifying-glass" style={{fontSize: 24, color: '#fff', marginBottom: 4}}></i>
              TRACK
            </button>
          </div>
        </form>
      </div>
      {/* Các section mới */}
      <CarrierSection />
      <AppIntroSection />
      <ApiSection />
      <TrackingAppSection />
      <FeatureSection />
      <StatsSection />
      <FooterSection />
    </div>
  );
}

export default Home;

<style>{`
@keyframes dropdownFadeIn {
  from { opacity: 0; transform: translateY(-16px); }
  to { opacity: 1; transform: translateY(0); }
}
`}</style> 