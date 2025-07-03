import React from "react";
import { useParams, Link } from "react-router-dom";
import { sampleData } from "../data/sampleData";

function TrackingResult() {
  const { code } = useParams();
  // Lấy dữ liệu từ localStorage nếu có, nếu không thì lấy sampleData
  const stored = JSON.parse(localStorage.getItem("trackingData")) || sampleData;
  const order = stored.find(item => item.code === code);

  if (!order) return (
    <div className="container">
      <h2>Không tìm thấy mã vận đơn!</h2>
      <Link to="/">Quay lại trang chủ</Link>
    </div>
  );

  return (
    <div className="tracking-detail-page" style={{maxWidth: 900, margin: '40px auto', background: '#fff', borderRadius: 18, boxShadow: '0 4px 32px rgba(0,0,0,0.10)', padding: '36px 32px 32px 32px'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 24, marginBottom: 32}}>
        <div style={{flex: 1}}>
          <div style={{fontSize: 32, fontWeight: 800, color: '#1763ff', letterSpacing: 1, marginBottom: 8}}>Tracking Number: <span style={{color: '#ff9900'}}>{order.code}</span></div>
          <div style={{fontSize: 20, fontWeight: 700, color: order.info.status.includes('giao thành công') ? '#009e4f' : '#1763ff', background: '#f6f8fa', display: 'inline-block', borderRadius: 12, padding: '6px 22px', marginBottom: 8}}>
            <i className="fa-solid fa-circle-check" style={{color: order.info.status.includes('giao thành công') ? '#009e4f' : '#1763ff', marginRight: 10}}></i>
            {order.info.status}
          </div>
          <div style={{marginTop: 18, background: '#f6f8fa', borderRadius: 12, padding: '18px 24px', maxWidth: 420, boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}>
            <div style={{fontWeight: 700, fontSize: 17, color: '#222', marginBottom: 8}}>Thông tin kiện hàng</div>
            <div style={{fontSize: 15, color: '#444', marginBottom: 4}}><b>Tên sản phẩm:</b> {order.info.productName}</div>
            <div style={{fontSize: 15, color: '#444', marginBottom: 4}}><b>Mã sản phẩm:</b> {order.info.productCode}</div>
            <div style={{fontSize: 15, color: '#444'}}><b>Giá:</b> {order.info.price?.toLocaleString('vi-VN')} đ</div>
          </div>
        </div>
        <div style={{minWidth: 220, background: '#f6f8fa', borderRadius: 14, padding: 18, boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}>
          <div style={{fontWeight: 700, fontSize: 17, marginBottom: 8, color: '#222'}}>Sender</div>
          <div style={{fontSize: 15, color: '#444', marginBottom: 4}}><b>Name:</b> {order.info.sender}</div>
          <div style={{fontSize: 15, color: '#444', marginBottom: 4}}><b>Receiver:</b> {order.info.receiver}</div>
          <div style={{fontSize: 15, color: '#444'}}><b>Address:</b> {order.info.address}</div>
        </div>
      </div>
      <div style={{marginBottom: 24}}>
        <div style={{fontWeight: 700, fontSize: 22, color: '#1763ff', marginBottom: 18}}>Shipping Timeline</div>
        <div className="tracking-timeline" style={{borderLeft: '3px solid #bfc8d0', marginLeft: 18, paddingLeft: 32, position: 'relative'}}>
          {order.tracking.map((step, idx) => (
            <div key={idx} style={{position: 'relative', marginBottom: 32, minHeight: 48}}>
              <div style={{position: 'absolute', left: -44, top: 0, width: 32, height: 32, background: '#fff', borderRadius: '50%', border: '3px solid #bfc8d0', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2}}>
                <i className="fa-solid fa-truck" style={{color: idx === 0 ? '#ff9900' : '#1763ff', fontSize: 18}}></i>
              </div>
              <div style={{fontWeight: 700, color: idx === order.tracking.length-1 ? '#009e4f' : '#222', fontSize: 17}}>{step.status}</div>
              <div style={{fontSize: 15, color: '#666', margin: '2px 0 0 0'}}>{step.location}</div>
              <div style={{fontSize: 14, color: '#aaa', marginTop: 2}}>{step.time}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{textAlign: 'center', marginTop: 32}}>
        <Link to="/" style={{color: '#1763ff', fontWeight: 700, fontSize: 18, textDecoration: 'underline'}}>Quay lại trang chủ</Link>
      </div>
    </div>
  );
}
export default TrackingResult; 