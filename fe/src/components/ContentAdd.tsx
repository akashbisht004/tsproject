import { useState } from "react";
import { api,CONTENT_ENDPOINT } from "../lib/api";

type HeaderProps = {
  setAddContent: React.Dispatch<React.SetStateAction<boolean>>;
};
export const ContentAdd = ({setAddContent}:HeaderProps) => {

   const [title,setTitle]=useState("");
   const [url,setUrl]=useState("");
   const [message,setMessage]=useState("");

   const onSubmitHandler=async(e:React.FormEvent)=>{
    e.preventDefault();
    try{
      const res=await api.post(CONTENT_ENDPOINT,{
        title,url
      });

      if(res.status===200)
      setMessage("Content Added");
    setTimeout(()=>{},5000)
    }catch(e){
      console.log((e as Error).message);
      console.log("Failed to load content");
    }
   }

 return (
    <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-2xl w-[90%] max-w-md">
      {message!="" &&(
        <><p>{message}</p>
        </>
      ) }
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setAddContent(false)}
          className="text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 text-center dark:text-white mb-6">
        Add content
      </h2>

      <form className="flex flex-col gap-4" onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Title"
          className="p-3 rounded-lg bg-gray-100 dark:bg-neutral-700 text-black dark:text-white"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="url"
          className="p-3 rounded-lg bg-gray-100 dark:bg-neutral-700 text-black dark:text-white"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />

        <button
          type="submit"
          className="mt-4 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold py-3 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
        >
          Register
        </button>
      </form>
    </div>
  );
}
