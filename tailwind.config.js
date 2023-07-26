/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    './src/components/**/*.{js,vue,ts}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue'
  ],
  theme: {
     container: {
      center: true,
        screens: {
          sm: '700px',
          md: '900px',
          lg: '1024px',
          xl: '1280px'
			}
    },
    extend: {
			colors: {
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
        secondaryLight: 'var(--secondaryLight)',
        light_primary: 'var(  --light_primary)',
        faded_primary: 'var(  --faded_primary)',
				blue: 'var(--blue)',
				red: 'var(--red)',
				grey: 'var(--grey)',
				grey_two: 'var(--grey_two)',
				grey_four: 'var(--grey_four)',
				light: 'var(--light)',
				dark: 'var(--dark)',
				line: 'var(--line)'

      }

		}
  },
  plugins: []
}
