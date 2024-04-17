<script lang="ts">
	import Icon from "@iconify/svelte"
	import type { Group } from "$lib/types/group"
	import editIcon from '@iconify/icons-mdi/edit'
	import removeIcon from '@iconify/icons-mdi/remove'
	import clipboardRemoveOutline from '@iconify/icons-mdi/clipboard-remove-outline'
	import { getModalStore, getToastStore, type ModalSettings, type ToastSettings } from '@skeletonlabs/skeleton'

	const modalStore = getModalStore()
	const toastStore = getToastStore()

	const removeGroup = (group: Group) => {
		const modal: ModalSettings = {
			type: 'confirm',
			title: 'Remove group',
			body: `Are you sure you want to remove group ${group.number} (${group.name})? This can only be done if there are no submissions on this group.`,
			response: (r: boolean) => {
				if (r) {
					fetch('/api/admin/groups', {
						method: 'DELETE',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({group: group})
					}).then((resp) => {
						if (resp.ok) {
							groups = groups.filter(g => g.number !== group.number)
							const t: ToastSettings = {
								message: `Removed group ${group.number} (${group.name}) with their vote and members!`
							}
							toastStore.trigger(t)
						} else {
							const t: ToastSettings = {
								message: `Failed to remove group ${group.number} (${group.name})`
							}
							toastStore.trigger(t)
						}
					})
						.catch((err) => {
							const t: ToastSettings = {
								message: err.message
							}
							toastStore.trigger(t)
						})
				}
			}
		}
		modalStore.trigger(modal)
		return null
	}

    export let groups: Group[] = [];
</script>

<div class="card p-4 variant-soft">
				<ol class="list flex flex-col space-y-2">
					{#each groups as group}
						<li>
							<span class="badge-icon p-4 variant-soft-primary text-base">{group.number}</span>
							<span class="flex-auto">{group.name}</span>
							<span>
								<button class="btn-icon variant-soft-primary">
									<Icon height="auto" icon={clipboardRemoveOutline} />
								</button>
							</span>
							<span>
								<a href="/admin/groups/{group.number}" class="btn-icon variant-filled-surface">
									<Icon height="auto" icon={editIcon} />
								</a>
							</span>
							<span>
								<button class="btn-icon variant-filled" on:click={() => removeGroup(group)}>
									<Icon height="auto" icon={removeIcon} />
								</button>
							</span>
						</li>
					{/each}
				</ol>
			</div>