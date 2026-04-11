# 郡城智能科技官网 - 多层网站架构设计

## 📊 多层架构设计

### 架构层次

```
┌─────────────────────────────────────────────────┐
│              展示层 (Presentation Layer)         │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐          │
│  │  HTML   │ │  CSS    │ │  JS     │          │
│  │  页面   │ │  样式   │ │  交互   │          │
│  └─────────┘ └─────────┘ └─────────┘          │
├─────────────────────────────────────────────────┤
│              业务层 (Business Layer)            │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐          │
│  │ 产品展示│ │ 案例管理│ │ 留言板  │          │
│  └─────────┘ └─────────┘ └─────────┘          │
├─────────────────────────────────────────────────┤
│              数据层 (Data Layer)                │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐          │
│  │  JSON   │ │ LocalStorage │ 配置文件 │      │
│  └─────────┘ └─────────┘ └─────────┘          │
├─────────────────────────────────────────────────┤
│              部署层 (Deployment Layer)          │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐          │
│  │ 华为云  │ │ GitHub  │ │  CDN    │          │
│  └─────────┘ └─────────┘ └─────────┘          │
└─────────────────────────────────────────────────┘
```

---

## 📁 完整目录结构

```
jchyiming-website/
│
├── index.html                    # 首页
├── products.html                 # 产品中心
├── solutions.html                # 解决方案
├── cases.html                    # 客户案例
├── about.html                    # 关于我们
├── news.html                     # 新闻中心
├── contact.html                  # 联系我们
│
├── css/
│   ├── reset.css                 # 重置样式
│   ├── variables.css             # CSS 变量
│   ├── layout.css                # 布局样式
│   ├── components.css            # 组件样式
│   ├── animations.css            # 动画样式
│   ├── responsive.css            # 响应式
│   └── style.css                 # 主样式 (整合)
│
├── js/
│   ├── utils/
│   │   ├── helpers.js            # 工具函数
│   │   ├── validators.js         # 表单验证
│   │   └── analytics.js          # 统计代码
│   ├── components/
│   │   ├── navigation.js         # 导航组件
│   │   ├── carousel.js           # 轮播组件
│   │   ├── modal.js              # 弹窗组件
│   │   └── forms.js              # 表单处理
│   ├── pages/
│   │   ├── home.js               # 首页逻辑
│   │   ├── products.js           # 产品页逻辑
│   │   └── contact.js            # 联系页逻辑
│   └── main.js                   # 主入口
│
├── images/
│   ├── logo/
│   │   ├── logo.png
│   │   └── logo-dark.png
│   ├── banner/
│   │   ├── hero-bg.jpg
│   │   └── about-banner.jpg
│   ├── products/
│   │   ├── gru-system.png
│   │   ├── website-service.png
│   │   └── data-analysis.png
│   ├── cases/
│   │   ├── case-1.jpg
│   │   └── case-2.jpg
│   ├── team/
│   │   ├── team-photo.jpg
│   │   └── ceo.jpg
│   └── icons/
│       ├── icon-industry.svg
│       ├── icon-website.svg
│       └── icon-ai.svg
│
├── fonts/
│   ├──思源黑体-Bold.woff2
│   └──思源黑体-Regular.woff2
│
├── data/
│   ├── products.json             # 产品数据
│   ├── cases.json                # 案例数据
│   ├── news.json                 # 新闻数据
│   └── config.json               # 站点配置
│
├── docs/
│   ├── ARCHITECTURE.md           # 架构文档
│   ├── DEPLOYMENT.md             # 部署文档
│   └── API.md                    # API 文档
│
├── .gitignore                    # Git 忽略配置
├── README.md                     # 项目说明
└── sitemap.xml                   # 站点地图
```

---

## 🎨 分层设计详解

### Layer 1: 展示层 (Presentation Layer)

#### 1.1 HTML 结构规范
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="郡城智能科技 - 烟台本地 AI 服务商">
    <title>郡城智能科技 - 烟台本地 AI 服务商</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>...</header>
    <main>...</main>
    <footer>...</footer>
    <script src="js/main.js"></script>
