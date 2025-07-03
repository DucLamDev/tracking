import React from "react";

const features = [
  {
    title: "Accurate Tracking",
    desc: "Track packages with 99.9% accuracy: Auto-recognize 80%+ carriers, ensuring accurate tracking numbers, parcel updates, and complete delivery status in real-time.",
    icon: "🔍"
  },
  {
    title: "Multiple Tracking Methods",
    desc: "Track your shipments on 17TRACK's platforms, including the desktop website, mobile device, and WeChat mini-program, making global tracking more accessible.",
    icon: "💻"
  },
  {
    title: "2500+ Carrier Partners",
    desc: "Partner with 2500+ carriers worldwide. If you'd like to become one of our carrier partners, please contact our customer service.",
    icon: "🚚"
  },
  {
    title: "Automatic Solutions",
    desc: "Multiple automatic solutions to help improve efficiency, like carrier auto-recognition, auto-tracking and real-time update notifications, etc.",
    icon: "⚙️"
  },
  {
    title: "7*24 Support",
    desc: "A professional customer service team to help solve your problems promptly and accurately with 7*24 support.",
    icon: "🎧"
  },
  {
    title: "GDPR Compliance",
    desc: "Partnership with e-commerce platforms and carriers to get tracking data accurately in accordance with GDPR regulations, ensuring user privacy and data security.",
    icon: "🔒"
  }
];

export default function FeatureSection() {
  return (
    <section className="feature-section" style={{background: '#0a33b6', color: '#fff', padding: '60px 0', textAlign: 'center'}}>
      <h2 style={{fontSize: 38, fontWeight: 800, color: '#ffe066', marginBottom: 10, letterSpacing: 1}}>
        Improve the efficiency of global package tracking
      </h2>
      <div style={{color: '#e0eaff', marginBottom: 40, fontSize: 18}}>
        Upgrade the shopping experience of customers to help promote global business.
      </div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 36, maxWidth: 1200, margin: '0 auto'}}>
        {features.map(f => (
          <div key={f.title} style={{background: 'rgba(255,255,255,0.07)', borderRadius: 40, boxShadow: '0 8px 32px rgba(0,0,0,0.10)', padding: '38px 32px 32px 32px', minHeight: 320, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', position: 'relative'}}>
            <div style={{fontSize: 56, position: 'absolute', top: -40, left: 32}}>{f.icon}</div>
            <div style={{marginTop: 56, fontWeight: 700, fontSize: 24, color: '#fff', marginBottom: 12, textAlign: 'left'}}>{f.title}</div>
            <div style={{color: '#e0eaff', fontSize: 16, textAlign: 'left'}}>{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 