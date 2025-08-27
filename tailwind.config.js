/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                mona: ["Mona Sans", "Inter", "Poppins", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
                fira: ["Fira Code", "monospace"],
            },
        },
    },
    plugins: [],
};
