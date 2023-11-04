<script lang="ts">
	import type { ActionData, PageData } from './$types'
	import PosterForm from './PosterForm.svelte'

	export let data: PageData
</script>

<div class="space-y-5">
	<h1 class="h1 text-center">Choose your favorite posters!</h1>
	<h2 class="h2 italic text-center">The best poster gets a cream cake!</h2>
	<PosterForm groups={data.groups} />
</div>
