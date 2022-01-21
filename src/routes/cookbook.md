<script>

import CodeWrapper from '$components/CodeWrapper.svelte'
import OutlineHelper from '$components/OutlineHelper.svelte'
import windowsHighContrast from "svelte-highlight/src/styles/windows-high-contrast"
import samples from './cookbook.json'

// let samples = JSON.parse(JSONsamples);

console.log(`${JSON.stringify(samples, null, '  ')}`)

</script>

<svelte:head>
  {@html windowsHighContrast}
</svelte:head>

<div class="markdown-generated">

# Cookbook

> Some examples of how to use this repository to quickly create feature-rich content sites.

## Using Markdown

You can use markdown!

Ordered list:

1. first thing
2. second thing

## Code examples

Here are some code highlighting examples:

{#each samples as sample}
  <!-- <pre>{sample.code}</pre> -->
  <CodeWrapper {...sample} />
{/each}

</div>

<style></style>
