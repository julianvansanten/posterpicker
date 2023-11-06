<script lang="ts">
	import '../app.postcss'

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom'
	import { AppShell, Toast, storePopup } from '@skeletonlabs/skeleton'
	import { initializeStores } from '@skeletonlabs/skeleton';

	initializeStores();
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow })
</script>

<div class="main">
	<Toast />
	<AppShell>
		<svelte:fragment slot="header"></svelte:fragment>
		<div class="container h-full mx-auto flex justify-center items-center my-4">
			<slot />
		</div>
	</AppShell>
</div>
