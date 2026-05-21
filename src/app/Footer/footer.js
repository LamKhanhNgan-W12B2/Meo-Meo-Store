import React from "react";
import styles from "../page.module.css"; 

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerBrand}>
          <h2 className={styles.logo}>CHIIKAWA SHOP</h2>
          <p>Nơi trao gửi sự ngọt ngào qua những chú gấu bông Mochi mềm mịn nhất.</p>
        </div>
        <div className={styles.footerCol}>
          <h4>Bộ Sưu Tập</h4>
          <a href="#">Mẫu Chiikawa</a>
          <a href="#">Mẫu Hachiware</a>
          <a href="#">Mẫu Usagi</a>
        </div>
        <div className={styles.footerCol}>
          <h4>Dịch Vụ</h4>
          <a href="#">Chăm Sóc Gấu Bông</a>
          <a href="#">Gói Quà Nghệ Thuật</a>
          <a href="#">Đổi Trả Hàng</a>
        </div>
        <div className={styles.footerCol}>
          <h4>Kết Nối</h4>
          <a href="#">TikTok Shop</a>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
        </div>
      </div>
      <div className={styles.copyText}>
        © 2026 CHIIKAWA SHOP. ĐƯỢC TẠO RA BẰNG TÌNH YÊU DÀNH CHO CÁC CHII-CON. 🎀
      </div>
    </footer>
  );
}