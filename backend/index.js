const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const DATA_FILE = './sampleData.json';
const USERS_FILE = './users.json';

app.use(cors());
app.use(bodyParser.json());

// Lấy tất cả đơn hàng
app.get('/orders', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  res.json(data);
});

// Thêm mới đơn hàng
app.post('/orders', (req, res) => {
  const newOrder = req.body;
  const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  data.push(newOrder);
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  res.json({ success: true, order: newOrder });
});

// Đăng ký tài khoản
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) return res.status(400).json({ success: false, message: 'Thiếu thông tin đăng ký' });
  let users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ success: false, message: 'Tên đăng nhập đã tồn tại!' });
  }
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ success: false, message: 'Email đã tồn tại!' });
  }
  users.push({ username, email, password });
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
  res.json({ success: true });
});

// Đăng nhập
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ success: false, message: 'Thiếu username hoặc password' });
  let users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, message: 'Sai tài khoản hoặc mật khẩu!' });
  }
});

app.listen(5000, () => {
  console.log('Backend server running at http://localhost:5000');
}); 