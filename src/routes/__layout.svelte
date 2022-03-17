<script lang="ts">
  import { 
    Content, 
    Grid, 
    Theme,
    Row, 
    Column
  } from 'carbon-components-svelte'

  import Header from '$components/Header.svelte'
  import Footer from '$components/Footer.svelte'
  import '$static/white.css'
  let theme: 'white' = 'white' as const

  let route = document.location.pathname
  let hash = document.location.hash

  console.log('in __layout: ', route, hash)

</script>

<Theme bind:theme />

<Header />
<Content>
  <Grid>
    <Row>
      <Column>
        <slot/>
      </Column>
    </Row>
  </Grid>
</Content>
<Footer />

<style>

/* Styles to normalize how the markdown-sourced content looks */

:global(div.markdown-generated > pre) {
  background-color: #dedede;
  padding: 5px;
  overflow: auto;
}

:global(div.markdown-generated) {
  padding: 10px;
}

:global(div.markdown-generated),
:global(div.markdown-generated > pre),
:global(div.markdown-generated p) {
  font-family:Arial, Helvetica, sans-serif;
  line-height: 1.4em;
  width: 95%;
}

:global(div.markdown-generated),
:global(div.markdown-generated > pre),
:global(div.markdown-generated p), 
:global(div.markdown-generated ul),
:global(div.markdown-generated ol),
:global(div.markdown-generated a.bx--link) {
  font-size: large;
}

:global(div.markdown-generated),
:global(div.markdown-generated > pre),
:global(div.markdown-generated > p), 
:global(div.markdown-generated ul),
:global(div.markdown-generated blockquote),
:global(div.markdown-generated ol) {
  margin-bottom: 1.2em;
  margin-top: 1.4em;
}

:global(div.markdown-generated h1), :global(div.markdown-generated h2), :global(div.markdown-generated h3) {
  font-family:'IBM Plex Sans', sans-serif;
  margin-bottom: 0.8em;
}

:global(div.markdown-generated ol > li),
:global(div.markdown-generated ul > li) {
  margin-left: 1.4em;
  width: 95%;
}

:global(div.markdown-generated ul > li) {
  list-style: disc;
}

:global(div.markdown-generated ol > li) {
  list-style-type: decimal;
}

:global(div.markdown-generated a) {
  color: blue;
}

:global(div.markdown-generated a:visited) {
  color: rebeccapurple;
}

:global(div.markdown-generated a:hover) {
  color: red;
}

:global(div.markdown-generated blockquote) {
  padding-left: 1rem;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  background-color: #efefef;
  border-left: 2rem solid #cccc;
  font-style: italic;
  color: #565656;
  width: auto;
}

:global(:target::before) {
  content: "";
  display: block;
  height: 60px; /* fixed header height*/
  margin: -60px 0 0; /* negative fixed header height */
}

</style>
