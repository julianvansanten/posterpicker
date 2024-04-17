import { error, redirect, type Actions } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"
import { createGroup, type Group } from "$lib/types/group"


export const load: PageServerLoad = async ({ locals, params }) => {
    if (!locals.pb.authStore.isValid) throw redirect(304, '/admin/login')

		const pbGroup = await locals.pb.collection('groups').getFirstListItem(`number=${params.group}`)
			.catch(() => {throw error(404, 'Group not found')})
	
		return {results: createGroup(pbGroup)}
}

export const actions: Actions = {
	changeName: async ({ request, locals, params }) => {
		const pbGroup = await locals.pb.collection('groups').getFirstListItem(`number=${params.group}`)
		.catch(() => {throw error(404, 'Group not found')})
		const group: Group = createGroup(pbGroup)
		const data = await request.formData()
		const name = (data.get('name') as string) || ''
		if (!name || name.length < 5) return {success: false, message: 'Name must be at least 5 characters'}
		if (name.length > 50) return {success: false, message: 'Name must be less than 50 characters'}
		const res = await locals.pb
			.collection('groups')
			.update(group.id, { name: name }, { requestKey: null })
			.then(() => {return true})
			.catch(() => {return false})
		if (!res) return {success: false, message: 'Failed to update group name'}
		return {success: true, message: `Updated name of group ${group.number} to ${name}`}
	},
	addMembers: async ({ request, locals, params }) => {
		const pbGroup = await locals.pb.collection('groups').getFirstListItem(`number=${params.group}`)
			.catch(() => {throw error(404, 'Group not found')})
		const group: Group = createGroup(pbGroup)
		const data = await request.formData()
		const emailStr: string = (data.get('emails') as string) || ''
		const emails: string[] = emailStr.split(',')
		for (let email of emails) {
			email = email.replace(/^\s+/, '').replace(/\s+$/, '')
			const res = await locals.pb
				.collection('members')
				.create({ email: email, group: group.id }, { requestKey: null })
				.then(() => {return true})
				.catch(() => {return false})
			if (!res) return {success: false, message: `Failed to add ${email} to group ${group.number}, does the member already exist?`}
		}
		return {success: true, message: `Added ${emails.length} member${emails.length > 1 ? "s" : ""} to group ${group.number}`}
	}
}
