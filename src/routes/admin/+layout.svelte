<script>
	import Icon from '@iconify/svelte'
	import { AppBar } from '@skeletonlabs/skeleton'
</script>

<div class="w-full h-full overflow-hidden">
	<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
		<svelte:fragment slot="lead"><a href="/admin"><Icon icon="ep:back" class="h-6 w-6" /></a></svelte:fragment>
		<h1>Poster Picker Admin</h1>
		<svelte:fragment slot="trail">
			<a href="/admin/groups"><button class="btn variant-ghost">Add Groups</button></a>
			<button class="btn variant-filled">Logout</button>
		</svelte:fragment>
	</AppBar>
	<div class="overflow-y-scroll w-full h-full flex flex-col items-center p-4">
		<slot />
	</div>
</div>
