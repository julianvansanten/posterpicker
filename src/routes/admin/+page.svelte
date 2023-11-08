<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

<h1>Here are the results!</h1>
<div class="table-container w-3/4 h-3/4 overflow-y-scroll">
	<!-- Native Table Element -->
	<table class="table table-hover">
		<thead>
			<tr>
				<th>Group number</th>
				<th>Group name</th>
				<th>Points</th>
			</tr>
		</thead>
		<tbody>
			{#each data.results as group, i}
				<tr>
					<td>{group.number}</td>
					<td>{group.name}</td>
					<td>{group.points}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
