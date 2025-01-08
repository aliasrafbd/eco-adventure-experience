/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('./assets/bg-02.jpg')",
        updateProfile: "url('./assets/bg-03.jpg')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

