import React from "react";

const carriers = [
  { name: "USPS", logo: "https://static.vecteezy.com/system/resources/previews/027/127/447/non_2x/united-states-postal-service-logo-united-states-postal-service-icon-transparent-free-png.png" },
  { name: "Shopee", logo: "https://i.pinimg.com/736x/96/a3/41/96a34154d19d4865708ff80e3ea15c64.jpg" },
  { name: "FedEx", logo: "https://images.seeklogo.com/logo-png/5/2/fedex-logo-png_seeklogo-53457.png" },
  { name: "China Post", logo: "https://icons.veryicon.com/png/o/business/bank-logo/china-post.png" },
  { name: "UPS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/United_Parcel_Service_logo_2014.svg/1200px-United_Parcel_Service_logo_2014.svg.png" },
  { name: "DHL", logo: "https://download.logo.wine/logo/DHL/DHL-Logo.wine.png" },
  { name: "YunExpress", logo: "https://cdn.shopify.com/app-store/listing_images/71b3bde705c5498590f56de7621f87b9/icon/CIjKqIihi4MDEAE=.jpeg" },
  { name: "Royal Mail", logo: "https://logowik.com/content/uploads/images/royal-mail9803.jpg" },
  { name: "Cainiao", logo: "https://images.seeklogo.com/logo-png/31/1/cainiao-logo-png_seeklogo-319054.png" },
  { name: "Poste Italiane", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Logo_Poste_Italiane.svg/2560px-Logo_Poste_Italiane.svg.png" },
  { name: "Yanwen", logo: "https://container-news.com/wp-content/uploads/2024/04/Yanwen.png" },
  { name: "La Poste", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc0wP-ZIU7LboGrDjCpPPYkEoWxdtqnC5svA&s" },
];

export default function CarrierSection() {
  return (
    <section className="carrier-section" data-aos="fade-up">
      <h2>TOP E-COMMERCE CARRIERS</h2>
      <p className="carrier-desc">
        A high-quality carrier helps to complete your tracking information and enhance the shopping experience of your customers.
      </p>
      <div className="carrier-grid">
        {carriers.map(c => (
          <div className="carrier-card" key={c.name}>
            <img src={c.logo} alt={c.name} className="carrier-logo" />
            <div className="carrier-hover-overlay">
              <div className="carrier-name">{c.name}</div>
              <button className="carrier-track-btn">Track</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 