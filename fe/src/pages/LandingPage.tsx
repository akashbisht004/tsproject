import { useEffect, useState } from "react";
import Register from "../components/Register";
import { SignIn } from "../components/SignIn";
import { useNavigate } from "react-router-dom"; 

export const LandingPage = () => {
    const navigate=useNavigate();
  const [showRegister, setShowRegister] = useState(false);
  const [showSignIn, setShowSignIn]=useState(false);

  useEffect(()=>{
    const token=localStorage.getItem("token");
    if(token && token.length>15){
        navigate("/home")
    } 
  },[])

  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-neutral-900 flex flex-col items-center justify-center transition-colors">
      {showRegister && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
          onClick={() => setShowRegister(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <Register setShowRegister={setShowRegister} />
          </div>
        </div>
      )}
      {showSignIn && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
          onClick={() => setShowSignIn(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <SignIn setShowSignIn={setShowSignIn} />
          </div>
        </div>
      )}

      <div className="text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight select-none">
        second brain
      </div>
      <div className="flex justify-between">
        <button
          className="border border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900 rounded-lg px-8 py-3 text-lg font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-sm m-10"
          onClick={() => {
            setShowRegister(true);
          }}
        >
          Register
        </button>
        <button
          className="border border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900 rounded-lg px-8 py-3 text-lg font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-sm m-10"
          onClick={() => {
            setShowSignIn(true);
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};
