<script>
    import Video from '../components/Video.svelte';
    import Image from '../components/Image.svelte';
    import MediaSection from '../components/MediaSection.svelte';
    import ProjectHeader from '../components/ProjectHeader.svelte';

    import searchPageBeforeImage from '$lib/assets/open-meetings/search-page-before.png'
    import searchPageAfterImage from '$lib/assets/open-meetings/search-page-after.png'
    import meetingInfoBeforeImage from '$lib/assets/open-meetings/meeting-info-before.png'
    import meetingInfoAfterImage from '$lib/assets/open-meetings/meeting-info-after.png'
    import systemDiagramImage from '$lib/assets/open-meetings/system-diagram.png'
    import appDemoVideo from '$lib/assets/open-meetings/app-demo.mp4'

    const projectTitle = "Rhode Island Open Meetings"
</script>

<svelte:head>

<title>{projectTitle}</title>
<meta name="description" content="This is where the description goes for SEO" />
</svelte:head>

<ProjectHeader
title="{projectTitle}"
tools={["React", "React Router", "TypeScript", "Typesense (Elasticsearch alternative)"]}
/>

For our final group project for CSCI0320: Introduction to Software Engineering,
we built a web application for searching public meetings in Rhode Island.

## Background

Rhode Island's [Open Meetings Act (OMA)](http://webserver.rilegislature.gov//Statutes/TITLE42/42-46/INDEX.htm) requires public bodies to make most meetings open to the public, which
includes posting meeting agendas and minutes online. However, the [current
open meetings portal](https://opengov.sos.ri.gov/openmeetings) has a number
of usability issues.

Our team of four sought to create an improved search portal for searching
and viewing information about RI open meetings, thereby making public data more
accessible and increasing government transparency.

## Concept Definition

Our teammate conducted six interviews with journalists, community
leaders, and watchdogs to learn about issues with the current open
meetings portal and what changes they would like to see in an updated portal.

The interviews produced valuable insight into how various stakeholders
make use of open meetings data, as well as lots of potential features that
could be added to the portal. We identified **two key pain points** which
we believed we could address with our project:

1. Users can't search meetings by keyword
   - **Solution**: Enable full-text search of meeting minutes and agendas
     by scraping PDFs uploaded to the state open meetings portal.
2. Body names are unintuitive, and have to be entered exactly
   as they appear in the portal. Typing in the body field of the current
   portal gives a limited list of autocomplete suggestion, but isn't typo-tolerant.
   - **Solution**: Enable fuzzy searching and facets for public bodies.

We created prototypes of the search and meeting info pages that addressed
these two pain points, while improving the portal's overall navigation
and information hierarchy.

<MediaSection>
<Image 
    src={searchPageBeforeImage} 
    caption="The current search page."
    alt="An image of the current portal's search page, showing an interface
    with inputs for a meeting date range, public body name, and dropdown
    with the label 'Refine Your Search'" 
/>
<Image 
    src={searchPageAfterImage} 
    caption="An initial redesign of the search page."
    alt="An image of the redesigned search page. At the top of the page, 
    there is a search bar labeled 'Meeting or Public Body'. Below the 
    search bar, on the the left side of the page, there is a sidebar with
    with a date range filter and facets for public bodies. To the right 
    of the sidebar, there is a sort dropdown, then below that, example
    search results. Each search result shows the meeting body, date, address, 
    and a snippet of the matched text." 
/>
</MediaSection>

<MediaSection>
<Image 
    src={meetingInfoBeforeImage} 
    caption="The current meeting info display."
    alt='An image of the current portal, with a modal showing meeting information.
    There is a table titled "meeting information" with info such as body name, 
    date, time, etc., and a section titled "Agenda" containing a link titled
    "Agenda filed on Jan 31 2019, 11:25AM by Philip Hervey".'
/>

<Image 
    src={meetingInfoAfterImage} 
    caption="An initial redesign of the meeting info page."
    alt='An image of the redesigned meeting info page. The page heading states
    "Barrington Planning Board | 3/25/2018". Below the heading, there is a section
    containing the meeting time, address, date filed, and contact person. Next, 
    there are "Latest Agenda" and "Latest Minutes" sections containing links 
    titled "View PDF" and plain text versions of the agenda and minutes, respectively'
/>
</MediaSection>

<!---
Improve information hiearchy, offer snippets for search results.
-->

## Technical Design

Next, we wrote a document detailing our project's requirements and specifications.

To define project requirements, we wrote six user stories for developer
and end user stakeholders. We could measure our project's success by how many of
these stories we fulfilled. An example of a user story might be:

- _As a developer,
  I can use your API server to search the Open Meetings dataset by keyword.
  Additionally, I can filter which data I receive by date and public body._

Additionally, we wrote four extra user stories to
represent stretch features, such as scraping new meetings from [RI's RSS feed
for upcoming meetings](https://opengov.sos.ri.gov/RSSFeed/Rss?feedType=1&entityID=0&filter1=&filter2=&Keywords=&FromDate=&ToDate=&RefineSearch=1&PublicBodies=).

We designed the technical specification using the Model-View-Controller
pattern.

- **Model**: Meetings are indexed into a [Typesense](https://typesense.org) server,
  an open-source search engine that enables fast fuzzy searching and search facets.
  Meetings are scraped from the current open meetings portal using a Python script.
- **View**: The search results are displayed in a React app written using
  TypeScript and CSS modules.
- **Controller**: React and React Router control the logic for the
  search inputs/URL parameters on the front-end, sending fetch requests to a Java
  API which then communicates with the Typesense API to run searches on the indexed meetings.

<Image 
    src={systemDiagramImage} 
    caption="A simple system design diagram of our web application. (TSearcher is the Java class which searches meetings using Typesense's Java API client)."
    alt="A diagram showing the relationship between the applications front and back-end
    using boxes and arrows. The diagram shows that the React application sends an
    API request to the server endpoint on the back-end, which communicates
    with the TSearcher to send another API request to the Typesense server. At
    the same time, a Python web scraper generates meeting data, which is then 
    indexed into the Typesense server."
/>

## Implementation

Our final web application allows real-time, full-text search of public bodies
and meeting agendas/minutes, with options to filter by body or date.

Search results contain basic meeting info and highlighted snippets of search
term matches. Clicking on a search result allows users to see additional information about a
particular meeting and view plain text or PDF versions of the meeting
agendas/minutes.

<Video
src={appDemoVideo}
caption="Using the final product to search and view details of meetings 
about standardized testing."
alt='The user types "standardized testing" in the search bar, which
automatically return 140 results. Next, the user filters the results by "Cranston
School Committee", before switching the filter back to "All bodies". After that,
the user filters for meetings between August 1, 2020 and February 1, 2021, which
narrows the search down to three results. Then, the user clicks on the first 
search result, which brings them to a meeting info page for a Portsmouth School 
Committeee meeting held on November 11, 2020. The user scrolls through the page, 
clicking on the PDF links for both the latest meeting agenda and minutes. Finally,
the user clicks the "Back to search" link, which brings the user back to the previous
search page containing three results.'
/>

Ultimately, we scraped 279k meetings, 137k of which we successfully indexed into
the Typesense server!

My contributions to the project included:

- Coding the **front-end**, including:
  - Setting search parameters based on URL query parameters and vice-versa using
    React Router.
  - Adding appropriate ARIA roles and labels to make the site accessible.
- Creating initial **Figma designs** for the search and meeting info pages.
- Collaborating on the Node.js script for **indexing meetings** into
  the Typesense server.

If we had more time, I would have liked to:

- Improve the input validation for the date filter inputs
- Add paginated search (the current app only displays the first 100 results)
- Scrape semantic information from agenda/minutes PDFs such as headers and paragraphs
  in order to render them more accurately on the meeting info page.

<!-- We researched which technologies we wanted to use to fulfill these user
stories, settling on Python for scraping meetings, React for the front-end,
and Java and a search engine called [Typesense](https://typesense.org/)
for the back-end. -->
