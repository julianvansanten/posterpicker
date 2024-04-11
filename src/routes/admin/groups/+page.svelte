<script lang="ts">
	import type { PageData } from './$types'

	import GroupEditor from './GroupEditor.svelte'

	export let data: PageData
</script>

<div class="flex flex-col space-y-4 justify-center">
	<div class="flex flex-col space-y-2" id="editgroups">
		<h2>Edit existing groups</h2>
		{#if data.results.length > 0}
			<GroupEditor groups={data.results} />
		{:else}
			<p>There are no groups yet!</p>
		{/if}
		<a href="/admin/groups/add"><button type="button" class="btn variant-filled">Add new groups</button></a>
	</div>
</div>
