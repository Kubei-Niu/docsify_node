const fs = require('fs');
const path = require('path');

// docs 文件夹路径
const docsDir = path.join(__dirname, 'docs');
// 根目录 _sidebar.md
const sidebarPath = path.join(__dirname, '_sidebar.md');

// 读取 docs 目录下所有 Markdown 文件
const files = fs.readdirSync(docsDir)
    .filter(file => file.endsWith('.md'));

// 按文件名生成 sidebar 内容
let sidebarContent = '';
files.forEach(file => {
    // 去掉 .md 后缀作为标题
    const title = file.replace(/\.md$/, '');
    // 链接指向 /docs/ 文件
    const link = `/docs/${file}`;
    sidebarContent += `* [${title}](${link})\n`;
});

// 写入根目录 sidebar.md
fs.writeFileSync(sidebarPath, sidebarContent, 'utf-8');

console.log('✅ _sidebar.md 已生成');
