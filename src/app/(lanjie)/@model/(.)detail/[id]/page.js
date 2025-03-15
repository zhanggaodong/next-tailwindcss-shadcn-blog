import PostModalWrapper from '@/components/PostModalWrapper'
import { notFound } from 'next/navigation'
import { posts } from '@/data/posts'

export default async function PostPage(props) {
  const { id } = await props.params
  
  const postId = Number(id)
  const post = posts.find(p => p.id === postId)
  
  if (!post) {
    notFound()
  }

  return <PostModalWrapper post={post} />
}
