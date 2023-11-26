import { error } from '@sveltejs/kit'
import type { PageServerLoad } from "./admin/$types"

export const load: PageServerLoad = async ({ locals }) => {
    try {
        const groups = await locals.pb.collection('groups').getFullList({
            sort: '+number'
        })
        return { groups }
    } catch(err) {
        console.error(err)
        throw error(503, 'Unable to reach the server.')
    }
}
