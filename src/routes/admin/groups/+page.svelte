<script lang="ts">
	import type { PageData } from '../$types'

	import GroupEditor from './GroupEditor.svelte'

	export let data: PageData
</script>

<div class="flex flex-col space-y-4 justify-center">
	{#if data.results.length > 0}
		<div class="flex flex-col space-y-2" id="editgroups">
			<h2>Edit existing groups</h2>
			<GroupEditor groups={data.results} />
		</div>
	{/if}
</div>
