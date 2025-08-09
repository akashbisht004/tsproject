import { api,REGISTER_ENDPOINT } from "../lib/api";
import { useState } from "react";

type HeaderProps = {
  setShowRegister: React.Dispatch<React.SetStateAction<boolean>>;
};


function Register({ setShowRegister }:HeaderProps) {
    
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault(); 
    try {
      const response = await api.post(REGISTER_ENDPOINT, {
        username,
        password,
        email,
      });
      console.log(response.data);
      setShowRegister(false);
    } catch (err) {
      console.error("Registration failed:", err);
    }
  };

  return (
    <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-2xl w-[90%] max-w-md">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setShowRegister(false)}
          className="text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 text-center dark:text-white mb-6">
        Create Account
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
          type="email"
          placeholder="Email"
          className="p-3 rounded-lg bg-gray-100 dark:bg-neutral-700 text-black dark:text-white"
          onChange={(e) => {
            setEmail(e.target.value);
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
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
