<script lang="ts">
	import Card from './components/Project/Card.svelte';
	import Header from './components/Header.svelte';
	import thayerCover from '$lib/assets/thayer-street/cover.png';
    import thayerMoving from  '$lib/assets/thayer-street/moving.gif'
	import Project from './components/Project/Project.svelte';
</script>

<main>
	<Header>
		<h1>hi, i'm lizzy zhang</h1>
		<p>
			I'm passionate about creating tools that inform and empower the public. Currently, I'm building an interactive site for the 
            <a href="http://www.climatedevlab.brown.edu/">Brown Climate and Development Lab.</a
			>
		</p>
	</Header>
	<Project 
        coverSrc={thayerCover} 
        movingPreviewSrc={thayerMoving}
        alt={''}
        href={"https://projects.browndailyherald.com/2023/03/05/thayer-street-history/"}
    >
        <h3>The Evolution of Thayer Street</h3>
        <p>A description of my project</p>
    </Project>
</main>

<style>
	:global(:root) {
		--blue-base: #dde4ff;
        --blue-medium: #c3cffb;
        --blue-dark: #A9B9FA;
		--indigo-base: #5a249e;
		--indigo-dark: #2d0264;
        --font-monospace: 'Liberation Mono', 'Lucida Console', 'Courier New', Courier, monospace;
		--font-sans-serif: 'Roboto', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		--accent-color-1: #5a249e;
	}

	:global(*) {
		margin: 0;
		box-sizing: border-box;
		line-height: 150%;
	}

	:global(body) {
		background-color: var(--blue-base);
	}

	main {
		max-width: 70rem;
		padding: 2rem 0;
		margin: auto;
	}

    h1, h2 {
        font-family: var(--font-monospace);
        color: var(--indigo-base);
    }

	h1 {
		font-size: 2.25rem;
	}

    h3 {
        font-family: var(--font-sans-serif);
        font-size: 1.5rem;
        color: var(--indigo-dark)
    }

	p {
		font-family: var(--font-sans-serif);
		font-size: 1.25rem;
		color: var(--indigo-dark);
	}

	a {
		color: inherit;
	}
</style>
