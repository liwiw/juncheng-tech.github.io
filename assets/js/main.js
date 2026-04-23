/**
 * 郡城智能科技官网 - 主脚本
 */

// 页面加载完成
document.addEventListener('DOMContentLoaded', function() {
  console.log('郡城智能科技官网已加载');
  
  // 导航栏滚动效果
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(10, 14, 39, 0.98)';
    } else {
      navbar.style.background = 'rgba(10, 14, 39, 0.95)';
    }
  });
  
  // 卡片动画
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});

// ========== 优化窗口：客户案例轮播（待客户签约后启用） ==========
function initTestimonialSlider() {
  // 后期添加轮播逻辑
  console.log('[待开发] 客户案例轮播初始化');
}

// 优化窗口：数据动态展示
function initStatsAnimation() {
  // 后期添加数字动画
  console.log('[待开发] 数据展示动画初始化');
}

// 优化窗口：合作伙伴 Logo 墙
function initPartnerLogoWall() {
  // 后期添加 Logo 墙逻辑
  console.log('[待开发] 合作伙伴 Logo 墙初始化');
}
/* ========== 优化窗口结束 ========== */
