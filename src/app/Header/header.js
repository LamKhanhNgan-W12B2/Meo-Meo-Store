import React from "react";
import styles from "../page.module.css"; 

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>CHIIKAWA SHOP 🎀</div>
      <nav className={styles.nav}>
        <a href="http://localhost:3000">Trang Chủ</a>
        <a href="#">Tiệm Gấu Nhỏ</a>
        <a href="#">Góc Sẻ Chia</a>
        <a href="#">Liên Hệ</a>
      </nav>
      <div className={styles.headerActions}>
        <div className={styles.cartIcon}>
          🛒 <span className={styles.badge}>15</span>
        </div>
        <button className={styles.submitBtn} style={{ padding: '10px 25px' }}>
          Thành Viên
        </button>
      </div>
    </header>
  );
}