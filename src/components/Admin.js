import React, { useState, useEffect } from "react";
import { sampleData } from "../data/sampleData";
import { useNavigate } from "react-router-dom";

function getData() {
  return JSON.parse(localStorage.getItem("trackingData")) || sampleData;
}
function setData(data) {
  localStorage.setItem("trackingData", JSON.stringify(data));
}

export default function Admin() {
  const [orders, setOrders] = useState(getData());
  const [form, setForm] = useState({ code: "", sender: "", receiver: "", address: "", status: "", tracking: "" });
  const [editIdx, setEditIdx] = useState(-1);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isAdmin") !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  // Thêm hoặc cập nhật mã vận đơn
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
        status: form.status
      },
      tracking: trackingArr
    };
    let newOrders = [...orders];
    if (editIdx >= 0) {
      newOrders[editIdx] = newOrder;
    } else {
      newOrders.push(newOrder);
    }
    setOrders(newOrders);
    setData(newOrders);
    setForm({ code: "", sender: "", receiver: "", address: "", status: "", tracking: "" });
    setEditIdx(-1);
  };

  // Xóa mã vận đơn
  const handleDelete = idx => {
    if (window.confirm("Bạn chắc chắn muốn xóa?")) {
      const newOrders = orders.filter((_, i) => i !== idx);
      setOrders(newOrders);
      setData(newOrders);
    }
  };

  // Sửa mã vận đơn
  const handleEdit = idx => {
    const o = orders[idx];
    setForm({
      code: o.code,
      sender: o.info.sender,
      receiver: o.info.receiver,
      address: o.info.address,
      status: o.info.status,
      tracking: o.tracking.map(t => `${t.time} | ${t.location} | ${t.status}`).join("\n")
    });
    setEditIdx(idx);
  };

  return (
    <div className="container">
      <h2>Quản lý mã vận đơn</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <input required placeholder="Mã vận đơn" value={form.code} onChange={e => setForm(f => ({ ...f, code: e.target.value }))} />
        <input required placeholder="Người gửi" value={form.sender} onChange={e => setForm(f => ({ ...f, sender: e.target.value }))} />
        <input required placeholder="Người nhận" value={form.receiver} onChange={e => setForm(f => ({ ...f, receiver: e.target.value }))} />
        <input required placeholder="Địa chỉ" value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))} />
        <input required placeholder="Trạng thái đơn" value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))} />
        <textarea required placeholder="Quá trình vận chuyển (mỗi dòng: thời gian | địa điểm | trạng thái)" value={form.tracking} onChange={e => setForm(f => ({ ...f, tracking: e.target.value }))} rows={4} />
        <button type="submit">{editIdx >= 0 ? "Cập nhật" : "Thêm mới"}</button>
        {editIdx >= 0 && <button type="button" onClick={() => { setForm({ code: "", sender: "", receiver: "", address: "", status: "", tracking: "" }); setEditIdx(-1); }}>Hủy</button>}
      </form>
      <h3>Danh sách mã vận đơn</h3>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Mã</th><th>Người gửi</th><th>Người nhận</th><th>Địa chỉ</th><th>Trạng thái</th><th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o, idx) => (
            <tr key={o.code}>
              <td>{o.code}</td>
              <td>{o.info.sender}</td>
              <td>{o.info.receiver}</td>
              <td>{o.info.address}</td>
              <td>{o.info.status}</td>
              <td>
                <button onClick={() => handleEdit(idx)}>Sửa</button>
                <button onClick={() => handleDelete(idx)} style={{marginLeft: 8}}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{marginTop: 20}}>
        <a href="/">Quay lại trang chủ</a>
        <button style={{marginLeft: 16}} onClick={() => { localStorage.removeItem("isAdmin"); window.location.href = "/login"; }}>Đăng xuất</button>
      </div>
    </div>
  );
} 