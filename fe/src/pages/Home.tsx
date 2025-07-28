import { useEffect, useState } from "react"
import Content from "../components/Content"
import Header from "../components/Header"
import {contentLink} from "../config"
import axios from "axios"

function Home() {
  const [content,setContent]=useState<any[]>([]);

  useEffect(()=>{
    axios.get(contentLink)
    .then((response)=>{
      setContent(response.data);
    })
  },[])

  return (
    <>
      <Header />
      <main className="bg-gray-50 dark:bg-neutral-900 min-h-screen flex flex-col items-center py-10 transition-colors">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl px-4">
          { content.map((cont)=>(
            <Content {...cont}/>
          ))}
        </div>
      </main>
    </>
  )
}

export default Home