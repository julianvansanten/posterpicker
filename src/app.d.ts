// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
import PocketBase from 'pocketbase'
import type { User } from './types/user'

declare namespace App {
	interface Locals {
		user: User,
		pb: PocketBase
	}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}
