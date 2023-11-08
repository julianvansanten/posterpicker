<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

<div class="w-full h-full flex flex-col items-center p-4">
	<h1>Welcome to the admin panel!</h1>
	<div class="table-container w-3/4 h-3/4">
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
</div>
