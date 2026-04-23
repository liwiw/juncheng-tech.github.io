# 郡城智能科技官网 - 部署指南

## 当前状态

✅ **已完成**:
- [x] GitHub 登录状态检查（账号：liwiw）
- [x] Git 配置（用户名、邮箱）
- [x] 网站文件创建（index.html, README.md, CNAME）
- [x] 本地 Git 仓库初始化
- [x] 文件提交

⚠️ **需要手动完成**:
- [ ] 创建 GitHub 仓库
- [ ] 推送到 GitHub
- [ ] 启用 GitHub Pages
- [ ] 配置自定义域名
- [ ] 启用 HTTPS

---

## 步骤 1: 更新 GitHub Token 权限

当前 GitHub token 缺少 `public_repo` 权限，需要更新：

1. 访问 https://github.com/settings/tokens
2. 找到当前使用的 token
3. 编辑 token，勾选 `public_repo` 权限
4. 保存更新

或者重新认证：
```bash
gh auth logout
gh auth login --scopes public_repo
```

---

## 步骤 2: 创建 GitHub 仓库

### 方式 A: 使用 GitHub CLI（推荐）
```bash
cd C:\Users\liweiwei\.openclaw\workspace\juncheng-tech-site
gh repo create juncheng-tech/juncheng-tech.github.io --public --source=. --push
```

### 方式 B: 手动创建
1. 访问 https://github.com/new
2. 仓库名：`juncheng-tech.github.io`
3. 选择组织：`juncheng-tech`（或个人账户 `liwiw`）
4. 设为公开仓库
5. **不要**初始化 README、.gitignore 或 license
6. 点击"Create repository"

然后推送代码：
```bash
git remote add origin https://github.com/juncheng-tech/juncheng-tech.github.io.git
git branch -M main
git push -u origin main
```

---

## 步骤 3: 启用 GitHub Pages

1. 进入仓库 Settings → Pages
2. Source 选择：
   - **Deploy from a branch**
   - Branch: `main` / `root`
3. 点击 Save
4. 等待几分钟，页面将发布到：
   - https://juncheng-tech.github.io/juncheng-tech.github.io/

---

## 步骤 4: 配置自定义域名

### 4.1 GitHub 端配置
1. 仓库已包含 CNAME 文件（内容：juncheng.com）
2. 进入 Settings → Pages → Custom domain
3. 输入 `juncheng.com`
4. 点击 Save
5. 勾选 "Enforce HTTPS"

### 4.2 域名 DNS 配置
登录域名服务商（阿里云/腾讯云等），添加 DNS 记录：

| 类型 | 主机记录 | 记录值 | TTL |
|------|----------|--------|-----|
| A | @ | 185.199.108.153 | 600 |
| A | @ | 185.199.109.153 | 600 |
| A | @ | 185.199.110.153 | 600 |
| A | @ | 185.199.111.153 | 600 |
| CNAME | www | juncheng-tech.github.io | 600 |

GitHub Pages IP 地址：
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### 4.3 等待 DNS 生效
DNS  propagation 通常需要 5-30 分钟，最长 24 小时。

验证：
```bash
ping juncheng.com
# 应显示 GitHub Pages IP
```

---

## 步骤 5: 启用 HTTPS

1. DNS 生效后，GitHub 会自动颁发 Let's Encrypt 证书
2. 进入 Settings → Pages → Custom domain
3. 勾选 "Enforce HTTPS"
4. 可选：勾选 "Enforce HTTPS" 下的 "Redirect http to https"

---

## 验证部署

### 检查 GitHub Pages 状态
```bash
curl -I https://juncheng-tech.github.io/juncheng-tech.github.io/
```

### 检查自定义域名
```bash
curl -I https://juncheng.com
```

### 检查 HTTPS
```bash
curl -I https://juncheng.com
# 应返回 HTTP/2 200
```

---

## 常见问题

### Q: Custom domain 显示 "DNS check failed"
A: DNS 尚未生效，等待几分钟后刷新。可使用 https://dnschecker.org/ 检查全球 DNS 传播状态。

### Q: HTTPS 无法启用
A: 确保 DNS 已正确配置并生效，GitHub 需要验证域名所有权后才能颁发证书。

### Q: 页面显示 404
A: 检查：
1. index.html 是否在仓库根目录
2. GitHub Pages 是否已启用
3. 等待几分钟让 GitHub 构建完成

---

## 后续更新

修改网站后推送更新：
```bash
cd C:\Users\liweiwei\.openclaw\workspace\juncheng-tech-site
git add .
git commit -m "更新说明"
git push
```

GitHub Pages 会自动重新部署，通常 1-2 分钟生效。

---

## 联系支持

如有问题，请联系：
- 📧 contact@juncheng.tech
- 📱 15653883002

---

**创建时间**: 2026-03-29  
**部署状态**: 待完成
