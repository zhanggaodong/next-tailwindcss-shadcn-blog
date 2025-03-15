'use client'

import { Button } from './ui/button'
import { useRouter, useSearchParams } from 'next/navigation'

export default function Pagination({ totalPages }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1

  const handlePageChange = (page) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', page.toString())
    router.push(`/categories?${params.toString()}`, { shallow: true })
  }

  return (
    <div className="flex justify-center gap-1 sm:gap-2 mt-4 sm:mt-8">
      <Button
        variant="outline"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        size="sm"
        className="sm:size-default"
      >
        上一页
      </Button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <Button
          key={page}
          variant={currentPage === page ? "default" : "outline"}
          onClick={() => handlePageChange(page)}
          size="sm"
          className="sm:size-default"
        >
          {page}
        </Button>
      ))}

      <Button
        variant="outline"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        size="sm"
        className="sm:size-default"
      >
        下一页
      </Button>
    </div>
  )
}
