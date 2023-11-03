import { error, type Actions } from '@sveltejs/kit'
import type { PageServerLoad } from "./admin/$types"

export const load: PageServerLoad = async ({ request, locals }) => {
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

export const actions: Actions = {
    checkMember: async ({ request, locals }) => {
        const data = await request.json()
        const email = data.get('email')
        const group = data.get('group')
        // TODO send validation check to specified endpoint
    },
    submitVote: async ({ request, locals }) => {
        // TODO implement
    }
}