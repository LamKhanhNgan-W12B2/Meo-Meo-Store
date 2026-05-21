"use client";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Header from "./Header/header";
import Footer from "./Footer/footer";

const bears = [
  { id: 1, name: "Chiikawa Truyền Thống", price: "250.000đ", tag: "Bán Chạy", img: "/hinh/1.jpg" },
  { id: 2, name: "Chiikawa Cuộn Chăn Ngủ", price: "185.000đ", tag: "Mới Về", img: "/hinh/2.jpg" },
  { id: 3, name: "Chiikawa Mini", price: "220.000đ", tag: "Yêu Thích", img: "/hinh/Chiimini.jpg" },
  { id: 4, name: "Chiikawa Thiên Thần Nhỏ", price: "195.000đ", tag: "Giới Hạn", img: "/hinh/4.jpg" },
  { id: 5, name: "Chiikawa Thủy Thủ Blue", price: "240.000đ", tag: "Hot", img: "/hinh/5.jpg" },
  { id: 6, name: "Chiikawa Nón Mầm Cây", price: "350.000đ", tag: "Độc Lạ", img: "/hinh/6.jpg" },
  { id: 7, name: "Hachiware Tai Xanh Hiền Lành", price: "210.000đ", tag: "Bán Chạy", img: "/hinh/7.jpg" },
  { id: 8, name: "Chiikawa Nơ Hồng Xinh", price: "235.000đ", tag: "Mới Về", img: "/hinh/8.jpg" },
  { id: 9, name: "Usagi Rabbit Hood", price: "280.000đ", tag: "Hot", img: "/hinh/9.jpg" },
  { id: 10, name: "Usagi Tai Dài Đáng Yêu", price: "190.000đ", tag: "Yêu Thích", img: "/hinh/10.jpg" },
  { id: 11, name: "Usagi Má Đào Soft", price: "175.000đ", tag: "Ưu Đãi", img: "/hinh/11.jpg" },
  { id: 12, name: "Bộ Ba Túi Ngủ Chiikawa", price: "225.000đ", tag: "Best Seller", img: "/hinh/12.jpg" },
  { id: 13, name: "Usagi Trong Túi Ngủ", price: "165.000đ", tag: "Mới Về", img: "/hinh/13.jpg" },
  { id: 14, name: "Chiikawa Củ Cải", price: "295.000đ", tag: "Premium", img: "/hinh/chiicucai.jpg" },
  { id: 15, name: "Momonga Sóc Bay Chảnh Chẹ", price: "320.000đ", tag: "Giới Hạn", img: "/hinh/momonga.jpg" },
];

export default function Home() {
  return (
    <div className={styles.pageContainer}>

      <Header />

      <main>
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span>Official Chiikawa Boutique 🌸</span>
            <h1>Gói Trọn Sự Đáng Yêu Vào Vòng Tay Bạn</h1>
            <p>
              Những người bạn nhỏ Chiikawa, Hachiware và Usagi từ Nhật Bản đã sẵn sàng để vỗ về tâm hồn bạn sau những ngày mệt mỏi. Chất liệu bông Mochi siêu mịn, đàn hồi tốt.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <button className={styles.submitBtn} style={{ padding: '18px 45px', fontSize: '1.1rem' }}>
                Đưa Bé Về Nhà Ngay 💝
              </button>
              <button className={styles.secondaryBtn}>
                Xem BST Mới
              </button>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.heroCircle}></div>
            <img src="/hinh/chikaca.jpg" alt="Chiikawa Taiyaki Banner" className={styles.floatingImg} />
          </div>
        </section>

        {/* FEATURES */}
        <section className={styles.features}>
          <div className={styles.featureItem}>
            <span style={{ fontSize: '2rem' }}>🚀</span>
            <h3>Giao Hỏa Tốc</h3>
            <p>Nội thành trong 2 giờ</p>
          </div>
          <div className={styles.featureItem}>
            <span style={{ fontSize: '2rem' }}>🎁</span>
            <h3>Full Box & Card</h3>
            <p>Nguyên seal từ Nhật Bản</p>
          </div>
          <div className={styles.featureItem}>
            <span style={{ fontSize: '2rem' }}>☁️</span>
            <h3>Bông Siêu Mềm</h3>
            <p>Chất liệu Mochi cao cấp</p>
          </div>
          <div className={styles.featureItem}>
            <span style={{ fontSize: '2rem' }}>🛡️</span>
            <h3>Chính Hãng 100%</h3>
            <p>Cam kết chất lượng tiệm</p>
          </div>
        </section>

        {/* PRODUCTS GRID */}
        <div className={styles.sectionHeader}>
          <h2>Thế Giới Chiikawa & Những Người Bạn</h2>
          <p style={{ color: '#8e737d' }}>Tìm thấy người bạn đồng hành trung thành của bạn tại đây</p>
        </div>

        <div className={styles.grid}>
          {bears.map((bear) => (
            <div key={bear.id} className={styles.card}>
              <div className={styles.tag}>{bear.tag}</div>
              <div className={styles.imgWrapper}>
                <Link href={`/product/${bear.id}`}>
                  <img src={bear.img} alt={bear.name} loading="lazy" />
                </Link>
              </div>
              <div className={styles.cardInfo}>
                <h3>{bear.name}</h3>
                <div style={{ color: '#FFD166', marginBottom: '10px', fontSize: '1.2rem' }}>★★★★★</div>
                <span className={styles.price}>{bear.price}</span>
                <Link href={`/product/${bear.id}`} className={styles.addBtn} style={{ textDecoration: 'none' }}>
                  Nhận Nuôi Ngay
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* NEWSLETTER */}
        <section className={styles.newsletter}>
          <h2>Gia Nhập Cộng Đồng Mềm Mại</h2>
          <p>Để lại email để nhận thông báo sớm nhất khi có các mẫu Chiikawa giới hạn đáp cánh tại Việt Nam nhé!</p>
          <div className={styles.inputGroup}>
            <input type="email" placeholder="Địa chỉ email của bạn..." />
            <button className={styles.submitBtn}>Đăng Ký</button>
          </div>
        </section>
      </main>

      <Footer />
      
    </div>
  );
}