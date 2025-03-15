'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Button } from './ui/button'
import { Share2 } from 'lucide-react'
import { toast } from 'sonner'

export default function PostModal({ post, isOpen, onClose }) {
  const currentPost = {
    id: post?.id,
    title: post?.title,
    content: post?.content || `这是文章 ${post?.id} 的详细内容。这里可以放置 Markdown 内容或者其他格式的文章内容。

这是一个示例段落，展示了文章的排版效果。

## 小标题

- 列表项 1
- 列表项 2
- 列表项 3这是一个示例段落，展示了文章的排版效果。

## 小标题

- 列表项 1
- 列表项 2
## 小标题

- 列表项 1
- 列表项 2
- 列表项 3
## 小标题

- 列表项 1
- 列表项 2
- 列表项 3
## 小标题

- 列表项 1
- 列表项 2
- 列表项 3
## 小标题

- 列表项 1
- 列表项 2
- 列表项 3
## 小标题

- 列表项 1
- 列表项 2
- 列表项 3
## 小标题

- 列表项 1
- 列表项 2
- 列表项 3
## 小标题

- 列表项 1
- 列表项 2
- 列表项 3
- 列表项 3

> 这是一段引用文字，可以用来强调重要的内容。`,
    date: post?.date
  }

  if (!post) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="h-[calc(100vh-60px)] flex flex-col">
        <DialogHeader className="flex-none">
          <div className="flex justify-between items-start">
            <div>
              <div className='flex mr-10'>
              <DialogTitle className="text-2xl">{currentPost.title}</DialogTitle>
              <Button
                  variant="ghost"
                  size="sm"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(window.location.href);
                      toast.success('复制成功', {
                        duration: 2000,
                        className: 'text-center'
                      });
                    } catch (err) {
                      console.error('复制失败:', err);
                      toast.error('复制失败', {
                        duration: 2000,
                        className: 'text-center'
                      });
                    }
                  }}
                  className="gap-2 ml-5"
                >
                  <Share2 className="w-4 h-4" />
                  
                </Button>
              </div>
              <div className="text-sm text-gray-500 mt-2">{currentPost.date}</div>
            </div>
            
          </div>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto min-h-0">
          <div className="prose prose-gray">
            <div className="whitespace-pre-wrap">{currentPost.content}</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
