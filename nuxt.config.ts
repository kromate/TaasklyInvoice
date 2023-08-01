import { fileURLToPath, URL } from 'node:url'
import eslintPlugin from 'vite-plugin-eslint'

export default {
	ssr: false,
	target: 'static',
	app: {
		head: {
			title: 'Taaskly Invoice Generator',
			desc: 'Taaskly Invoice Generator',
			htmlAttrs: { lang: 'en' },
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ name: 'format-detection', content: 'telephone=no' },
				{
					name: 'title',
					content: 'Taaskly Invoice Generator'
				},
				{
					name: 'description',
					content: 'Taaskly Invoice Generator'
				}
			],
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }]
		}
	},

	alias: {
		'@': './src'
	},
	gtag: {
		id: 'G-J8SETHT531'
	},
	css: ['/src/assets/css/main.css'],
	components: [
		'@/components',
		{ path: '@/components/core', extensions: ['vue'] }
	],
	modules: ['@nuxtjs/tailwindcss', 'nuxt-gtag', '@sidebase/nuxt-pdf'],

	build: {
		postcss: {
			postcssOptions: require('./postcss.config.js')
		}
	},
	dir: {
		layouts: './src/layouts',
		pages: './src/pages',
		middleware: './src/middleware'
	},
	tailwindcss: {
		cssPath: '@/assets/css/main.css'
	},
	vite: {
		plugins: [
			eslintPlugin({ useEslintrc: true })
		],
		server: {
			watch: {
				usePolling: true
			}
		},
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url))
			}
		}
	}
}
