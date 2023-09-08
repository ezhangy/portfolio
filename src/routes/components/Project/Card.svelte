<script lang="ts">
    import { fade } from 'svelte/transition';
    export let coverSrc: string;
    export let alt: string;
    export let movingPreviewSrc: string;
    export let href: string;

    let showImage: boolean = true;
</script>


<div 
    on:mouseenter="{() => showImage = false}" 
    on:mouseleave="{() => showImage = true}" 
    class="card"
>
    <a {href}>
        <div class="media-wrapper"  >
            <!-- {#if showImage} 
                <img class="media cover" src={coverSrc} alt={alt}  transition:fade={{ duration: 300 }}/>        
            {/if} -->
            <video 
                on:mouseenter="{(e) => {
                     e.currentTarget.play()
                }}" 
                on:mouseleave="{(e) => {
                    e.currentTarget.pause(); 
                    e.currentTarget.currentTime = 0 
                }}"
                class="media moving" 
                poster="{coverSrc}"
                loop 
                muted 
                playsinline 
                src={movingPreviewSrc}
            />
        </div>

    </a>
</div>


<style>
    .card {
        position: relative;
        height: fit-content;
        width: fit-content;
        max-width: 100%;
        margin: auto;
        padding: 0.75rem;
        background-color: var(--blue-medium);
        border-radius: 10px;
        box-shadow: 10px 10px 0 var(--blue-dark);
        transition-property: transform box-shadow;
        transition-duration: 300ms;
        transition-timing-function: ease-in-out;
    }

    .card:hover {
        transform: translate(-10px, -10px);
        box-shadow: 20px 20px 0 var(--blue-dark);
    }

    .media {
        border-radius: 10px;
        width: 48.5rem;
    }

    @media only screen and (max-width: 75rem) {
        .media {
            max-width: 100%; 
        }
    }
</style>