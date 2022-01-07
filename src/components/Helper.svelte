<script>

import { route } from '$lib/nav_store'
import build from '$lib/docoutline'

console.log('Route: ', route)
build('div.markdown-generated')

</script>

<p>Route: {$route.pathname} :: {$route.hash}</p>
