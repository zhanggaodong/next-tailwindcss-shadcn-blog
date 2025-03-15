import { categories, posts } from '@/data/posts'
import CategoryTabs from '@/components/CategoryTabs'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import Pagination from '@/components/Pagination'
import Link from 'next/link'

const POSTS_PER_PAGE = 6

export default async function CategoriesPage({ searchParams }) {
  // Await the entire searchParams object first
  const params = await searchParams
  const currentPage = Number(params?.page) || 1
  const categoryId = params?.category ? Number(params.category) : null

  const filteredPosts = categoryId
    ? posts.filter(post => post.categoryId === categoryId)
    : posts

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const start = (currentPage - 1) * POSTS_PER_PAGE
  const paginatedPosts = filteredPosts.slice(start, start + POSTS_PER_PAGE)

  // Get category names for display
  const getCategoryName = (categoryId) => {
    return categories.find(c => c.id === categoryId)?.name || ''
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">文章分类</h1>
      
      <CategoryTabs />

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {paginatedPosts.map(post => (
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

      <Pagination totalPages={totalPages} />
    </div>
  )
}
