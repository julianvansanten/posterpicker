<script lang="ts">
	import type { PageData } from '../$types'
	import Icon from '@iconify/svelte'
	import editIcon from '@iconify/icons-mdi/edit'
	import removeIcon from '@iconify/icons-mdi/remove'
	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton'
	import type { RecordModel } from 'pocketbase'

	const modalStore = getModalStore()

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

<div class="flex flex-col space-y-2 justify-center">
	<h2>Edit groups</h2>
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
