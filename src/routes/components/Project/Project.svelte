<script lang="ts">
	import Card from "./Card.svelte";
    export let coverSrc: string;
    export let movingPreviewSrc: string;
    export let linkAriaLabel: string;
    export let videoTitle: string
    export let href: string;
</script>

<div class="project">
    <Card {coverSrc} {linkAriaLabel} {videoTitle} {movingPreviewSrc} {href}/>
    <div class="description">
        <slot>

        </slot>
    </div>
</div>

<style>
    .project {
        margin: auto;
        display: block;
        justify-content: start;
        gap: 2rem;
        padding-bottom: 3rem;
    }

    .description {
        padding: 1rem 0 0;
    }

    @media only screen and (max-width: 70rem) {
		.project {
            display: block;
        }
	} 

    /* @media only screen and (max-width: 90rem) {
        .project {
            display: block;
            max-width: 100%;
            padding-bottom: 2rem;
        }
        
        .description {
            padding: 1rem 0.5rem;
            width: 100%;
        }
    } */
</style>