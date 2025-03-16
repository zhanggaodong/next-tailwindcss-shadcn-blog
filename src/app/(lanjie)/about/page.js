'use client'

import { Card } from "@/components/ui/card"
import Image from "next/image"

const technologies = [
  { name: "React", icon: "📚", description: "用于构建用户界面的JavaScript库" },
  { name: "Next.js", icon: "🚀", description: "React框架，用于生产环境" },
  { name: "Tailwind CSS", icon: "🎨", description: "实用优先的CSS框架" },
  { name: "TypeScript", icon: "💪", description: "JavaScript的超集，添加静态类型" },
  { name: "Node.js", icon: "🛠️", description: "JavaScript运行时环境" },
  { name: "Git", icon: "📝", description: "版本控制系统" }
]

const photos = [
  { url: "https://picsum.photos/seed/christmas1/800/600", alt: "编程" },
  { url: "https://picsum.photos/seed/christmas2/800/600", alt: "技术" },
  { url: "https://picsum.photos/seed/christmas3/800/600", alt: "代码" },
  { url: "https://picsum.photos/seed/christmas4/800/600", alt: "开发" }
]

export default function AboutPage() {
  return (
    <article className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 max-w-4xl space-y-8 sm:space-y-12">
      {/* 个人介绍部分 */}
      <section className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
        <div className="relative w-32 h-32 sm:w-48 sm:h-48 rounded-2xl overflow-hidden">
          <Image
            src="/logo.png"
            alt="头像"
            fill
            className="object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">蓝杰</h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-3 sm:mb-4">Full Stack Developer</p>
          <div className="prose prose-sm sm:prose-base prose-gray max-w-none">
            <p className="text-sm sm:text-base">热爱编程，热爱技术。致力于构建优秀的web应用，追求代码的优雅与高效。</p>
            <p className="text-sm sm:text-base">在这里，我会分享我的技术经验、学习心得和生活感悟。</p>
          </div>
        </div>
      </section>

      {/* 技术栈部分 */}
      <section className="space-y-4 sm:space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold">技术栈</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {technologies.map((tech) => (
            <Card key={tech.name} className="p-3 sm:p-4 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-xl sm:text-2xl">{tech.icon}</span>
                <div>
                  <h3 className="text-sm sm:text-base font-medium">{tech.name}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{tech.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 照片墙部分 */}
      <section className="space-y-4 sm:space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold">照片墙</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src={photo.url}
                alt={photo.alt}
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    </article>
  )
}
