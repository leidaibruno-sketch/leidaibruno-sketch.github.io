# 个人主页模板

这是一个静态个人主页模板，适合展示 Dailei 的个人经历、项目经验、技能方向和联系方式。整体风格参考高校教师个人主页的信息组织方式，并加入西安电子科技大学校友色彩元素。

## 使用方式

直接在浏览器打开 `index.html` 即可预览。部署到线上时，把 `CNAME.example` 复制为 `CNAME`，再把里面的 `dailei.your-domain.com` 替换成你的真实域名。

## 修改内容

- 在 `index.html` 中替换姓名、简介、教育经历、项目经历、技能和联系方式。
- 在 `index.html` 顶部品牌区域和 `CNAME.example` 中替换真实域名。
- 将 `assets/avatar-placeholder.svg` 替换成你的个人照片，并同步修改 `index.html` 中的图片路径。
- 在 `styles.css` 中调整颜色、字号和布局。

## 文件结构

```text
.
├── index.html
├── styles.css
├── script.js
├── CNAME.example
├── assets/
│   └── avatar-placeholder.svg
└── README.md
```
