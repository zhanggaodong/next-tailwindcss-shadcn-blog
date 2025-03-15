'use client'

import { Button } from './ui/button'
import { categories } from '@/data/posts'
import { useRouter, useSearchParams } from 'next/navigation'

export default function CategoryTabs() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get('category')

  const handleCategoryClick = (categoryId) => {
    const params = new URLSearchParams(searchParams)
    if (categoryId) {
      params.set('category', categoryId)
    } else {
      params.delete('category')
    }
    params.set('page', '1') // Reset to first page when changing category
    router.push(`/categories?${params.toString()}`, { shallow: true })
  }

  return (
    <div className="flex gap-2 mb-8 flex-wrap">
      <Button
        variant={!currentCategory ? "default" : "outline"}
        onClick={() => handleCategoryClick(null)}
      >
        全部
      </Button>
      {categories.map(category => (
        <Button
          key={category.id}
          variant={currentCategory === category.id.toString() ? "default" : "outline"}
          onClick={() => handleCategoryClick(category.id)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  )
}
