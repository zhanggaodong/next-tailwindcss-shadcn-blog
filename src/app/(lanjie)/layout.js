import Navbar from '@/components/Navbar'

export default function PingLayout({
  children,
  model,
}) {
  return ( 
    <div className="min-h-screen flex flex-col"> 
      <Navbar />
      <main className="flex-1 pt-16">
        {children}
        {model}
      </main> 
      <footer className="py-4 sm:py-6 text-center text-sm text-muted-foreground bg-background border-t">
        <p>使用Claude+Next.js+TailwindCSS+Shadcn/ui构建❤️</p>
      </footer>
    </div>
  );
}
