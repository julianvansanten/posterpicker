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
<Toast />
<AppShell class="main h-screen w-screen flex flex-col overflow-hidden">
	<svelte:fragment slot="header" />
	<div class="overflow-y-scroll">
		<slot />
	</div>

	<svelte:fragment slot="footer">
		<div class="overflow-hidden h-6">
			<Footer />
		</div>
	</svelte:fragment>
</AppShell>
