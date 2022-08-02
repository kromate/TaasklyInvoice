/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
  ],
  theme: {
   		extend: {
			colors: {
				primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        white: 'var(--white)',
				dark_blue: 'var(--dark_blue)',
				grey: 'var(--grey)',
				light_grey: 'var(--light_grey)',
				purple: 'var(--purple)',
			},
		},
  },
  plugins: [],
}
