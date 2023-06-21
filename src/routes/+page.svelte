<script lang="ts">
	import Card from './components/Project/Card.svelte';
	import Section from './components/Section.svelte';
	import thayerCover from '$lib/assets/thayer-street/cover.png';
    import thayerMoving from  '$lib/assets/thayer-street/moving.gif'
	import pollCover from '$lib/assets/poll/cover.png';
    import pollMoving from  '$lib/assets/poll/moving.gif'

	import Project from './components/Project/Project.svelte';
</script>

<main>
	<Section>
		<h1>lizzy zhang</h1>
		<p>
			Hello! I'm passionate about creating tools that inform and empower the public. Currently, I'm building a site to explore lobbying data at the <a href="http://www.climatedevlab.brown.edu/">Brown Climate and Development Lab</a>.
		</p>
	</Section>

	<Section width="wide">
		<Project 
			coverSrc={thayerCover} 
			movingPreviewSrc={thayerMoving}
			alt={''}
			href={"https://projects.browndailyherald.com/2023/03/05/thayer-street-history/"}
		>
			<h3>The Evolution of Thayer Street</h3>
			<p>A description of my project</p>
		</Project>
		<Project 
			coverSrc={pollCover} 
			movingPreviewSrc={pollMoving}
			alt={''}
			href={"https://projects.browndailyherald.com/2023/03/06/poll/lifestyle/"}
		>
			<h3>Spring Poll Interactive Tool</h3>
			<p>A description of my project</p>
		</Project>
	</Section>
	
	
	
	
</main>

<style>

    h1, h2 {
        color: var(--indigo-base);
    }

	h1 {
		font-family: "Roboto Slab";
		font-size: 2.5rem;
	}

	h2 {
		font-family: var(--font-sans-serif);
		font-size: 1.5rem;
		margin-block-end: 0.5em;
	}

    h3 {
        font-family: var(--font-sans-serif);
        font-size: 1.5rem;
        color: var(--indigo-dark)
    }

	p {
		font-family: var(--font-sans-serif);
		font-size: 1.5rem;
		color: var(--indigo-dark);
	}

	h2#works {
		display: flex;
		justify-content: center;
	}

	a {
		color: inherit;
	}
</style>
