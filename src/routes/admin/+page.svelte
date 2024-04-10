<script lang="ts">
	import type { PageData } from './$types'
	import Icon from '@iconify/svelte'

	export let data: PageData
</script>

<h1>Here are the results!</h1>
<div class="table-container w-3/4 h-3/4 overflow-y-scroll">
	<table class="table table-auto table-hover text-sm md:text-base">
		<thead>
			<tr>
				<th>Group number</th>
				<th>Group name</th>
				<th>Voted</th>
				<th>Points</th>
			</tr>
		</thead>
		<tbody>
			{#each data.results as group, i}
				<tr>
					<td>{group.number}</td>
					<td class="break-words">{group.name}</td>
					<td class="text-center align-center">{#if group.voted}
						<Icon icon="mdi:check" />
					{:else}
						<Icon icon="mdi:close" />
					{/if}
					</td>
					<td>{group.points}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
