import { error, json, type RequestHandler } from "@sveltejs/kit"

export const POST: RequestHandler = async ({request, locals}) => {
    const data = await request.json().catch(() => {
        throw error(400, 'Invalid request.')
    })
    const email = data.email
    const group = parseInt(data.group)
    const votes = data.votes

    const pbRes = await locals.pb.send('members/exists', {
        method: 'POST',
        body: JSON.stringify({ email, group })
    }).catch(err => {
        console.error(err)
        throw error(503, 'Unable to reach the server whilst trying to verify group membership.')
    })

    if (!pbRes.exists) throw error(400, `${email} is not a member of group ${group}!`)

    const groups = await locals.pb.collection('groups').getFullList({
        sort: '+number'
    }).catch(err => {
        console.error(err)
        throw error(503, 'Unable to reach the server whilst trying to get the list of groups.')
    })

    return json(JSON.stringify(groups))
}
