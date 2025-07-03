import React from "react";

const stats = [
  { value: "2500+", label: "Carrier partners" },
  { value: "15 Million+", label: "Registered users" },
  { value: "12 billion+", label: "Shipments tracked", highlight: true },
  { value: "220+", label: "Areas covered" },
  { value: "33+", label: "Languages supported" },
];

export default function StatsSection() {
  return (
    <section className="stats-section" data-aos="fade-up">
      <div className="stats-title">2500+ carriers supported for millions of users</div>
      <div className="stats-desc">As a global all-in-one package tracking platform, 17TRACK is an internationally recognized tracking brand.</div>
      <div className="stats-grid">
        {stats.map(s => (
          <div className={`stats-card${s.highlight ? " highlight" : ""}`} key={s.label}>
            <div className="stats-value">{s.value}</div>
            <div className="stats-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 