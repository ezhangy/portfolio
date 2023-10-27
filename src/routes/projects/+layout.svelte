<nav>
    <a href="/">← Back to my projects</a>
</nav>
<main>
    <slot />
</main>

<style>
    main :global(*) {
        font-family: var(--font-sans-serif)
    }

    nav {
        max-width: 68rem;
        margin: auto;
        padding: 4rem 1rem 0;
        font-family: var(--font-sans-serif)
    }

    nav a {
        text-decoration: none;
        font-weight: bold;
        font-size: 1.25rem;
    }

    nav a:visited {
        color: var(--indigo-base)
    }

    nav a:hover {
        font-style: italic;
    }

    main {
        margin: auto;
        max-width: 60rem;
        padding: 1rem 5rem 6rem;
        margin: auto;
    }

    main :global(a), main :global(p) {
        font-size: 1.25rem;
    }

    main :global(ul), main :global(ol) {
        font-size: 1.125rem;
    }

    main :global(li) {
        margin-block-start: 0.25em;
    }

    main :global(code) {
        font-family: 'Courier New', Courier, monospace;
    }

    main :global(a) {
       font-size: inherit;
       color: var(--indigo-base);
    }

  

    main :global(p) {
        color: black;
        margin-block-start: 1em;
        margin-block-end: 1em;
    }
    main :global(h1) {
        font-size: 2.75rem;
        color: var(--indigo-medium)
    }

    main :global(h2) {
        font-size: 1.75rem;
        padding-top: 1em;
        color: var(--indigo-dark)
    }

    @media only screen and (max-width: 30rem) {
        nav {
            padding: 2rem 1rem 0;
        }
		main {
            padding: 1rem 1rem 5rem;
        }

        main :global(h1) {
            font-size: 2rem;
        }
    }
</style>