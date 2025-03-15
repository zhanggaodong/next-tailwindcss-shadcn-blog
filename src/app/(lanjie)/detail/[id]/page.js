const posts = [
  {
    id: 1,
    title: '使用 Next.js 构建现代应用',
    description: '探索 Next.js 13 的新特性和最佳实践',
    date: '2024-03-15',
    content: `# 使用 Next.js 构建现代应用

Next.js 是一个强大的 React 框架，它提供了许多开箱即用的功能，帮助开发者构建现代化的 Web 应用。

## 主要特性

- **App Router**: 基于文件系统的路由
- **服务器组件**: 提升性能和SEO
- **数据获取**: 简化的数据获取方式
- **样式解决方案**: 支持多种样式方案

## 最佳实践

1. 合理使用服务器组件和客户端组件
2. 利用缓存优化性能
3. 采用适当的数据获取策略

> Next.js 的生态系统非常丰富，选择合适的工具和库可以大大提升开发效率。`
  },
  {
    id: 2,
    title: 'Tailwind CSS 实战指南',
    description: '如何使用 Tailwind CSS 构建漂亮的用户界面',
    date: '2024-03-14',
    content: `# Tailwind CSS 实战指南

Tailwind CSS 是一个功能类优先的 CSS 框架，它可以帮助我们快速构建现代化的用户界面。

## 核心概念

- **原子化 CSS**: 每个类只做一件事
- **响应式设计**: 内置的响应式断点
- **暗色模式**: 简单的暗色模式支持
- **可定制性**: 高度可配置的设计系统

## 使用技巧

1. 使用组件抽象重复的样式
2. 利用 @apply 指令组织样式
3. 配置主题实现一致的设计

> 通过 Tailwind CSS，我们可以在不离开 HTML 的情况下构建复杂的用户界面。`
  },
  {
    id: 3,
    title: '前端开发趋势',
    description: '2024年前端开发的主要趋势和技术栈',
    date: '2024-03-13',
    content: `# 2024年前端开发趋势

前端开发领域正在经历快速的变革，新的技术和工具不断涌现。

## 主要趋势

- **AI 辅助开发**: 智能代码补全和生成
- **Web Components**: 组件标准化
- **Edge Computing**: 边缘计算应用
- **性能优化**: 新的优化策略

## 技术栈选择

1. 框架: Next.js, Nuxt, Remix
2. 样式: Tailwind CSS, CSS-in-JS
3. 状态管理: Zustand, Jotai, TanStack Query

> 保持学习和适应新技术的能力比掌握具体某个技术更重要。`
  }
]

export default async function PostDetailPage({ params: { id } }) {
  await Promise.resolve() // 等待 params 解析
  
  const postId = Number(id)
  const post = posts.find(p => p.id === postId)
  
  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-500">{post.date}</div>
        <p className="text-xl text-gray-600 mt-4">{post.description}</p>
      </header>
      
      <div className="prose prose-lg prose-gray max-w-none">
        <div className="whitespace-pre-wrap">{post.content}</div>
      </div>
    </article>
  )
}
