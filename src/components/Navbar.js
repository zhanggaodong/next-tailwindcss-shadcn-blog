import Link from 'next/link'
import { Button } from './ui/button'
import ThemeToggle from './ThemeToggle'
import Image from 'next/image'
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 border-b bg-background/30 backdrop-blur-3xl z-50">
      <div className="container mx-auto px-2 sm:px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-base sm:text-xl font-bold whitespace-nowrap flex items-center">
          <Image src="/logo.png" alt="logo" width={40} height={40} className="inline-block mr-2" /> 
        </Link>
        <div className="flex items-center space-x-1 sm:space-x-4">
          <Button variant="ghost" size="sm" className="sm:size-default" asChild>
            <Link href="/">首页</Link>
          </Button>
          <Button variant="ghost" size="sm" className="sm:size-default" asChild>
            <Link href="/categories">文章</Link>
          </Button>
          <Button variant="ghost" size="sm" className="sm:size-default" asChild>
            <Link href="/photo">照片</Link>
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
