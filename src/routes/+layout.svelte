<script lang="ts">
	import '../app.postcss'

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom'
	import { AppBar, AppShell, Toast, storePopup } from '@skeletonlabs/skeleton'
	import { initializeStores } from '@skeletonlabs/skeleton';

	export let title: string = 'Skeleton SvelteKit'

	initializeStores();
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow })
</script>

<div class="main h-screen w-screen">
	<Toast />
	<AppShell>
		<svelte:fragment slot="header">
			<AppBar>{title}</AppBar>
		</svelte:fragment>
		<div class="container h-full mx-auto flex justify-center my-4">
			<slot />
		</div>
	</AppShell>
</div>
