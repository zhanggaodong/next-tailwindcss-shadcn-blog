import { posts } from '@/data/posts'
import CategoryTabs from '@/components/CategoryTabs'
import Pagination from '@/components/Pagination'
import ListData from '@/components/ListData'

const POSTS_PER_PAGE = 6

export default async function CategoriesPage({ searchParams }) {
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

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
      <h1 className="text-base sm:text-xl font-bold mb-4 sm:mb-6">文章分类</h1>
      <CategoryTabs />
      <ListData 
        posts={paginatedPosts}
        containerClassName="mt-6"
        useMobileRouting={true}
      />
      <Pagination totalPages={totalPages} />
    </div>
  )
}
