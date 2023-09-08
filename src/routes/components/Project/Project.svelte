<script lang="ts">
	import Card from "./Card.svelte";
    export let coverSrc: string;
    export let movingPreviewSrc: string;
    export let alt: string;
    export let href: string;
</script>

<div class="project">
    <Card {coverSrc} {alt} {movingPreviewSrc} {href}/>
    <div class="description">
        <slot>

        </slot>
    </div>
</div>

<style>
    .project {
        max-width: 80rem;
        margin: auto;
        display: flex;
        justify-content: start;
        gap: 2rem;
        padding-bottom: 3rem;
    }

    @media only screen and (max-width: 75rem) {
        .project {
            display: block;
            max-width: 100%;
            width: 810px;
            padding-bottom: 2%;
        }
        
        .description {
            padding: 1rem 0.5rem;
            width: 100%;
        }
    }
</style>