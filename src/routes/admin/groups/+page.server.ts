import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from '../$types'
import type { RecordModel } from 'pocketbase'
import { createGroup } from '$lib/types/group'
import type { Group } from '$lib/types/group'

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.pb.authStore.isValid) throw redirect(304, '/admin/login')

	const pbGroups = await locals.pb.collection('groups').getFullList({
		sort: 'number'
	})

	const results: Group[] = pbGroups.map((pbGroup: RecordModel) => createGroup(pbGroup))

	return {
		results: results
	}
}
