import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card'

import { posts, categories } from '@/data/posts'

// Show only the latest 6 posts on the homepage
const latestPosts = posts.slice(0, 6)

const getCategoryName = (categoryId) => {
  return categories.find(c => c.id === categoryId)?.name || ''
}

export default function BlogList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">最新文章</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {latestPosts.map(post => (
          <Link key={post.id} href={`/detail/${post.id}`}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-sm bg-secondary px-2 py-1 rounded">
                    {getCategoryName(post.categoryId)}
                  </span>
                </div>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
