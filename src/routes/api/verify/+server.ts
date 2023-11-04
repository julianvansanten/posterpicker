import { error, json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const POST: RequestHandler = async ({ request, locals }) => {
	try {
		const data = await request.json()
		const email = data.email
		if (!email) throw error(400, 'Invalid request, no email provided.')
		const group = parseInt(data.group)
		const pbRes = await locals.pb
			.send('members/exists', {
				method: 'POST',
				body: JSON.stringify({ email, group })
			})
			.catch(() => {
				throw error(503, 'Unable to reach the server.')
			})
		return json(pbRes)
	} catch (err) {
		throw error(400, 'Invalid request.')
	}
}
