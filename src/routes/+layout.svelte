<script lang="ts">
	import '../app.postcss'

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom'
	import { AppShell, Toast, storePopup } from '@skeletonlabs/skeleton'
	import { initializeStores } from '@skeletonlabs/skeleton'
	import { autoModeWatcher } from '@skeletonlabs/skeleton'
	import Footer from './Footer.svelte'

	initializeStores()
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow })
</script>

<svelte:head
	>{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}</svelte:head
>
<div class="main h-screen w-screen">
	<Toast />
	<AppShell class="flex min-h-full flex-col">
		<svelte:fragment slot="header" />
		<div class="flex-1">
			<div class="h-full mx-auto flex justify-center items-center my-4">
				<slot />
			</div>
		</div>
		<svelte:fragment slot="footer">
			<div class="overflow-hidden h-6">
				<Footer />
			</div>
		</svelte:fragment>
	</AppShell>
</div>
