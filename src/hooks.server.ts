// src/hooks.server.js
import type { Handle } from '@sveltejs/kit'
import PocketBase from 'pocketbase'
import { env } from '$env/dynamic/private'

/**
 * PocketBase SvelteKit server hook
 * @param event request event
 * @param resolve function to resolve the request
 * @returns The response object retrieved from the server
 */
export const handle: Handle = async ({ event, resolve }) => {
	event.locals.pb = new PocketBase(env.POCKETBASE_URL)

	// load the store data from the request cookie string
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '')

	try {
		// get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
		event.locals.pb.authStore.isValid && (await event.locals.pb.collection('users').authRefresh())
	} catch (_) {
		// clear the auth store on failed refresh
		event.locals.pb.authStore.clear()
	}

	const response = await resolve(event)

	// send back the default 'pb_auth' cookie to the client with the latest store state
	response.headers.append('set-cookie', event.locals.pb.authStore.exportToCookie())

	return response
}
