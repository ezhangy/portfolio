<script lang="ts">
    export let coverSrc: string;
    export let alt: string;
    export let movingPreviewSrc: string;
    export let href: string;

    let currSrc: string = coverSrc;

    $: imgClass = currSrc === coverSrc ? "cover" : "moving"
</script>


<div 
    on:mouseenter="{() => currSrc = movingPreviewSrc}" 
    on:mouseleave="{() => currSrc = coverSrc}" class="card"
>
    <a {href}>
        <img class={imgClass} src={currSrc} alt={alt}/>
    </a>
</div>

<style>
    .card {
        max-width: 60rem;
        padding: 0.75rem;
        background-color: var(--blue-medium);
        border-radius: 10px;
        box-shadow: 10px 10px 0 var(--blue-dark);
        transition-property: transform box-shadow;
        transition-duration: 300ms;
        transition-timing-function: ease-in-out;
    }

    img.cover {
        filter: saturate(50%);
    }

    .card:hover {
        transform: translate(-10px, -10px);
        box-shadow: 20px 20px 0 var(--blue-dark);

    }
    .card img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
</style>