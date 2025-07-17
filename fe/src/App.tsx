import Content from "./components/Content"
import Header from "./components/Header"

function App() {
  

  return (
    <>
      <div className="min-h-screen bg-blue-300">
        <Header/>
        <div className="bg-amber-400 min-h-screen flex items-center justify-evenly gap-20 flex-wrap">
          <Content/>
          <Content/>
          <Content/>
          <Content/>
        </div>
      </div>
       
    </>
  )
}

export default App
