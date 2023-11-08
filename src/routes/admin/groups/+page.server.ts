import { json, redirect, type Actions } from '@sveltejs/kit'
import type { PageServerLoad } from '../$types'

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.pb.authStore.isValid) throw redirect(304, '/admin/login')

	const pbGroups = await locals.pb.collection('groups').getFullList({
		sort: 'number'
	})

	return {
		results: pbGroups
	}
}

export const actions: Actions = {
	default: async ({ request, locals }) => {
		request
			.formData()
			.then((data) => {
				const group = data.get('group') as string
				const emailStr: string = (data.get('emails') as string) || ''
				const emails: string[] = emailStr.split(',')
				emails.forEach(async (email) => {
					email = email.replace(/^\s+/, '').replace(/\s+$/, '')
					await locals.pb
						.collection('members')
						.create({ email: email, group: group }, { requestKey: null })
				})
			})
			.catch((err) => {
				console.error(err)
			})
	}
}
