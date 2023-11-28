
<div class="media-section">
    <slot/>
</div>

<style>
    .media-section {
        display: flex;
        gap: 1rem;
    }
    
    .media-section :global(figure) {
        flex: 1 1 10rem;
    }

    .media-section :global(video), .media-section :global(img)  {
       aspect-ratio:  6 / 4;
       object-fit: cover;
    }   

</style>