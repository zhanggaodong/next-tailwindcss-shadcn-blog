import Link from 'next/link'
import { Button } from './ui/button'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-2 sm:px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-base sm:text-xl font-bold whitespace-nowrap">
          我的博客
        </Link>
        <div className="flex items-center space-x-1 sm:space-x-4">
          <Button variant="ghost" size="sm" className="sm:size-default" asChild>
            <Link href="/">首页</Link>
          </Button>
          <Button variant="ghost" size="sm" className="sm:size-default" asChild>
            <Link href="/categories">分类</Link>
          </Button>
          <Button variant="ghost" size="sm" className="sm:size-default" asChild>
            <Link href="/about">关于</Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
