import Content from "../components/Content"
import Header from "../components/Header"

function Home() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 dark:bg-neutral-900 min-h-screen flex flex-col items-center py-10 transition-colors">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl px-4">
          <Content />
          <Content />
          <Content />
          <Content />
        </div>
      </main>
    </>
  )
}

export default Home