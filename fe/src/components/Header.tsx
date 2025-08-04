import { useNavigate } from "react-router-dom";
import React from "react";

type HeaderProps = {
  setAddContent: React.Dispatch<React.SetStateAction<boolean>>;
};

function Header({ setAddContent }: HeaderProps) {
  const navigate = useNavigate();
  return (
    <header className="w-full bg-neutral-900 border-b border-neutral-800 flex items-center justify-between px-8 py-3 shadow-sm">
      <div className="font-bold text-2xl tracking-tight select-none text-white">second brain</div>
      <div className="flex gap-3">
        <button
          className="border border-white text-white rounded-md px-4 py-1 font-medium hover:bg-neutral-800 transition-colors"
          onClick={() => navigate("/content")}
        >
          Create
        </button>
        <button
          className="border border-white text-white rounded-md px-4 py-1 font-medium hover:bg-neutral-800 transition-colors"
          onClick={() => setAddContent(true)}
        >
          Add
        </button>
      </div>
    </header>
  );
}

export default Header;
