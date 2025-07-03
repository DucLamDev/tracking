import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (username.length < 3 || password.length < 5) {
      setError("Tên đăng nhập >= 3 ký tự, mật khẩu >= 5 ký tự");
      return;
    }
    // Lưu user vào localStorage (giả lập)
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find(u => u.username === username)) {
      setError("Tên đăng nhập đã tồn tại!");
      return;
    }
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/login");
  };

  return (
    <div className="container" style={{maxWidth: 400, margin: '60px auto', background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: 32}}>
      <h2 style={{textAlign: 'center', marginBottom: 24}}>Đăng ký tài khoản</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Tên đăng nhập" value={username} onChange={e => setUsername(e.target.value)} required style={{width: '100%', marginBottom: 16, padding: 12, borderRadius: 8, border: '1px solid #ccc'}} />
        <input type="password" placeholder="Mật khẩu" value={password} onChange={e => setPassword(e.target.value)} required style={{width: '100%', marginBottom: 16, padding: 12, borderRadius: 8, border: '1px solid #ccc'}} />
        {error && <div style={{color: 'red', marginBottom: 12}}>{error}</div>}
        <button type="submit" style={{width: '100%', background: '#ff9900', color: '#fff', padding: 12, border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 18}}>Đăng ký</button>
      </form>
    </div>
  );
} 