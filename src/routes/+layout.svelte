<script lang="ts">
	import '../app.postcss'

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom'
	import { AppShell, storePopup } from '@skeletonlabs/skeleton'
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow })
</script>

<div class="main">
	<AppShell>
		<svelte:fragment slot="header"></svelte:fragment>
		<div class="container h-full mx-auto flex justify-center items-center my-4">
			<slot />
		</div>
	</AppShell>
</div>
