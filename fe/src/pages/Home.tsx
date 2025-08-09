import { useEffect, useState } from "react"
import Content from "../components/Content"
import Header from "../components/Header"
import {api, CONTENT_ENDPOINT } from "../lib/api"
import { ContentAdd } from "../components/ContentAdd"

function Home() {
  const [content,setContent]=useState<any[]>([]);
  const [addContent,setAddContent]=useState(false);

  useEffect(()=>{
    const getAllContent=async()=>{
      try{
        const res=await api.get(CONTENT_ENDPOINT);
        console.log(res);
        console.log(res.data);
      if(res.status===200) setContent(res.data.data);
      }catch(e){
        console.log(e);
      }
    }
    getAllContent();
  },[])

  return (
    <>
      <Header setAddContent={setAddContent}/>
       {addContent && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
          onClick={() => setAddContent(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <ContentAdd setAddContent={setAddContent}/>
          </div>
        </div>
      )}
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