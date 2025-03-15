'use client'

import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card'
import { useIsMobile } from '@/hooks/useIsMobile'
import { categories } from '@/data/posts'

const getCategoryName = (categoryId) => {
  return categories.find(c => c.id === categoryId)?.name || ''
}

export default function ListData({ 
  posts, 
  title,
  className = "",
  containerClassName = "container mx-auto px-2 sm:px-4 py-4 sm:py-8",
  useMobileRouting = false
}) {
  const isMobile = useIsMobile()

  return (
    <div className={containerClassName}>
      {title && <h1 className="text-base sm:text-xl font-bold mb-4 sm:mb-6">{title}</h1>}
      <div className={`grid gap-6 grid-cols-1 md:grid-cols-2 ${className}`}>
        {posts.map(post => (
          <Link 
            key={post.id}
            {...(useMobileRouting && isMobile ? {
              href: `/details/${post.id}`
            } : {
              href: `/detail/${post.id}`,
              scroll: false,
              prefetch: false,
              shallow: true
            })}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-sm bg-secondary px-2 py-1 rounded">
                    {getCategoryName(post.categoryId)}
                  </span>
                </div>
                <CardTitle className="line-clamp-1">{post.title}</CardTitle>
                <CardDescription className="line-clamp-2">{post.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
