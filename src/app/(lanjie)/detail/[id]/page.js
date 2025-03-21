import { posts, categories } from '@/data/posts'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { notFound } from 'next/navigation'

export default async function PostDetailPage({ params }) {
  const { id } = await params
  const postId = Number(id)
  const post = posts.find(p => p.id === postId)
  
  if (!post) {
    notFound()
  }

  const getCategoryName = (categoryId) => {
    return categories.find(c => c.id === categoryId)?.name || ''
  }

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">{post.date}</span>
            <span className="text-sm bg-secondary px-2 py-1 rounded">
              {getCategoryName(post.categoryId)}
            </span>
          </div>
          <CardTitle className="text-2xl mb-6">{post.title}</CardTitle>
          <div className="prose prose-gray max-w-none">
            <div className="whitespace-pre-wrap">
              {post.content || `这是文章 ${post.id} 的详细内容。这里可以放置 Markdown 内容或者其他格式的文章内容。

这是一个示例段落，展示了文章的排版效果。

## 小标题

- 列表项 1
- 列表项 2
- 列表项 3

> 这是一段引用文字，可以用来强调重要的内容。`}
            </div>
          </div>
        </CardHeader>
      </Card>
    </div>
  )
}
