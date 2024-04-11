<script lang="ts">

</script>

<div class="flex flex-col justify-center">
    <!-- <h2>Add students to {group.number}: {group.name}</h2> -->
	<form method="POST">
		<label class="label">
			<span>Enter emails to add to group</span>
			<textarea
				class="textarea"
				rows="3"
				placeholder="...@student.utwente.nl,...@student.utwente.nl,..."
                name="emails"
			/>
		</label>
        <button class="btn variant-filled">Submit</button>
	</form>
</div>
