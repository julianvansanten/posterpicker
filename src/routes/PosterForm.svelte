<script lang="ts">
	import { Step, Stepper, getToastStore, type ToastSettings } from '@skeletonlabs/skeleton'
	import type { RecordModel } from 'pocketbase'

	export let groups: RecordModel[] = []
	let email = ''
	let myGroup: number = -1
	let votes = { first: -1, second: -1, third: -1 }
	let step: number = 0
	const toastStore = getToastStore()

	const submitHandler = async () => {
		fetch('/api/submit', {
			method: 'POST',
			body: JSON.stringify({ email, group: myGroup, votes })
		}).then((resp) => {
			if (resp.ok) {
				resp
					.json()
					.then((resp) => {
						const t: ToastSettings = {
							message: resp.message,
							timeout: 5000,
							background: 'variant-filled-success'
						}
						toastStore.trigger(t)
					})
					.catch((err) => {
						console.error(err)
					})
			} else {
				resp.json().then((resp) => {
					const t: ToastSettings = {
						message: `An occurred during your submission: ${resp.message}`,
						timeout: 5000,
						background: 'variant-filled-error'
					}
					toastStore.trigger(t)
				})
			}
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

	const getGroupName = (groupNumber: number) => {
		for (let i = 0; i < groups.length; i++) {
			if (groups[i].number == groupNumber) {
				return groups[i].name
			}
		}
		return ''
	}

	const updateStep = () => {
		console.log(votes)
		if (votes.first == -1) {
			step = 1
			return
		}
		if (votes.second == -1 || votes.first == votes.second) {
			step = 2
			return
		}
		if (votes.third == -1 || votes.second == votes.third || votes.first == votes.third) {
			step = 3
			return
		}
		return (step = 4)
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
		<Step locked={step <= 1}>
			<svelte:fragment slot="header">Vote for your favorite posters!</svelte:fragment>
			<label class="label">
				<span>Which group do you want to vote first?</span>
				<select class="select" id="first" bind:value={votes.first} on:change={updateStep}>
					<option value="" disabled selected hidden>Select a different group</option>
					{#each groups as group}
						{#if group.number != myGroup}
							<option value={group.number}>{group.number}: {group.name}</option>
						{/if}
					{/each}
				</select>
			</label>
		</Step>
		<Step locked={step <= 2}>
			<svelte:fragment slot="header">Vote for your favorite posters!</svelte:fragment>
			<label class="label">
				<span>Which group do you want to vote second?</span>
				<select class="select" id="second" bind:value={votes.second} on:change={updateStep}>
					<option value="" disabled selected hidden>Select a different group</option>
					{#each groups as group}
						{#if group.number != myGroup && group.number != votes.first}
							<option value={group.number}>{group.number}: {group.name}</option>
						{/if}
					{/each}
				</select>
			</label>
		</Step>
		<Step locked={step <= 3}>
			<svelte:fragment slot="header">Vote for your favorite posters!</svelte:fragment>
			<label class="label">
				<span>Which group do you want to vote third?</span>
				<select class="select" id="third" bind:value={votes.third} on:change={updateStep}>
					<option value="" disabled selected hidden>Select a different group</option>
					{#each groups as group}
						{#if group.number != myGroup && group.number != votes.first && group.number != votes.second}
							<option value={group.number}>{group.number}: {group.name}</option>
						{/if}
					{/each}
				</select>
			</label>
		</Step>
		<Step locked={step <= 3}>
			<svelte:fragment slot="header">Confirm your submission</svelte:fragment>
			<div>
				<p>My group:</p>
				<blockquote class="blockquote">{getGroupName(myGroup)}</blockquote>
				<p>My email:</p>
				<blockquote class="blockquote">{email}</blockquote>
				<p>My votes:</p>
				<p>First:</p>
				<blockquote class="blockquote">{getGroupName(votes.first)}</blockquote>
				<p>Second:</p>
				<blockquote class="blockquote">{getGroupName(votes.second)}</blockquote>
				<p>Third:</p>
				<blockquote class="blockquote">{getGroupName(votes.third)}</blockquote>
			</div>
		</Step>
	</Stepper>
</div>
