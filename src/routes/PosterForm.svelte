<script lang="ts">
	import { Step, Stepper } from '@skeletonlabs/skeleton'
	import type { RecordModel } from 'pocketbase'

	export let groups: RecordModel[] = []
	let votes = { myGroup: -1, first: -1, second: -1, third: -1 }
	let step: number = 0

	const submitHandler = (event: Event) => {
		console.log(event)
	}
</script>

<div>
	<Stepper on:complete="{submitHandler}">
		<Step>
			<svelte:fragment slot="header">Fill in your details:</svelte:fragment>
			<label class="label">
				<span>What is your group?</span>
				<select class="select" id="mygroup" bind:value={votes.myGroup}>
					{#each groups as group}
						<option value={group.number}>{group.number}: {group.name}</option>
					{/each}
				</select>
				<label class="label">
					<span>What is your email?</span>
					<input class="input" type="email" placeholder="@(student.)utwente.nl" />
				</label>
			</label>
		</Step>
		<Step>
			<svelte:fragment slot="header">Vote for your favorite posters!</svelte:fragment>
			<label class="label">
				<span>Which group do you want to vote first?</span>
				<select class="select" id="first" bind:value={votes.first}>
					<option value="" disabled selected hidden>Select a different group</option>
					{#each groups as group}
						{#if group.number != votes.myGroup}
							<option value={group.number}>{group.number}: {group.name}</option>
						{/if}
					{/each}
				</select>
			</label>
		</Step>
		<Step>
			<svelte:fragment slot="header">Vote for your favorite posters!</svelte:fragment>
			<label class="label">
				<span>Which group do you want to vote second?</span>
				<select class="select" id="second" bind:value={votes.second}>
					<option value="" disabled selected hidden>Select a different group</option>
					{#each groups as group}
						{#if group.number != votes.myGroup && group.number != votes.first}
							<option value={group.number}>{group.number}: {group.name}</option>
						{/if}
					{/each}
				</select>
			</label>
		</Step>
		<Step>
			<svelte:fragment slot="header">Vote for your favorite posters!</svelte:fragment>
			<label class="label">
				<span>Which group do you want to vote third?</span>
				<select class="select" id="third" bind:value={votes.third}>
					<option value="" disabled selected hidden>Select a different group</option>
					{#each groups as group}
						{#if group.number != votes.myGroup && group.number != votes.first && group.number != votes.second}
							<option value={group.number}>{group.number}: {group.name}</option>
						{/if}
					{/each}
				</select>
			</label>
		</Step>
	</Stepper>
</div>
