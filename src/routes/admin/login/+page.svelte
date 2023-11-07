<script lang="ts">
	import type { ActionData } from "./$types"

	export let form: ActionData
</script>

<div class="flex-1 h-full w-full">
	<div class="h-full w-full mx-auto flex justify-center items-center my-4">
		<div class="w-1/2 md:w-1/3 h-full flex items-center">
			<!-- Login submission form -->
			<div class="w-full card p-4 variant-ghost">
				<form method="POST" action="?/login" class="flex flex-col space-y-2 w-full">
					<input
						class="input"
						title="Enter email address"
						type="email"
						name="email"
						placeholder="john@example.com"
						autocomplete="email"
					/>
					<input
						class="input"
						title="Enter password"
						type="password"
						name="password"
						placeholder="password"
					/>
					<div class="flex justify-end">
						<button type="submit" class="btn variant-filled w-auto">
							<span>Submit login</span>
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
