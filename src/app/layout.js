import { Quicksand } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { Toaster } from "sonner"
import "./globals.css"
import Navbar from '@/components/Navbar'

const inter = Quicksand({
  subsets: ["latin"],
  weight: "400",
});

 

export const metadata = {
  title: '我的博客',
  description: '使用 Next.js 和 shadcn/ui 构建的博客',
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          {modal}
          <Toaster position="top-center" expand={false}  richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
