

export default async function AboutPage() {

  return (
    <article className="container mx-auto px-4 py-4 sm:py-8 max-w-4xl">
      <h1 className="text-base sm:text-xl font-bold mb-4 sm:mb-6">关于</h1>
      
      <div className="prose prose-lg prose-gray max-w-none">
        <div className="whitespace-pre-wrap text-sm sm:text-base">
          <p>欢迎访问我的个人博客！</p>
          <p>这里是我的个人博客，记录了我的学习笔记、技术分享和生活感悟。</p>
          <p>你可以在这里找到一些有趣的内容，也可以通过评论与我互动。</p>
          <p>感谢你的访问！</p>
        </div>
      </div>
    </article>
  )
}
