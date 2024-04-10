<script lang="ts">
	import badgeAccount from '@iconify/icons-mdi/badge-account'
	import badgeAccountAlert from '@iconify/icons-mdi/badge-account-alert'
	import formatListNumbered from '@iconify/icons-mdi/format-list-numbered'
	import Icon from '@iconify/svelte'
	import type { PageData } from './$types'

	let groupExists = false

	export let data: PageData
</script>

<div class="flex flex-col space-y-4 justify-center">
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
					{/if} group</button
				>
			</div>
		</div>
	</div>
</div>
