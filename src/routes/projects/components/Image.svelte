<script lang="ts">
    export let src: string;
    export let alt: string;
    export let caption: string = ""
</script>

<figure>
    <img {src} {alt}/>
    {#if caption}
        <figcaption>{caption}</figcaption>
    {/if}
</figure>



<style>
    figure {
        padding: 1rem 0;
        flex-direction: column;
    }
    figcaption {
        font-size: 1.125rem;
        font-style: italic;
        color: var(--indigo-dark)
    }
    img {
        width: 100%;
        background-color: var(--blue-medium);
        padding: 5px;
        border-radius: 10px;
    }

    @media only screen and (max-width: 30rem) {
        figcaption {
            font-size: 1rem;
        } 
    }


</style>
