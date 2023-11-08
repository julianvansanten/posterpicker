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

<svelte:head>
	{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}
	<title>TCS Poster Picker</title>
</svelte:head>
<Toast />
<AppShell class="main h-screen w-screen flex flex-col overflow-hidden">
	<svelte:fragment slot="header" />
	<slot />
	<svelte:fragment slot="footer">
		<Footer />
	</svelte:fragment>
</AppShell>
