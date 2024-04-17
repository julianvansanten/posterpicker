import { redirect } from "@sveltejs/kit"
import type { Actions, PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ locals }) => {
    if (!locals.pb.authStore.isValid) throw redirect(304, '/admin/login')
}

export const actions: Actions = {
    default: async ({ request, locals }) => {
        const data = await request.formData()
        const groupName: string = (data.get('name') as string) || ''
        if (!groupName || groupName.length < 5) return { success: false, message: 'Name must be at least 5 characters' }
        if (groupName.length > 100) return { success: false, message: 'Name must be less than 100 characters' }
        const number: number = parseInt(data.get('number') as string) || 0
        const pbGroup = await locals.pb
            .collection('groups')
            .create({ "name": groupName, "number": number }, { requestKey: null })
            .then(() => { return true })
            .catch(() => { return false })
        if (!pbGroup) return { success: false, message: `Failed to create group ${number}` }
        return { success: true, message: `Created group ${number}` }
    }
}
