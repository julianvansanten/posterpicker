import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.pb.authStore.isValid) throw redirect(303, '/admin/login')

    // return {message: "hello"}

	const pbSubmissions = await locals.pb
		.collection('submissions')
		.getFullList({
			sort: '-created'
		})

    const pbGroups = await locals.pb
        .collection('groups')
        .getFullList({
            sort: 'number'
        })

    const results = new Map<string, number>()


    pbSubmissions.forEach(submission => {
        const first: number = results.get(submission.first) || 0
        results.set(submission.first, first + 3)
        const second: number = results.get(submission.second) || 0
        results.set(submission.second, second + 2)
        const third: number = results.get(submission.third) || 0
        results.set(submission.third, third + 1)
    })

    const voteList: string[] = []

    pbSubmissions.forEach(submission => {
        voteList.push(submission.group)
    })

    pbGroups.forEach(group => {
        group.points = results.get(group.id) || 0
        group.voted = voteList.includes(group.id)
    })

    return {
        results: pbGroups
    }
}
