<script lang="ts">
    export let coverSrc: string;
    export let linkAriaLabel: string;
    export let videoTitle: string;
    export let movingPreviewSrc: string;
    export let href: string;

    const isTouchDevice = 'ontouchstart' in document.documentElement;
</script>


<div 
    class="card"
>
    <a {href} aria-label={linkAriaLabel}>
            <video 
                on:mouseenter="{(e) => {
                    if (!isTouchDevice) {
                        e.currentTarget.play()
                    }
                }}" 
                on:mouseleave="{(e) => {
                    if (!isTouchDevice) {
                        e.currentTarget.pause(); 
                        e.currentTarget.currentTime = 0 
                    }
                }}"
                title={videoTitle}
                class="media moving" 
                poster="{coverSrc}"
                loop 
                muted 
                playsinline 
                src={movingPreviewSrc}
                preload="auto"
            />
    </a>
</div>


<style>
    .card {
        flex: 0 0 35rem;
        position: relative;
        height: 27.5rem;
        margin: 0;
        padding: 0.75rem;
        background-color: var(--blue-medium);
        border-radius: 10px;
        box-shadow: 10px 10px 0 var(--blue-dark-translucent);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        transition-duration: 300ms;
        transition-timing-function: ease-in-out;
    }

    .card:hover {
        transform: translate(-10px, -10px);
        box-shadow: 20px 20px 0 var(--blue-dark-translucent);
    }

    .media {
        touch-action: none;
        height: 100%;
        width: 100%;
        border-radius: 10px;
        object-fit: cover;
    }

    @media only screen and (max-width: 45rem) {
        .card {
            height: 65vw;
        }
    }

    @media only screen and (max-width: 30rem) {
        .card {
            padding: 0.5rem;
            box-shadow: none;
            background-color: var(--blue-dark);
        }

        .card:hover {
            transform: none;
            box-shadow: none;
        }
    }
</style>