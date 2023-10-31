<script lang="ts">
	import PosterForm from './PosterForm.svelte'
	
	export let data
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1 text-center">Choose your favorite posters!</h1>
		<h2 class="h2 italic text-center">The best poster gets a cream cake!</h2>
		<PosterForm groups={data.groups}/>
	</div>
</div>
