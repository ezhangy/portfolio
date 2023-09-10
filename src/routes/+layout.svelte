
<script lang="ts">
    import '../global.css'

    export const prerender = true;
</script>
<slot />

<style>

    nav {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
        padding: 2rem 5rem 0;

    }

    nav > a {
        color: var(--indigo-base);
        font-family: "Roboto Slab";
        font-size: 1.25rem;
        font-weight: bold;
        text-decoration: none;
    }

    a.active, a:hover  {
        text-decoration: underline;
    }
</style>