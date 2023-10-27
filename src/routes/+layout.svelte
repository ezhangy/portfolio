<script lang="ts">
    '../global.css'
</script> 

<slot />

<style>
    :global(h1) {
        color: var(--indigo-base);
    }

    :global(p) {
		font-family: var(--font-sans-serif);
		font-size: 1.125rem;
		color: var(--indigo-dark);
    }

  
</style>