<script lang="ts">
    export let width: "wide" | "normal" = "normal"
</script>

<section class={width}>
    <slot>
        <h1>title title</h1>
        <p>this is a description of the title title.</p>
    </slot>
</section>

<style>
    section {
        max-width: 70rem;
        padding: 1rem 0;
        padding: 2rem 0;
		margin: auto;
    }

    section.wide {
        max-width: 95%;
    }
</style>