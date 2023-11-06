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
    // For Stepper support, implement as a POST request instead
    
    // checkMember: async ({ request, locals }) => {
    //     const data = await request.formData()
    //     const email = data.get('email') as string
    //     if (!email) return false
    //     const group = parseInt(data.get('group') as string)
    //     const pbRes = await locals.pb.send('members/exists', {
    //         method: 'POST',
    //         body: JSON.stringify({ email, group })
    //     }).catch(err => {
    //         console.error(err)
    //         throw error(503, 'Unable to reach the server.')
    //     })
    //     console.info(pbRes.exists)
    //     return pbRes
    // },
    // submitVote: async ({ request, locals }) => {
    //     // TODO implement
    //     const data = await request.formData()
    //     const email = data.get('email') as string
    //     const group = parseInt(data.get('group') as string)
    //     const first = parseInt(data.get('first') as string)
    //     const second = parseInt(data.get('second') as string)
    //     const third = parseInt(data.get('third') as string)

    //     const pbRes = await locals.pb.send('members/exists', {
    //         method: 'POST',
    //         body: JSON.stringify({ email, group })
    //     }).catch(err => {
    //         console.error(err)
    //         throw error(503, 'Unable to reach the server whilst trying to verify group membership.')
    //     })

    //     if (!pbRes.exists) throw error(400, `${email} is not a member of group ${group}!`)

    //     const groups = await locals.pb.collection('groups').getFullList({
    //         sort: '+number'
    //     }).catch(err => {
    //         console.error(err)
    //         throw error(503, 'Unable to reach the server whilst trying to get the list of groups.')
    //     })

    //     console.log(JSON.stringify(groups))

    // }
}
