<script lang="ts">
	import type { PageData } from '../$types'
	import Icon from '@iconify/svelte'
	import editIcon from '@iconify/icons-mdi/edit'
	import removeIcon from '@iconify/icons-mdi/remove'
	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton'
	import formatListNumbered from '@iconify/icons-mdi/format-list-numbered'
	import badgeAccountAlert from '@iconify/icons-mdi/badge-account-alert'
	import badgeAccount from '@iconify/icons-mdi/badge-account'
	import type { RecordModel } from 'pocketbase'

	const modalStore = getModalStore()

	// TODO create a function that checks if a group exists
	var groupExists: boolean = false

	const removeGroup = (group: RecordModel) => {
		const modal: ModalSettings = {
			type: 'confirm',
			title: 'Remove group',
			body: `Are you sure you want to remove group ${group.number} (${group.name})? This can only be done if there are no more submissions`,
			response: (r: boolean) =>
				console.log(`Following group will${r ? '' : ' not'} be removed`, group)
		}
		modalStore.trigger(modal)
		return null
	}

	export let data: PageData
</script>

<div class="flex flex-col space-y-4 justify-center">
	{#if data.results.length > 0}
		<div class="flex flex-col space-y-2" id="editgroups">
			<h2>Edit existing groups</h2>
			<div class="card p-4 variant-soft">
				<ol class="list">
					{#each data.results as group}
						<li>
							<span class="badge-icon p-4 variant-soft-primary text-base">{group.number}</span>
							<span class="flex-auto">{group.name}</span>
							<a href="/admin/groups/{group.number}"
								><span class="btn-icon variant-filled"><Icon icon={editIcon} /></span></a
							>
							<button class="btn-icon variant-filled-surface" on:click={() => removeGroup(group)}
								><Icon icon={removeIcon} /></button
							>
						</li>
					{/each}
				</ol>
			</div>
		</div>
	{/if}
	<div class="flex flex-col space-y-2" id="addgroup">
		<h2>Add new group</h2>
		<div class="card p-4 variant-soft flex flex-col space-y-2">
			<div class="input-group grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">
					<Icon icon={formatListNumbered} />
				</div>
				<input type="number" placeholder="Enter group number" />
			</div>
			<div class="input-group grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">
					{#if groupExists}
						<Icon icon={badgeAccountAlert} color="orange" />
					{:else}
						<Icon icon={badgeAccount} />
					{/if}
				</div>
				<input type="text" placeholder="Enter group name" />
			</div>
			<div class="flex justify-end">
				<button class="btn variant-filled">
					{#if groupExists}
					Change
					{:else}
					Add
					{/if} group</button>
			</div>
		</div>
	</div>
</div>
