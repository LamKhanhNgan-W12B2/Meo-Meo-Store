"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import styles from "./product.module.css";
import Header from "../../Header/header";
import Footer from "../../Footer/footer";

// ĐẦY ĐỦ 15 SẢN PHẨM (Đã thêm mảng images để làm Slider)
const bears = [
  { id: 1, name: "Chiikawa em bé", price: "250.000đ", softness: 95, story: "Bé Chiikawa nhỏ nhắn, hay mít ướt nhưng vô cùng dũng cảm. Mang năng lượng chữa lành tuyệt đối cho những ngày mệt mỏi.", images: ["/hinh/1.jpg", "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1563906267088-b029e7101114?auto=format&fit=crop&w=800&q=80"] },
  { id: 2, name: "Chiikawa Cuộn Chăn Ngủ", price: "185.000đ", softness: 99, story: "Sẵn sàng đưa bạn vào giấc ngủ ngon với chiếc chăn cuộn tròn mềm mại. Thích hợp ôm khi đi ngủ.", images: ["/hinh/2.jpg", "https://images.unsplash.com/photo-1601758177266-bc599de87707?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1590080875515-8c3a8dc5735e?auto=format&fit=crop&w=800&q=80"] },
  { id: 3, name: "Chiikawa Mini", price: "220.000đ", softness: 98, story: "Đôi má ửng hồng vì đang ăn món ngon. Bé sẽ mang lại niềm vui cho bạn mỗi khi nhìn vào.", images: ["/hinh/Chiimini.jpg", "https://images.unsplash.com/photo-1616627981864-3f6c1d5405cb?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1601758064220-76f3a4b1b6d4?auto=format&fit=crop&w=800&q=80"] },
  { id: 4, name: "Chiikawa Thiên Thần Nhỏ", price: "195.000đ", softness: 94, story: "Khoác lên mình đôi cánh thiên thần trắng muốt, hứa hẹn sẽ bảo vệ giấc mơ của bạn.", images: ["/hinh/4.jpg", "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1533234427049-9e9bb093e86b?auto=format&fit=crop&w=800&q=80"] },
  { id: 5, name: "Chiikawa Thủy Thủ Blue", price: "240.000đ", softness: 96, story: "Sẵn sàng ra khơi cùng bộ đồ thủy thủ xanh mát mắt. Một luồng gió mới cho bộ sưu tập của bạn.", images: ["/hinh/5.jpg", "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1570458436416-b8fcccfe883f?auto=format&fit=crop&w=800&q=80"] },
  { id: 6, name: "Chiikawa Nón Mầm Cây", price: "350.000đ", softness: 92, story: "Đội chiếc nón lá mầm siêu cưng, bé sẽ cùng bạn gieo mầm những hy vọng mới.", images: ["/hinh/6.jpg", "https://images.unsplash.com/photo-1608096281339-5510b65e94b0?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1558223945-f09bceeeaf5e?auto=format&fit=crop&w=800&q=80"] },
  { id: 7, name: "Hachiware Tai Xanh Hiền Lành", price: "210.000đ", softness: 95, story: "Người bạn mèo thông minh, biết nói chuyện và luôn quan tâm đến mọi người xung quanh.", images: ["/hinh/7.jpg", "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80"] },
  { id: 8, name: "Chiikawa Nơ Hồng Xinh", price: "235.000đ", softness: 97, story: "Đính kèm chiếc nơ hồng to bản siêu điệu đà, dành riêng cho những tâm hồn hảo ngọt.", images: ["/hinh/8.jpg", "https://images.unsplash.com/photo-1563906267088-b029e7101114?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1601758177266-bc599de87707?auto=format&fit=crop&w=800&q=80"] },
  { id: 9, name: "Usagi Rabbit Hood", price: "280.000đ", softness: 93, story: "Thỏ Usagi năng động, ồn ào nhưng cực kỳ trượng nghĩa. Áo hood tai thỏ nhân đôi sự dễ thương.", images: ["/hinh/9.jpg", "https://images.unsplash.com/photo-1590080875515-8c3a8dc5735e?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1616627981864-3f6c1d5405cb?auto=format&fit=crop&w=800&q=80"] },
  { id: 10, name: "Usagi Tai Dài Đáng Yêu", price: "190.000đ", softness: 96, story: "Bản gốc của chú thỏ vàng Usagi. Chất bông mochi siêu đàn hồi, nhào nặn vô tư không mất form.", images: ["/hinh/10.jpg", "https://images.unsplash.com/photo-1601758064220-76f3a4b1b6d4?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80"] },
  { id: 11, name: "Usagi Má Đào Soft", price: "175.000đ", softness: 98, story: "Đôi má ửng hồng phấn siêu soft. Phiên bản ôm cực sướng nhờ nhồi bông gòn tơi xốp.", images: ["/hinh/11.jpg", "https://images.unsplash.com/photo-1533234427049-9e9bb093e86b?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=800&q=80"] },
  { id: 12, name: "Bộ Ba Túi Ngủ Chiikawa", price: "225.000đ", softness: 95, story: "Bộ ba bạn thân đang say giấc nồng trong túi ngủ dã ngoại. Nhìn là thấy bình yên.", images: ["/hinh/12.jpg", "https://images.unsplash.com/photo-1570458436416-b8fcccfe883f?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1608096281339-5510b65e94b0?auto=format&fit=crop&w=800&q=80"] },
  { id: 13, name: "Usagi Trong Túi Ngủ", price: "165.000đ", softness: 99, story: "Bé thỏ Usagi nằm lọt thỏm trong túi ngủ, chuẩn bị năng lượng cho chuyến quậy phá ngày mai.", images: ["/hinh/13.jpg", "https://images.unsplash.com/photo-1558223945-f09bceeeaf5e?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?auto=format&fit=crop&w=800&q=80"] },
  { id: 14, name: "Chiikawa Củ Cải", price: "295.000đ", softness: 94, story: "Cực độc lạ với bé Chiikawa chui trong chiếc bánh cá Taiyaki nướng giòn rụm (bằng bông).", images: ["/hinh/chiicucai.jpg", "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1563906267088-b029e7101114?auto=format&fit=crop&w=800&q=80"] },
  { id: 15, name: "Momonga Sóc Bay Chảnh Chẹ", price: "320.000đ", softness: 91, story: "Kẻ phản diện đáng yêu nhất hệ mặt trời. Chiếc đuôi siêu to khổng lồ sờ cực đã tay.", images: ["/hinh/momonga.jpg", "https://images.unsplash.com/photo-1601758177266-bc599de87707?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1590080875515-8c3a8dc5735e?auto=format&fit=crop&w=800&q=80"] },
];

