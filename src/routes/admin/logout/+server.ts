import { json, fail, type RequestHandler } from '@sveltejs/kit'

export const POST = async ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw fail(400, { message: 'Not logged in' })
	}
	locals.pb.authStore.clear()
	return json({ message: 'Logged out' })
}
