import { redirect, type Actions, fail } from '@sveltejs/kit'
import type { PageServerLoad } from '../$types'

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.pb.authStore.isValid) throw redirect(303, '/admin')
}

export const actions: Actions = {
	login: async ({ locals, request }) => {
		if (locals.pb.authStore.isValid) throw redirect(303, '/admin')
		const data = await request.formData()
		const email = data.get('email') as string
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!re.test(email)) return fail(400, { message: `${email} is not a valid email address!` })
		const password = data.get('password') as string
		await locals.pb
			.collection('users')
			.authWithPassword(email, password)
			.catch(() => {
				return fail(500, { message: 'Server error' })
			})
		if (!locals.pb.authStore.isValid) return fail(401, { message: 'Invalid credentials' })
		throw redirect(303, '/admin')
	}
}
