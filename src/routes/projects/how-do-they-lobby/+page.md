<script>
    import graphVideo from  '$lib/assets/how-do-they-lobby/graph.mp4'
    import searchVideo from  '$lib/assets/how-do-they-lobby/search.mp4'
    import Video from '../components/Video.svelte';
    import ProjectHeader from '../components/ProjectHeader.svelte';
</script>

<svelte:head>

<title>How Do They Lobby?</title>
<meta name="description" content="Visualizing and searching a novel dataset of lobbying coalitions, interest groups, and bills in state legislatures." />
</svelte:head>

<ProjectHeader
title="How Do They Lobby?"
tools={[
"Svelte",
"SvelteKit",
"Typescript",
"Tailwind CSS",
"Supabase (open-source Firebase alternative)",
"PostgreSQL",
"Pandas (Python)"
]}
/>

_How Do They Lobby?_ is a web portal for searching and visualizing an original dataset of
lobbying records soon to be published by the [Brown Climate and Development
Lab](https://www.climatedevlab.brown.edu/).

This project is exciting because it's the first comprehensive dataset of lobbying activity in state legislatures, providing a way to systematically analyze the behavior of interest groups. We hope the portal will be used by
researchers, policymakers, advocacy groups, and journalists to create more transparency in our government.

## The Data

The dataset consists of four main tables stored in a PostgreSQL server hosted on Supabase:

1. **Interest groups/clients**. The organizations that lobby bills.
   Often companies, unions, and non-profit organizations.
2. **Bills**. The state legislation which interest groups lobby on.
3. **Positions**. A stance taken by an interest group on a given bill.
4. **Lobbying Coalitions**. Coalitions of interest groups generated using stochastic
   block modelling. These coalitions will tend to take similar
   positions on a similar subset of bills.

## Exploring Lobbying Coalitions

<Video 
    alt=""
    src={graphVideo} 
    caption="A prototype of the graph page, showing the state-wide coalition graph
    for Wisconsin."
/>

The developer before me implemented interactive coalition graphs to show the
(dis)agreement between lobbying coalitions in a given state.

I refactored the app to retrieve the graph data from a REST API created
using SvelteKit, rather than from the database directly. I also implemented:

- **The ability to view a coalition graph by issue area.**
  For example, you might want to see the coalition graph for energy bills specificallly.
- **Improved intra-coalition networks.** I refined the interest group networks
  you see when zooming in on a specific coalition. I scaled nodes based on their activity, added text labels and tooltips, and linked nodes to their interest group page.

## Searching Specific Records

<Video 
    alt=""
    src={searchVideo} 
    caption="The interactions between the search page, interest group page, and
    bill page on a site prototype."
/>

I ideated and implemented the site's search functionality. You can search across
the clients (interest groups), bills, and positions table, returning results that
link to detailed pages on a given bill/interest group. Highlights include:

- Implementing **lazy loading**, so components that rely on async data loading render
  progressively as promises are fulfilled.
- Creating a **search endpoint** that supports pagination and faceting in our
  internal REST API, inspired by
  [Typesense's Search API](https://typesense.org/docs/0.24.1/api/search.html).
- Building in **fuzzy searching** on certain columns using `pg_trgm`, PostgreSQL's
  trigram matching module.
- Lots of **SQL query optimization** by building better indices and limiting I/O.

<!-- ## Technologies Used

On the front-end, I used:

- Svelte and SvelteKit
- Tailwind CSS
- TypeORM

On the back-end, I used:

- Supabase (a open-source Firebase alternative), to host a PostgreSQL database
- SvelteKit to create an internal REST API to retriei -->
