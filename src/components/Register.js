import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (username.length < 3 || password.length < 5) {
      setError("Tên đăng nhập >= 3 ký tự, mật khẩu >= 5 ký tự");
      return;
    }
    if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      setError("Email không hợp lệ");
      return;
    }
    if (password !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp");
      return;
    }
    fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          navigate('/login');
        } else {
          setError(data.message || 'Đăng ký thất bại');
        }
      })
      .catch(() => setError('Lỗi kết nối server'));
  };

  return (
    <div className="container" style={{maxWidth: 400, margin: '60px auto', background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: 32}}>
      <h2 style={{textAlign: 'center', marginBottom: 24}}>Đăng ký tài khoản</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Tên đăng nhập" value={username} onChange={e => setUsername(e.target.value)} required style={{width: '100%', marginBottom: 16, padding: 12, borderRadius: 8, border: '1px solid #ccc'}} />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required style={{width: '100%', marginBottom: 16, padding: 12, borderRadius: 8, border: '1px solid #ccc'}} />
        <input type="password" placeholder="Mật khẩu" value={password} onChange={e => setPassword(e.target.value)} required style={{width: '100%', marginBottom: 16, padding: 12, borderRadius: 8, border: '1px solid #ccc'}} />
        <input type="password" placeholder="Xác nhận mật khẩu" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required style={{width: '100%', marginBottom: 16, padding: 12, borderRadius: 8, border: '1px solid #ccc'}} />
        {error && <div style={{color: 'red', marginBottom: 12}}>{error}</div>}
        <button type="submit" style={{width: '100%', background: '#ff9900', color: '#fff', padding: 12, border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 18}}>Đăng ký</button>
      </form>
      <div style={{textAlign: 'center', fontSize: 15, color: '#888', marginTop: 18}}>
        Đã có tài khoản? <Link to="/login" style={{color: '#0023d6', fontWeight: 700}}>Đăng nhập</Link>
      </div>
    </div>
  );
} 