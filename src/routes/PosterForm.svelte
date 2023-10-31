<script lang="ts">
	import type { RecordModel } from 'pocketbase'

	export let groups: RecordModel[] = []
	let votes = { myGroup: -1, first: -1, second: -1, third: -1 }

	const reloadSelect = (event) => {
		const first = document.getElementById('first') as HTMLSelectElement
		const second = document.getElementById('second') as HTMLSelectElement
		const third = document.getElementById('third') as HTMLSelectElement
		first.value = ''
		second.value = ''
		third.value = ''
		votes.first = -1
		votes.second = -1
		votes.third = -1
	}
</script>

<div>
	<div>
		<label class="label">
			<span>What is your group?</span>
			<select class="select" id="mygroup" bind:value={votes.myGroup} on:change={reloadSelect}>
				{#each groups as group}
					<option value={group.number}>{group.number}: {group.name}</option>
				{/each}
			</select>
		</label>
	</div>
	<div>
		<label class="label">
			<span>Which group do you want to vote first?</span>
			<select class="select" id="first" bind:value={votes.first}>
				<option value="" disabled selected hidden>Select a different group</option>
				{#each groups as group}
					{#if group.number != votes.myGroup}
						<option value={group.number}>{group.number}: {group.name}</option>
					{:else}
						<option value={group.number} disabled>{group.number}: {group.name}</option>
					{/if}
				{/each}
			</select>
		</label>
		<label class="label">
			<span>Which group do you want to vote second?</span>
			<select class="select" id="second" bind:value={votes.second}>
				<option value="" disabled selected hidden>Select a different group</option>
				{#each groups as group}
					{#if group.number != votes.myGroup && group.number != votes.first}
						<option value={group.number}>{group.number}: {group.name}</option>
					{:else}
						<option value={group.number} disabled>{group.number}: {group.name}</option>
					{/if}
				{/each}
			</select>
		</label>
		<label class="label">
			<span>Which group do you want to vote third?</span>
			<select class="select" id="third" bind:value={votes.third}>
				<option value="" disabled selected hidden>Select a different group</option>
				{#each groups as group}
					{#if group.number != votes.myGroup && group.number != votes.first && group.number != votes.second}
						<option value={group.number}>{group.number}: {group.name}</option>
					{:else}
						<option value={group.number} disabled>{group.number}: {group.name}</option>
					{/if}
				{/each}
			</select>
		</label>
	</div>
	<div>
		<label class="label">
			<span>What is your email?</span>
			<input class="input" type="email" placeholder="@(student.)utwente.nl" />
		</label>
	</div>
</div>
