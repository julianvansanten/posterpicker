<script lang="ts">
	import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton'
	import type { ActionData, PageData } from './$types'

	export let data: PageData
	export let form: ActionData

	const toast = getToastStore()

	$: group = data.results

	$: {
		if (form) {
			const t: ToastSettings = {
				message: form.message,
				background: form.success ? 'variant-filled-success' : 'variant-filled-error'
			}
			toast.trigger(t)
		}
	}
</script>

<div class="flex flex-col justify-center space-y-4">
	<h2>Edit group {group.number} ({group.name})</h2>
	<form action="?/changeName" method="post">
		<div class="flex flex-col justify-center space-y-2">
			<label class="label">
				<span>Change group name</span>
				<input class="input" type="text" name="name" placeholder="Group name" value={group.name} />
			</label>
			<button class="btn variant-filled">Change name</button>
		</div>
	</form>
	<form method="POST" action="?/addMembers">
		<div class="flex flex-col justify-center space-y-2">
			<label class="label">
				<span>Enter emails to add to {group.name}</span>
				<textarea
					class="textarea"
					rows="3"
					placeholder="...@student.utwente.nl,...@student.utwente.nl,..."
					name="emails"
				/>
			</label>
			<button class="btn variant-filled">Add participants</button>
		</div>
	</form>
</div>
