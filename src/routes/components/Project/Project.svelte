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
        display: flex;
        gap: 2rem;
    }
</style>