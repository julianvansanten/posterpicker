import { redirect, type Actions, fail } from "@sveltejs/kit"
import type { PageServerLoad } from "../$types"

export const load: PageServerLoad = async ({ locals }) => {
    if (locals.pb.authStore.isValid) throw redirect(303, "/admin")
}

export const actions: Actions = {
    login: async ({ locals, request }) => {
        if (locals.pb.authStore.isValid) throw redirect(303, "/admin")
        const data = await request.formData()
        const email = data.get('email')
        const password = data.get('password')
        const adminData = await locals.pb.collection('users').authWithPassword(email, password)
        if (!adminData) throw fail(400, { message: "Invalid credentials" })
        throw redirect(303, "/admin")
    }
}
