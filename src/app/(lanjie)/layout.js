export default function PingLayout({
  children,
  model,
}) {
  return ( 
    <div className="min-h-screen flex flex-col"> 
      <main className="flex-1">
        {children}
        {model}
      </main> 
      <footer className="py-4 sm:py-6 text-center text-sm text-muted-foreground bg-background border-t">
        <p>骄傲地使用 Next.js + Tailwind CSS + Shadcn/ui 构建 ❤️</p>
      </footer>
    </div>
  );
}
