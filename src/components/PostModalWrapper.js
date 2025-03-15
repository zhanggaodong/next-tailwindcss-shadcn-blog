'use client'

import { useRouter } from 'next/navigation'
import PostModal from './PostModal'

export default function PostModalWrapper({ post }) {
  const router = useRouter()

  return (
    <PostModal 
      post={post} 
      isOpen={true} 
      onClose={() => router.back()} 
    />
  )
} 