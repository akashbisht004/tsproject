import { useNavigate } from "react-router-dom"

export const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen w-full bg-gray-50 dark:bg-neutral-900 flex flex-col items-center justify-center transition-colors">
            <div className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight select-none">second brain</div>
            <button
                className="border border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900 rounded-lg px-8 py-3 text-lg font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-sm"
                onClick={() => { navigate("/home") }}
            >
                View Brain
            </button>
        </div>
    );
}
