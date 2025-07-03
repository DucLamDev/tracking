import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
      .then(async res => {
        const data = await res.json();
        if (res.ok && data.success) {
          localStorage.setItem("isAdmin", "true");
          navigate("/admin");
        } else {
          setError(data.message || 'Sai tài khoản hoặc mật khẩu!');
        }
      })
      .catch(() => setError('Lỗi kết nối server'));
  };

  return (
    <div style={{display: 'flex', minHeight: '100vh', background: '#f6f8fa'}}>
      <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{maxWidth: 420, width: '100%', background: '#fff', borderRadius: 18, boxShadow: '0 4px 32px rgba(0,0,0,0.08)', padding: 40}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24}}>
            <span style={{fontWeight: 900, fontSize: 32, color: '#ff9900'}}>17</span>
            <span style={{fontWeight: 900, fontSize: 32, color: '#1763ff'}}>TRACK</span>
          </div>
          <h2 style={{textAlign: 'center', marginBottom: 32, fontWeight: 800, fontSize: 28}}>Welcome back!</h2>
          <form onSubmit={handleSubmit}>
            <div style={{marginBottom: 18}}>
              <input type="text" placeholder="Email or Username" value={username} onChange={e => setUsername(e.target.value)} required style={{width: '100%', marginBottom: 16, padding: 14, borderRadius: 8, border: '1.5px solid #dbe2ef', fontSize: 17}} />
              <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required style={{width: '100%', marginBottom: 8, padding: 14, borderRadius: 8, border: '1.5px solid #dbe2ef', fontSize: 17}} />
              <div style={{textAlign: 'right', fontSize: 14}}><a href="#" style={{color: '#0023d6', textDecoration: 'underline'}}>Forgot Password</a></div>
            </div>
            {error && <div style={{color: 'red', marginBottom: 12, textAlign: 'center'}}>{error}</div>}
            <button type="submit" style={{width: '100%', background: '#0023d6', color: '#fff', padding: 14, border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 20, marginTop: 8, marginBottom: 18, cursor: 'pointer'}}>Login</button>
          </form>
          <div style={{textAlign: 'center', fontSize: 15, color: '#888', marginTop: 18}}>
            No account? <Link to="/register" style={{color: '#0023d6', fontWeight: 700}}>Register an account</Link>
          </div>
          <div style={{textAlign: 'center', fontSize: 15, color: '#888', marginTop: 12}}>
            <Link to="/" style={{color: '#1763ff', fontWeight: 700}}>Quay lại trang chủ</Link>
          </div>
        </div>
        <div style={{marginTop: 32, color: '#888', fontSize: 14, textAlign: 'center'}}>
          About us | Contact us | Terms | Copyright | Privacy | Help
        </div>
      </div>
      <div style={{flex: 1, background: 'linear-gradient(120deg, #0a33b6 60%, #1763ff 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img src="https://www.17track.net/assets/images/track_page/part3_01.webp" alt="login-visual" style={{width: 420, borderRadius: 32, boxShadow: '0 8px 32px rgba(0,0,0,0.10)'}} />
      </div>
    </div>
  );
} 