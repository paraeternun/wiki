// @ts-check
import '@fontsource/caudex';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeFlexoki from 'starlight-theme-flexoki';

// https://astro.build/config
export default defineConfig({
	site: 'https://paraeternun.github.io',
	base: 'wiki',
	integrations: [
		starlight({
			components: {
				ThemeProvider: './src/components/ThemeProvider.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
			},
			customCss: [
				'@fontsource/caudex/400.css',
				'@fontsource/caudex/700.css',
				'./src/styles/custom.css'
			],
			defaultLocale: 'root',
			locales: {
			  root: {
				label: 'Portugues (Brasil)',
				lang: 'pt-BR',
			  }
			},
			logo: {
				src: './src/assets/logo.svg',
				replacesTitle: true
			},
			title: 'Paræternün',
			sidebar: [
				{
					label: '1. História',
					autogenerate: { directory: 'history' },
				},
			],
			plugins: [starlightThemeFlexoki({
				accentColor: "red",
			})],
		}),
	],
});
