<script lang="ts">
	import Card from './components/ProjectItem/Card.svelte';
	import thayerCover from '$lib/assets/thayer-street/cover.png';
	import cdlCover from '$lib/assets/how-do-they-lobby/cover.png';
	import cdlMoving from '$lib/assets/how-do-they-lobby/graph.mp4';
    import thayerMoving from  '$lib/assets/thayer-street/moving.mp4'
	import opmCover from '$lib/assets/open-meetings/cover.png';
    import opmMoving from '$lib/assets/open-meetings/app-demo.mp4'
	import pollCover from '$lib/assets/poll/cover.png';
    import pollMoving from  '$lib/assets/poll/moving.mp4'
	import happinessCover from '$lib/assets/happiness/cover.png';
    import happinessMoving from  '$lib/assets/happiness/moving.mp4'

	import ProjectItem from './components/ProjectItem/ProjectItem.svelte';
	import Background from './components/Background.svelte';
</script>

<main>
	<section aria-label="Introduction" id="introduction-section">
		<div id="introduction-wrapper">
			<h1 id="name">lizzy zhang</h1>
			<p id="introduction-paragraph">
				I create tools that inform and empower the public. Currently, I'm building a data portal for state lobbying records at the <a href="http://www.climatedevlab.brown.edu/">Brown Climate and Development Lab</a>.
			</p>
		</div>
	</section>
		
	<section aria-label="Projects" id="works-section">
		<ProjectItem 
			coverSrc={cdlCover} 
			movingPreviewSrc={cdlMoving}
			videoTitle={"'How Do They Lobby?' Demo Video"}
			linkAriaLabel={"'How Do They Lobby?' Project Page"}
			href={"/projects/how-do-they-lobby"}
		>
			<div class="project-heading">
				<h2>How Do They Lobby?</h2>
				<p class="organization-name">Brown Climate and Development Lab</p>
				<p class="project-detail"><b>Tools:</b> Svelte, SvelteKit, Supabase, PostgreSQL</p>
			</div>
			
			<p>
				Visualizing and searching a novel dataset of lobbying coalitions, interest groups, and bills in state legislatures.
			</p>			
		</ProjectItem>
		<ProjectItem 
			coverSrc={opmCover} 
			movingPreviewSrc={opmMoving}
			videoTitle={"'Rhode Island Open Meetings' Demo Video"}
			linkAriaLabel={"'Rhode Island Open Meetings' Project Page"}
			href={"/projects/ri-open-meetings"}
		>
			<div class="project-heading">
				<h2>Rhode Island Open Meetings</h2>
				<p class="organization-name">Final Project for CSCI0320: Introduction to Software Engineering</p>
				<p class="project-detail"><b>Tools:</b> React, React Router, TypeScript, Typesense</p>
			</div>
			
			<p>
				Making public meeting data in Rhode Island more accessible.
			</p>			
		</ProjectItem>
		<ProjectItem 
			coverSrc={thayerCover} 
			movingPreviewSrc={thayerMoving}
			videoTitle={"The Evolution of Thayer Street Demo Video"}
			linkAriaLabel={"The Evolution of Thayer Street"}
			href={"https://projects.browndailyherald.com/2023/03/05/thayer-street-history/"}
		>
			<div class="project-heading">
				<h2>The Evolution of Thayer Street</h2>
				<p class="organization-name">The Brown Daily Herald</p>
				<p class="project-detail"><b>Tools:</b> Svelte, SvelteKit</p>
			</div>
			
			<p>
				Exploring how the storefronts on a busy street in Providence, RI have changed over two decades.
			</p>			
		</ProjectItem>
		<ProjectItem 
			coverSrc={pollCover} 
			movingPreviewSrc={pollMoving}
			videoTitle={"Spring 2023 Poll Demo Video"}
			linkAriaLabel={"Spring 2023 Poll Interactive Tool"}
			href={"https://projects.browndailyherald.com/2023/03/06/poll/lifestyle/"}
		>
			<div class="project-description-wrapper">
				<div class="project-heading">
					<h2>Spring 2023 Poll</h2>
					<p class="organization-name">The Brown Daily Herald</p>
					<p class="project-detail"><b>Tools:</b> Eleventy</p>
				</div>
				<p>
					Analyzing how students responded to The Herald's Spring 2023 Poll across different categories and demographics.
				</p>
			</div>
		</ProjectItem> 
		<ProjectItem 
			coverSrc={happinessCover} 
			movingPreviewSrc={happinessMoving}
			linkAriaLabel={'Where are Students Happiest? Demo Video'}
			videoTitle={'Where are Students Happiest?'}
			href={"https://projects.browndailyherald.com/2022/11/21/where-are-students-happiest/"}
		>
			<div class="project-heading">
				<h2>Where are Students Happiest?</h2>
				<p class="organization-name">The Brown Daily Herald</p>
				<p class="project-detail"><b>Tools:</b> jQuery, HTML/CSS</p>
			</div>
			<p>Learning about where students feel the happiest on and off campus.</p>
		</ProjectItem>
	</section>
</main>

<!-- <Background /> -->

<style>
	main {
		display: grid;
		grid-template-columns: auto 20rem 5% 42.5rem auto;
		padding: 6rem 0 2rem;
	}

	h1 {
		font-family: Futura, sans-serif;
		font-weight: 700;
		letter-spacing: 0.025em;
	}

	h2 {
		font-family: var(--font-sans-serif);
		margin-block-end: 0;

		font-size: 1.45rem;
		color: var(--indigo-medium);
	}

	#name {
		font-size: 3rem;
		width: fit-content;
		margin-block-end: 0;
	}

	#introduction-section {
		grid-column-start: 2;
		padding: 0rem;
	}
	#works-section {
		grid-column-start: 4;
	}

	#introduction-wrapper {
		position: fixed;
		width: 20em;
	}

	.project-heading {
		padding-bottom: 0.5rem;
	}

	.organization-name, .project-detail {
		font-size: 1rem
	}

	.organization-name {
		font-style: italic;
		font-weight: bold;
		font-size: 1rem;
		color: var(--indigo-dark);
	}

	a {
		color: var(--indigo-medium)
	}

	@media only screen and (max-width: 70rem) {
		main {
			display: block;
			max-width: 45rem;
			margin: auto;
			padding: 2rem;
		}

		#introduction-wrapper {
			position: static;
			width: auto;
			padding-bottom: 2.5rem;
		}
	} 

	@media only screen and (max-width: 30rem) {
		main {
			display: grid;
			grid-template-columns: auto;
			grid-template-rows: 13rem auto;
			padding: 1rem;
		}

		#introduction-section {
			grid-template-columns: 1;
			padding: 0;
		}

		#works-section {
			grid-template-columns: 1;
			grid-row-start: 2;
		}

		#introduction-wrapper {
			z-index: 1;
			top: 0;
			left: 0;
			position: fixed;
			padding: 1rem 0 1.5rem;
			background-image: linear-gradient(var(--blue-base) 70%, rgba(221, 228, 255, 0.6) 85%, #dde4ff00 100%)
		}

		#name {
			font-size: 13vw;
			margin: auto;
			text-align: center;
		}

		#introduction-paragraph {
			padding: 0 6.5vw;
			margin: auto;
			padding-bottom: 2rem;
			text-align: center;
		}

		h2 {
			font-size: 1.5rem;
		}

		.project-detail, .organization-name, p {
			font-size: 1rem;
		}
    }
</style>
