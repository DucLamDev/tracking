import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000/orders";

export default function Admin() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("isAdmin") !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  const [orders, setOrders] = useState([]);
  const [form, setForm] = useState({
    code: "",
    productName: "",
    productCode: "",
    price: "",
    sender: "",
    receiver: "",
    address: "",
    status: "",
    tracking: ""
  });
  const [editIdx, setEditIdx] = useState(-1);

  // Lấy danh sách đơn hàng từ backend
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  // Thêm mới đơn hàng
  const handleSubmit = (e) => {
    e.preventDefault();
    const trackingArr = form.tracking.split("\n").map(line => {
      const [time, location, status] = line.split("|").map(s => s.trim());
      return { time, location, status };
    }).filter(t => t.time && t.location && t.status);
    const newOrder = {
      code: form.code.trim(),
      info: {
        sender: form.sender,
        receiver: form.receiver,
        address: form.address,
        status: form.status,
        productName: form.productName,
        productCode: form.productCode,
        price: Number(form.price)
      },
      tracking: trackingArr
    };
    if (editIdx >= 0) {
      // Chưa hỗ trợ cập nhật qua API, chỉ thêm mới
      alert("Chức năng cập nhật chưa hỗ trợ với backend!");
      return;
    } else {
      fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newOrder)
      })
        .then(res => res.json())
        .then(data => {
          setOrders(prev => [...prev, data.order]);
          setForm({ code: "", productName: "", productCode: "", price: "", sender: "", receiver: "", address: "", status: "", tracking: "" });
          setEditIdx(-1);
        });
    }
  };

  // Xóa mã vận đơn (chỉ xóa trên frontend, muốn xóa backend cần thêm API)
  const handleDelete = idx => {
    if (window.confirm("Bạn chắc chắn muốn xóa?")) {
      const newOrders = orders.filter((_, i) => i !== idx);
      setOrders(newOrders);
      // Có thể thêm API xóa nếu muốn
    }
  };

  // Sửa mã vận đơn (chỉ sửa trên frontend, chưa hỗ trợ cập nhật backend)
  const handleEdit = idx => {
    const o = orders[idx];
    setForm({
      code: o.code,
      productName: o.info.productName,
      productCode: o.info.productCode,
      price: o.info.price,
      sender: o.info.sender,
      receiver: o.info.receiver,
      address: o.info.address,
      status: o.info.status,
      tracking: o.tracking.map(t => `${t.time} | ${t.location} | ${t.status}`).join("\n")
    });
    setEditIdx(idx);
  };

  return (
    <div style={{maxWidth: 900, margin: '40px auto', background: '#fff', borderRadius: 18, boxShadow: '0 4px 32px rgba(0,0,0,0.10)', padding: '36px 32px 32px 32px'}}>
      <h2 style={{fontWeight: 800, fontSize: 32, color: '#1763ff', marginBottom: 24}}>Quản lý mã vận đơn</h2>
      <form onSubmit={handleSubmit} style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32, background: '#f6f8fa', borderRadius: 16, padding: 24}}>
        <input required placeholder="Mã vận đơn" value={form.code} onChange={e => setForm(f => ({ ...f, code: e.target.value }))} style={{padding: 12, borderRadius: 8, border: '1.5px solid #dbe2ef', fontSize: 16}} />
        <input required placeholder="Tên sản phẩm" value={form.productName} onChange={e => setForm(f => ({ ...f, productName: e.target.value }))} style={{padding: 12, borderRadius: 8, border: '1.5px solid #dbe2ef', fontSize: 16}} />
        <input required placeholder="Mã sản phẩm" value={form.productCode} onChange={e => setForm(f => ({ ...f, productCode: e.target.value }))} style={{padding: 12, borderRadius: 8, border: '1.5px solid #dbe2ef', fontSize: 16}} />
        <input required placeholder="Giá sản phẩm" type="number" value={form.price} onChange={e => setForm(f => ({ ...f, price: e.target.value }))} style={{padding: 12, borderRadius: 8, border: '1.5px solid #dbe2ef', fontSize: 16}} />
        <input required placeholder="Người gửi" value={form.sender} onChange={e => setForm(f => ({ ...f, sender: e.target.value }))} style={{padding: 12, borderRadius: 8, border: '1.5px solid #dbe2ef', fontSize: 16}} />
        <input required placeholder="Người nhận" value={form.receiver} onChange={e => setForm(f => ({ ...f, receiver: e.target.value }))} style={{padding: 12, borderRadius: 8, border: '1.5px solid #dbe2ef', fontSize: 16}} />
        <input required placeholder="Địa chỉ" value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))} style={{padding: 12, borderRadius: 8, border: '1.5px solid #dbe2ef', fontSize: 16}} />
        <input required placeholder="Trạng thái đơn" value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))} style={{padding: 12, borderRadius: 8, border: '1.5px solid #dbe2ef', fontSize: 16}} />
        <textarea required placeholder="Quá trình vận chuyển (mỗi dòng: thời gian | địa điểm | trạng thái)" value={form.tracking} onChange={e => setForm(f => ({ ...f, tracking: e.target.value }))} rows={4} style={{gridColumn: '1/3', padding: 12, borderRadius: 8, border: '1.5px solid #dbe2ef', fontSize: 16}} />
        <div style={{gridColumn: '1/3', display: 'flex', gap: 12}}>
          <button type="submit" style={{background: '#1763ff', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 32px', fontWeight: 700, fontSize: 17, cursor: 'pointer'}}>{editIdx >= 0 ? "Cập nhật" : "Thêm mới"}</button>
          {editIdx >= 0 && <button type="button" onClick={() => { setForm({ code: "", productName: "", productCode: "", price: "", sender: "", receiver: "", address: "", status: "", tracking: "" }); setEditIdx(-1); }} style={{background: '#aaa', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 32px', fontWeight: 700, fontSize: 17, cursor: 'pointer'}}>Hủy</button>}
        </div>
      </form>
      <h3 style={{fontWeight: 700, fontSize: 22, color: '#1763ff', marginBottom: 18}}>Danh sách mã vận đơn</h3>
      <table style={{width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}>
        <thead style={{background: '#f6f8fa'}}>
          <tr>
            <th style={{padding: 12, fontWeight: 700, color: '#1763ff'}}>Mã</th>
            <th style={{padding: 12, fontWeight: 700, color: '#1763ff'}}>Tên SP</th>
            <th style={{padding: 12, fontWeight: 700, color: '#1763ff'}}>Mã SP</th>
            <th style={{padding: 12, fontWeight: 700, color: '#1763ff'}}>Giá</th>
            <th style={{padding: 12, fontWeight: 700, color: '#1763ff'}}>Người gửi</th>
            <th style={{padding: 12, fontWeight: 700, color: '#1763ff'}}>Người nhận</th>
            <th style={{padding: 12, fontWeight: 700, color: '#1763ff'}}>Trạng thái</th>
            <th style={{padding: 12, fontWeight: 700, color: '#1763ff'}}>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o, idx) => (
            <tr key={o.code} style={{borderBottom: '1px solid #f0f0f0'}}>
              <td style={{padding: 10}}>{o.code}</td>
              <td style={{padding: 10}}>{o.info.productName}</td>
              <td style={{padding: 10}}>{o.info.productCode}</td>
              <td style={{padding: 10}}>{o.info.price?.toLocaleString('vi-VN')} đ</td>
              <td style={{padding: 10}}>{o.info.sender}</td>
              <td style={{padding: 10}}>{o.info.receiver}</td>
              <td style={{padding: 10}}>{o.info.status}</td>
              <td style={{padding: 10}}>
                <button onClick={() => handleEdit(idx)} style={{background: '#1763ff', color: '#fff', border: 'none', borderRadius: 6, padding: '6px 16px', fontWeight: 600, cursor: 'pointer'}}>Sửa</button>
                <button onClick={() => handleDelete(idx)} style={{background: '#ff4d4f', color: '#fff', border: 'none', borderRadius: 6, padding: '6px 16px', fontWeight: 600, marginLeft: 8, cursor: 'pointer'}}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{marginTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <a href="/" style={{color: '#1763ff', fontWeight: 700, fontSize: 17}}>Quay lại trang chủ</a>
        <button style={{background: '#aaa', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 28px', fontWeight: 700, fontSize: 16, cursor: 'pointer'}} onClick={() => { localStorage.removeItem("isAdmin"); window.location.href = "/login"; }}>Đăng xuất</button>
      </div>
    </div>
  );
} 