</body>
</html>
```

#### 1.2 CSS 变量系统
```css
:root {
    /* 颜色 */
    --primary-color: #1E88E5;
    --secondary-color: #424242;
    --accent-color: #FF6F00;
    --success-color: #43A047;
    --bg-color: #FFFFFF;
    --text-color: #333333;
    
    /* 字体 */
    --font-family: '思源黑体', 'Roboto', sans-serif;
    --font-size-base: 16px;
    
    /* 间距 */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 2rem;
    --spacing-lg: 4rem;
    
    /* 响应式断点 */
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
}
```

---

### Layer 2: 业务层 (Business Layer)

#### 2.1 产品展示模块
```javascript
// js/components/product-showcase.js
class ProductShowcase {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.products = [];
    }
    
    async loadProducts() {
        const response = await fetch('data/products.json');
        this.products = await response.json();
        this.render();
    }
    
    render() {
        this.container.innerHTML = this.products.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <a href="product-detail.html?id=${product.id}">了解详情</a>
            </div>
        `).join('');
    }
}
```

#### 2.2 案例管理模块
```javascript
// js/components/case-manager.js
class CaseManager {
    constructor() {
        this.cases = [];
        this.filter = 'all';
    }
    
    async loadCases() {
        const response = await fetch('data/cases.json');
        this.cases = await response.json();
    }
    
    filterBy(category) {
        this.filter = category;
        this.render();
    }
    
    render() {
        const filtered = this.filter === 'all' 
            ? this.cases 
            : this.cases.filter(c => c.category === this.filter);
        // 渲染逻辑
    }
}
```

---

### Layer 3: 数据层 (Data Layer)

#### 3.1 产品数据结构
```json
// data/products.json
[
    {
        "id": "gru-system",
        "name": "GRU 智能分类系统",
        "category": "ai",
        "description": "基于深度学习的智能文本分类系统",
        "features": ["自动分类", "高准确率", "持续学习"],
        "accuracy": "80%+",
        "image": "images/products/gru-system.png"
    },
    {
        "id": "website-service",
        "name": "企业官网建设",
        "category": "web",
        "description": "专业企业官网设计与开发",
        "features": ["响应式布局", "SEO 优化", "快速加载"],
        "image": "images/products/website-service.png"
    }
]
```

#### 3.2 站点配置
```json
// data/config.json
{
    "site": {
        "name": "郡城智能科技",
        "tagline": "烟台本地 AI 服务商",
        "domain": "jchyiming.com.cn"
    },
    "contact": {
        "phone": "156-5388-3002",
        "email": "contact@jchyiming.com",
        "address": "山东省烟台市 XX 区 XX 路 XX 号"
    },
    "social": {
        "wechat": "images/qr-wechat.png",
        "weibo": "https://weibo.com/jchyiming"
    }
}
```

---

### Layer 4: 部署层 (Deployment Layer)

#### 4.1 华为云部署架构
```
用户请求
    ↓
CDN 加速 (静态资源)
    ↓
华为云 ECS (Nginx)
    ↓
网站文件 (/var/www/jchyiming)
    ↓
SSL 证书 (HTTPS)
```

#### 4.2 Nginx 配置
```nginx
server {
    listen 80;
    listen 443 ssl;
    server_name jchyiming.com.cn www.jchyiming.com.cn;
    
    root /var/www/jchyiming;
    index index.html;
    
    # SSL 配置
    ssl_certificate /etc/ssl/certs/jchyiming.crt;
    ssl_certificate_key /etc/ssl/private/jchyiming.key;
    
    # Gzip 压缩
    gzip on;
    gzip_types text/css application/javascript image/svg+xml;
    
    # 缓存静态资源
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## 🔒 安全与壁垒保护

### Git 上传规范
```bash
# ✅ 允许上传
git add index.html
git add css/
git add js/
git add images/
git add data/products.json  # 产品数据 (非敏感)

# ❌ 禁止上传
git add .env
git add config.json  # 含凭证配置
git add scripts/  # 内部脚本
git add systems/  # OpenClaw 系统
git add memory/  # 记忆数据
```

### .gitignore 完整配置
```gitignore
# 敏感信息
.env
*.credentials
config.local.json

# 内部系统
systems/
agents/
memory/
scripts/deploy-*.ps1

# 依赖
node_modules/

# 构建输出
dist/
build/

# 日志
*.log
logs/
```

---

## 📊 技术评估

### 架构评估
| 维度 | 评分 | 说明 |
|------|------|------|
| 可维护性 | ⭐⭐⭐⭐⭐ | 分层清晰，职责明确 |
| 可扩展性 | ⭐⭐⭐⭐⭐ | 模块化设计，易扩展 |
| 性能 | ⭐⭐⭐⭐ | 静态资源 CDN 加速 |
| 安全性 | ⭐⭐⭐⭐⭐ | .gitignore 保护敏感信息 |
| SEO 友好 | ⭐⭐⭐⭐ | 语义化 HTML |

---

**创建时间**: 2026-03-28 18:52
**状态**: ⏳ 等待论

文信息采集
