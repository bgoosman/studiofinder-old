/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'depth-filter': '0 5px 5px 0px hsl(var(--s))',
      }
    }
  },
  important: true,
  plugins: [require("daisyui")],
  daisyui: {
    logs: false,
  },
};