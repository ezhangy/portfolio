<script lang="ts">
    export let title: string;
    export let tools: string[];
</script>

<h1 id="project-title">{title}</h1>
<p id="project-tools"><b>Tools: </b>{tools.join(", ")}</p>

<style>
    #project-tools {
       margin-block-start: 0;
       font-size: 1.125rem;
       font-style: italic;
    }  

    @media only screen and (max-width: 30rem) {
        #project-tools {
            font-size: 1rem;
        } 
    }
</style>