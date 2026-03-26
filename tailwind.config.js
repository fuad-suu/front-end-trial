/** @type {import('tailwindcss').Config} */
export default {
        content: {
                files: [
                    "./index.html",
                    "./src/**/*.{js,ts,jsx,tsx}",
                ],
                safelist: [
                    'text-2xl', 'text-3xl', 'text-4xl', 'text-lg',
                    'text-gray-700','text-gray-600','text-gray-800','text-gray-900','text-white','text-gray-100',
                    'bg-white','bg-indigo-600','bg-gray-50','bg-gray-800','bg-gray-900',
                    'border','border-indigo-600','rounded-full','rounded-lg',
                    'px-4','py-2','p-6','p-8','mx-auto', 'grid-cols-1','md:grid-cols-2','sm:grid-cols-3',
                    'flex','items-center','justify-between','justify-center','hidden','block','min-h-screen'
                ]
        },
    darkMode: 'class',
    theme: {
        extend: {},
    },
        plugins: [],
}
