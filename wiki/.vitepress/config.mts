import { defineConfig } from 'vitepress';

export default defineConfig({
	lastUpdated: true,
	base: '/wiki/',
	title: 'Piano Tiles 2 Wiki',
	description:
		"Welcome to the Piano Tiles 2 Wiki! Here, you'll find information about the game itself, as well as resources for modding.",
	head: [['link', { rel: 'icon', type: 'image/png', href: '/wiki/pianotiles2-logo-mini.png' }]],
	themeConfig: {
		editLink: {
			pattern: 'https://github.com/pianotiles2-community/wiki/edit/main/wiki/:path',
		},

		logo: {
			src: '/pianotiles2-icon-mini.png',
		},

		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Wiki', link: '/creating-your-first-piano-tiles-2-song' },
		],

		sidebar: [
			{
				text: 'Introduction to Modding',
				items: [
					{ text: 'Creating Your First Piano Tiles 2 Song', link: '/creating-your-first-piano-tiles-2-song' },
					{ text: 'Adding Your Level to Piano Tiles 2', link: '/adding-your-level-to-piano-tiles-2' },
				],
			},
			{
				text: 'Popular Topics',
				items: [{ text: 'Song', link: '/song' }],
			},
			{
				text: 'Tools',
				items: [
					{ text: 'json2midi', link: '/json2midi' },
					{ text: 'Apktool', link: '/apktool' },
				],
			},

			{
				text: 'Resource Files',
				items: [
					{ text: 'Overview', link: '/files-overview' },
					{ text: 'Album.csv', link: '/album-csv' },
					{ text: 'language.csv', link: '/language-csv' },
					{ text: 'language_music.csv', link: '/language-music-csv' },
					{ text: 'level.csv', link: '/level-csv' },
					{ text: 'leveling.csv', link: '/leveling-csv' },
					{ text: 'levelreward.csv', link: '/levelreward-csv' },
					{ text: 'life.csv', link: '/life-csv' },
					{ text: 'lv.csv', link: '/lv-csv' },
					{ text: 'music_block.csv', link: '/music-block-csv' },
					{ text: 'music_json.csv', link: '/music-json-csv' },
				],
			},
			{
				text: 'Additional Information',
				items: [
					{ text: 'Understanding APK', link: '/understanding-apk' },
					{ text: 'Understanding CSV', link: '/understanding-csv' },
					{ text: 'Understanding JSON', link: '/understanding-json' },
				],
			},
		],

		socialLinks: [{ icon: 'github', link: 'https://github.com/pianotiles2-community/wiki' }],

		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2024 The Piano Tiles 2 Community.',
		},

		search: {
			provider: 'local',
		},
	},
});
