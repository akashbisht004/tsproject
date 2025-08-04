import axios from "axios";
import { useState } from "react";
import { signinLink } from "../config";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
  setShowSignIn: React.Dispatch<React.SetStateAction<boolean>>;
};


export const SignIn = ({setShowSignIn}:HeaderProps) => {
    const navigate=useNavigate();

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    const onSubmitHandler=async (e:React.FormEvent)=>{
        e.preventDefault();
           try {
      const response = await axios.post(signinLink, {
        username,
        password,
      });
      console.log(response.data);
      localStorage.setItem("token",response.data.token)
      setShowSignIn(false);
      navigate("/home")
    } catch (err) {
      console.error("Sigin failed:", err);
    }

    }

  return (
    <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-2xl w-[90%] max-w-md">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setShowSignIn(false)}
          className="text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 text-center dark:text-white mb-6">
        Welcome back
      </h2>

      <form className="flex flex-col gap-4" onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Name"
          className="p-3 rounded-lg bg-gray-100 dark:bg-neutral-700 text-black dark:text-white"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded-lg bg-gray-100 dark:bg-neutral-700 text-black dark:text-white"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button
          type="submit"
          className="mt-4 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold py-3 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
