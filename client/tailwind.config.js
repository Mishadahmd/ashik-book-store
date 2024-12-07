/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#FFCE1A",
                secondary: "#0D0842",
                blackBG: "#F3F3F3",
                Favorite: "#FF5841",
                // textColorBlackBG: "#FFFFF8",
                // discount: "#6C6C6C",
            },
            fontFamily: {
                primary: ["Montserrat", "sans-serif"],
                secondary: ["Nunito Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
};
