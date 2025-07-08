// app.js
require('dotenv').config(); // โหลดค่าจากไฟล์ .env เข้าสู่ process.env
const express = require('express');
const path = require('path');
const mapRoutes = require('./routes/mapRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// ตั้งค่า View Engine เป็น EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware สำหรับอ่าน request body (ถ้ามีฟอร์ม)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ใช้งาน Routes
app.use('/', mapRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});