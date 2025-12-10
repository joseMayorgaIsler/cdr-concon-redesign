/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'cdr-blue': '#0f3460',
                'cdr-red': '#e94560',
                'cdr-light': '#f5f5f5',
            },
        },
    },
    plugins: [],
}
