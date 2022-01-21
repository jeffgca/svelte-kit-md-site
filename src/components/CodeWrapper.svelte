<script>

import { Highlight, HighlightAuto, HighlightSvelte } from 'svelte-highlight'
import javascript from 'svelte-highlight/src/languages/javascript'

export let filename;
export let type;
export let code;

</script>

<h4>{filename}</h4>

{#if type === 'svelte'}
  <HighlightSvelte {code} />
{:else if type === 'js'}
  <Highlight language={javascript} {code}/>
{:else}
  <HighlightAuto {code}/>
{/if}

