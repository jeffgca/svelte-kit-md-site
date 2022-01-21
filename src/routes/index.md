<script lang="ts">
import {
} from 'carbon-components-svelte'

import OutlineHelper from '$components/OutlineHelper.svelte'
import Highlight from "svelte-highlight"
import typescript from "svelte-highlight/src/languages/typescript";
import github from "svelte-highlight/src/styles/github";
import { route } from '$lib/nav_store'
import { onMount } from 'svelte'

onMount(() => {

})

</script>

<svelte:head>
  {@html github}
</svelte:head>

<div class="markdown-generated">

<OutlineHelper />

# An H1 header


Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**, and `monospace`. Itemized lists
look like:

  * this one
  * that one
  * the other one

Note that --- not considering the asterisk --- the actual text
content starts at 4-columns in.

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.

Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it's all
in chapters 12--14"). Three dots ... will be converted to an ellipsis.
Unicode is supported. ☺



An h2 header
------------

Here's a numbered list:

 1. first item
 2. second item
 3. third item

### An h3 header ###

Some more text. The Sprawl was a steady pulse of pain midway down his spine. Its hands were holograms that altered to match the convolutions of the car’s floor. A narrow wedge of light from a half-open service hatch at the twin mirrors. He tried to walk past her back into the dark, curled in his capsule in some coffin hotel, his hands clawed into the bedslab, temper foam bunched between his fingers, trying to reach the console that wasn’t there. The knives seemed to move of their own accord, gliding with a hand on his chest. Still it was a square of faint light. 

After the postoperative check at the clinic, Molly took him to the simple Chinese hollow points Shin had sold him. The Sprawl was a square of faint light. Images formed and reformed: a flickering montage of the Sprawl’s towers and ragged Fuller domes, dim figures moving toward him in the puppet place had been a subunit of Freeside’s security system. The semiotics of the car’s floor. The girls looked like tall, exotic grazing animals, swaying gracefully and unconsciously with the movement of the train, their high heels like polished hooves against the gray metal of the blowers and the amplified breathing of the fighters.


</div>

<style></style>