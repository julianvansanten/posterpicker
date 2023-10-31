import type { PageServerLoad } from "./admin/$types"

export const load: PageServerLoad = async ({ request, locals }) => {
    const response = await locals.pb.collection('groups').getFullList({
        sort: '+number'
    })
    return {
        groups: response
    }
}
