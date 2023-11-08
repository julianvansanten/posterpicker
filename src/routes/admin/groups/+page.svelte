<script lang="ts">
	import type { PageData } from '../$types'

	let groupnr: string

	export let data: PageData
</script>

<div>
	<form method="POST">
		<label class="label">
			<span>Group nr</span>
			<select class="select" id="mygroup" name="group" bind:value={groupnr}>
				{#each data.results as group}
					<option value={group.id}>{group.number}: {group.name}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span>Enter emails to add to group</span>
			<textarea
				class="textarea"
				rows="3"
				placeholder="...@student.utwente.nl,...@student.utwente.nl,..."
                name="emails"
			/>
		</label>
        <button class="btn variant-filled">Submit</button>
	</form>
</div>