export default function ProductDetail() {
  const params = useParams();
  const bearId = Number(params.id);
  
  // Tìm đúng bé gấu, nếu url sai id thì mặc định hiển thị bé số 1
  const bear = bears.find(b => b.id === bearId) || bears[0];

  // Logic Slider
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = () => {
    setCurrentImg((prev) => (prev === bear.images.length - 1 ? 0 : prev + 1));
  };

  const prevImg = () => {
    setCurrentImg((prev) => (prev === 0 ? bear.images.length - 1 : prev - 1));
  };

  return (
    <div className={styles.page}>
      <Header />

      {/* KHU VỰC TÊN SẢN PHẨM Ở TRÊN CÙNG */}
      <section className={styles.productHero}>
        <div className={styles.heroContent}>
          <h2 className={styles.heroEyebrow}>CHIIKAWA PREMIUM SERIES</h2>
          <h1 className={styles.bearName}>{bear.name}</h1>
        </div>
      </section>

      {/* KHU VỰC NỘI DUNG CHIA 2 CỘT */}
      <section className={styles.stickySection}>
        
        {/* CỘT TRÁI: SLIDER */}
        <div className={styles.stickyImageContainer}>
          <div className={styles.sliderWrapper}>
            <button className={styles.sliderBtn} onClick={prevImg}>❮</button>
            
            <div className={styles.imgTrack}>
              {bear.images.map((imgSrc, idx) => (
                <img 
                  key={idx}
                  src={imgSrc} 
                  className={`${styles.slideImg} ${idx === currentImg ? styles.activeImg : ''}`}
                  alt={`${bear.name} view ${idx}`} 
                />
              ))}
            </div>
            
            <button className={`${styles.sliderBtn} ${styles.rightBtn}`} onClick={nextImg}>❯</button>
            
            <div className={styles.dotsContainer}>
              {bear.images.map((_, index) => (
                <span 
                  key={index} 
                  className={`${styles.dot} ${currentImg === index ? styles.activeDot : ''}`}
                  onClick={() => setCurrentImg(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>

        {/* CỘT PHẢI: THÔNG TIN SẢN PHẨM */}
        <div className={styles.scrollingContent}>
          
          <div className={styles.dashboardGrid}>
            <div className={styles.dashItem}>
              <span className={styles.dashValue}>{bear.softness}<small>%</small></span>
              <span className={styles.dashLabel}>ĐỘ MỀM MẠI</span>
            </div>
            <div className={styles.dashItem}>
              <span className={styles.dashValue}>MOCHI</span>
              <span className={styles.dashLabel}>CHẤT LIỆU BÔNG</span>
            </div>
          </div>

          <div className={styles.storyBlock}>
            <h2>PURE HEALING POWER ✨</h2>
            <p className={styles.storyText}>{bear.story}</p>
            <div className={styles.priceContainer}>
              <span>Giá nhận nuôi: </span>
              <strong className={styles.priceHighlight}>{bear.price}</strong>
            </div>
          </div>

          <div className={styles.glassCard}>
            <h3 className={styles.glassTitle}>BÉ ĐANG ĐỢI BẠN ĐÓ!</h3>
            <button className={styles.vipBtn}>RƯỚC BÉ VỀ NHÀ NGAY 💝</button>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}