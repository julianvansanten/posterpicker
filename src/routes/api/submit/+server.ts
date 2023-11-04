import { error, json, type RequestHandler } from '@sveltejs/kit'

export const POST: RequestHandler = async ({ request, locals }) => {
	const data = await request.json().catch(() => {
		throw error(400, 'Invalid request.')
	})
	const email = data.email
	const group = parseInt(data.group)
	const votes = data.votes

	const pbRes = await locals.pb
		.send('api/members/exists', {
			method: 'POST',
			body: JSON.stringify({ email, group })
		})
		.catch((err) => {
			console.error(err)
			throw error(503, 'Unable to reach the server whilst trying to verify group membership.')
		})

	if (!pbRes.exists) throw error(400, `${email} is not a member of group ${group}!`)

	const groups = await locals.pb
		.collection('groups')
		.getFullList({
			sort: '+number',
			fields: 'number,id'
		})
		.catch((err) => {
			console.error(err)
			throw error(503, 'Unable to reach the server whilst trying to get the list of groups.')
		})

	// TODO link group numbers to group IDs
	// TODO send votes to database

	const groupNumberToId = new Map<number, string>()
	groups.map((group) => {
		groupNumberToId.set(group.number, group.id)
	})

	const submission = {
		group: groupNumberToId.get(group),
		first: groupNumberToId.get(votes.first),
		second: groupNumberToId.get(votes.second),
		third: groupNumberToId.get(votes.third)
	}

	try {
		locals.pb
			.collection('submissions')
			.create(submission)
			.catch((err) => {
				console.error(err)
				throw error(503, 'Unable to reach the server whilst trying to submit votes.')
			})
	} catch (err) {
        console.error(err)
    }
	return json(submission)
}
