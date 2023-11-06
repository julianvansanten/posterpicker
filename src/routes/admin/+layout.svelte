<script>
	import Icon from '@iconify/svelte'
	import { AppBar } from '@skeletonlabs/skeleton'
</script>

<div>
	<AppBar>
		<svelte:fragment slot="lead"><Icon icon="ep:back" class="h-6 w-6" /></svelte:fragment>
		<h1>Poster Picker Admin</h1>
		<svelte:fragment slot="trail">(actions)</svelte:fragment>
	</AppBar>
    <slot />
</div>
