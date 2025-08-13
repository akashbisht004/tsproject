import { useNavigate } from "react-router-dom";


function Content({cont}:{cont:any}) {
  const navigate = useNavigate();
  return (
    <div className="bg-white dark:bg-neutral-800 shadow-md rounded-xl w-72 p-6 flex flex-col gap-4 border border-gray-100 dark:border-neutral-700 hover:shadow-lg transition-shadow cursor-pointer">
      <div className="font-semibold text-lg text-gray-900 dark:text-white mb-2">{cont.title}</div>
      <div className="text-gray-500 dark:text-gray-300 text-sm flex-1">{cont.url}</div>
      <button
        className="mt-2 border border-neutral-800 text-neutral-800 dark:border-white dark:text-white rounded-md px-4 py-1 font-medium hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors self-end"
        onClick={() => { navigate("/content") }}
      >
        View
      </button>
    </div>
  );
}

export default Content