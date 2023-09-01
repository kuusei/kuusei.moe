2023 重启的个人 blog, The essence of a blog lies within its code.

## 一个简单的 Blog 项目

2021-2023 Hexo

2023-now Next.js + MDX + SSG

## 技术选型

围绕 React18 和 Next.js 13 以及 headless ui 的选型方向, 尝试一些新的写法.

此外, 除开传统的 web 技术栈, 也会在 web3 / wasm 等方向研究

- React
- Next.js 13 (App Router)
- Radix/shadcn
- Tailwind
- Framer Motion
- Jotai
- Swr
- ...

## Quick Start

```bash
pnpm i
pnpm run dev
```

Open [http://localhost:8001](http://localhost:8001) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Build and Deploy

建议使用 Vercel 直接部署, Vercel 是 next.js 项目贡献者, 提供全自动部署 next.js 能力

```bash
pnpm build
```

本项目暂时已开启 `output: "export"` 选项, 可以使用根目录生成的 out 文件夹在任何 http 服务器上发布, 例如使用

```bash
pnpm start:static
```

## 参考项目

[xiaojun.im](https://github.com/xiaojundebug/xiaojun.im) // 使用了一些组件和项目初始结构

[Shiro](https://github.com/Innei/Shiro) // 模仿了一些 ui 设计和 xlog 上链
