import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

export default {
    preprocess: [
      vitePreprocess(),
      mdsvex({
        extensions: ['.md']
      })
    ],
    kit: {
		  adapter: adapter(),
    }, 
    extensions: ['.svelte', '.md']
};