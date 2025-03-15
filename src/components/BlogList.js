'use client'

import { posts } from '@/data/posts'
import ListData from './ListData'

// Show only the latest 6 posts on the homepage
const latestPosts = posts.slice(0, 6)

export default function BlogList() {
  return (
    <ListData 
      posts={latestPosts} 
      title="最新文章"
      useMobileRouting={true}
    />
  )
}
