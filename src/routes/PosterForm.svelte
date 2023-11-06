<script lang="ts">
	import { Step, Stepper } from '@skeletonlabs/skeleton'
	import type { RecordModel } from 'pocketbase'

	export let groups: RecordModel[] = []
	let email = ''
	let myGroup: number = -1
	let votes = { first: -1, second: -1, third: -1 }
	let step: number = 0

	const submitHandler = () => {
		fetch('/api/submit', {
			method: 'POST',
			body: JSON.stringify({ email, "group": myGroup, votes })
		})
	}

	const verifyMembership = () => {
		fetch('/api/verify', {
			method: 'POST',
			// headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, group: myGroup })
		})
			.then((response) =>
				response
					.json()
					.then((data) => {
						if (data.exists) {
							step = 1
						} else {
							step = 0
						}
					})
					.catch((error) => {
						console.error('json error:', error)
					})
			)
			.catch((error) => {
				console.error('Server error:', error)
			})
	}
</script>

<div>
	<Stepper on:complete={submitHandler}>
		<Step locked={step <= 0}>
			<svelte:fragment slot="header">Fill in your details:</svelte:fragment>
			<label class="label">
				<span>What is your group?</span>
				<select
					class="select"
					id="mygroup"
					name="group"
					bind:value={myGroup}
					on:change={verifyMembership}
				>
					{#each groups as group}
						<option value={group.number}>{group.number}: {group.name}</option>
					{/each}
				</select>
				<label class="label">
					<span>What is your email?</span>
					<input
						class="input"
						type="email"
						name="email"
						placeholder="@(student.)utwente.nl"
						bind:value={email}
						on:change={verifyMembership}
					/>
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
						{#if group.number != myGroup}
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
						{#if group.number != myGroup && group.number != votes.first}
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
						{#if group.number != myGroup && group.number != votes.first && group.number != votes.second}
							<option value={group.number}>{group.number}: {group.name}</option>
						{/if}
					{/each}
				</select>
			</label>
		</Step>
	</Stepper>
</div>
