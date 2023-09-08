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
        width: 70rem;
        max-width: 100%;
        padding: 2rem 0;
		margin: auto;
    }

    section.wide {
        max-width: 95%;
    }

    @media only screen and (max-width: 75rem) {
        section {
            padding: 1rem 2rem;
        }
    }

    @media only screen and (max-width: 30rem) {
        section {
            padding: 0.5rem;
        }
    }
</style>