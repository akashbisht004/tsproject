
function Header() {
  return (
    <div className="w-full h-12  bg-blue-400 flex flex-row justify-around p-1">
        <div className="py-2 text-xl hover:text-white transition">
            Brainly
        </div>
        <div className="flex flex-row ">
            <div className="bg-blue-500 rounded-md border-black border-1 hover:bg-blue-300 transition mx-3 py-1">
                <span className="p-4">Create Link</span>
            </div>
            <div className="bg-blue-500 rounded-md border-black border-1 hover:bg-blue-300 transition mx-3 py-1">
                <span className="p-4">Join Link</span>
            </div>
        </div>
    </div>
  )
}

export default Header