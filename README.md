# 🗺️ โปรเจกต์แผนที่ค้นหาเส้นทาง (Google Maps Directions App)

เว็บแอปพลิเคชันสำหรับค้นหาและแสดงผลเส้นทางบน Google Maps สร้างด้วย Node.js, Express.js และ EJS ซึ่งเป็นส่วนหนึ่งของการเรียนรู้และทดลองใช้งาน Google Maps Platform API

![ภาพหน้าจอของโปรแกรม](https://i.imgur.com/28c062.jpg)
*(แนะนำ: ให้คุณถ่ายภาพหน้าจอของโปรแกรมตอนทำงานเสร็จแล้ว และนำมาใส่แทนที่ลิงก์รูปภาพนี้)*

---

## ✨ คุณสมบัติหลัก (Features)

* **ค้นหาเส้นทาง:** สามารถค้นหาเส้นทางโดยการพิมพ์ชื่อสถานที่, ที่อยู่ หรือค่าพิกัด
* **ปักหมุดบนแผนที่ (Pin on Map):** คลิกบนแผนที่เพื่อกำหนดจุดเริ่มต้นและปลายทางได้
* **แสดงหลายเส้นทาง (Alternative Routes):** แสดงเส้นทางสำรอง (ถ้ามี) พร้อมเปรียบเทียบระยะทางและเวลาเดินทาง
* **คำแนะนำการเดินทาง:** แสดงคำแนะนำการเดินทางแบบ Turn-by-Turn
* **Autocomplete:** ช่วยแนะนำและเติมชื่อสถานที่อัตโนมัติขณะพิมพ์
* **รีเซ็ต:** ปุ่มสำหรับล้างค่าทั้งหมดเพื่อเริ่มต้นการค้นหาใหม่

---

## 🛠️ เทคโนโลยีที่ใช้ (Tech Stack)

* **Backend:** Node.js, Express.js
* **Frontend:** EJS (Embedded JavaScript templates), CSS, JavaScript
* **API:** Google Maps Platform
    * Maps JavaScript API
    * Directions API
    * Places API

---

## 🚀 การติดตั้งและรันโปรเจกต์ (Installation & Usage)

ทำตามขั้นตอนต่อไปนี้เพื่อรันโปรเจกต์บนเครื่องของคุณ

### 1. สิ่งที่ต้องมีก่อน (Prerequisites)

* [Node.js](https://nodejs.org/) (เวอร์ชัน 14 ขึ้นไป)
* **Google Maps API Key** ที่เปิดใช้งาน Services (Maps, Directions, Places) และผูกกับ Billing Account เรียบร้อยแล้ว

### 2. การติดตั้ง (Installation)

1.  **Clone a repository** ของโปรเจกต์นี้
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    ```

2.  **เข้าไปที่โฟลเดอร์โปรเจกต์**
    ```bash
    cd your-repo-name
    ```

3.  **ติดตั้ง Dependencies** ที่จำเป็นทั้งหมด
    ```bash
    npm install
    ```

### 3. การตั้งค่า (Configuration)

1.  สร้างไฟล์ `.env` ที่ Root ของโปรเจกต์ (ที่เดียวกับ `app.js`)
2.  คัดลอกเนื้อหาด้านล่างไปวางในไฟล์ `.env`
    ```env
    # ใส่ Google Maps API Key ของคุณที่นี่
    Maps_API_KEY="YOUR_Maps_API_KEY_HERE"
    ```
3.  เปลี่ยน `"YOUR_Maps_API_KEY_HERE"` ให้เป็น API Key จริงของคุณ

### 4. การรันโปรเจกต์ (Running the Project)

* รันคำสั่งต่อไปนี้ใน Terminal เพื่อเริ่มการทำงานของเซิร์ฟเวอร์
    ```bash
    node app.js
    ```
* เปิดเว็บเบราว์เซอร์แล้วเข้าไปที่ `http://localhost:3000`