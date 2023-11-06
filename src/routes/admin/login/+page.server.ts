import { redirect, type Actions, fail } from "@sveltejs/kit"
import type { PageServerLoad } from "../$types"

export const load: PageServerLoad = async ({ locals }) => {
    if (locals.pb.authStore.isValid) throw redirect(303, "/admin")
}

export const actions: Actions = {
    login: async ({ locals, request }) => {
        if (locals.pb.authStore.isValid) throw redirect(303, "/admin")
        const data = await request.formData()
        const email = data.get('email') as string
        const password = data.get('password') as string
        const login = await locals.pb.collection('users').authWithPassword(email, password)
        if (!login) throw fail(400, { message: "Invalid credentials" })
        throw redirect(303, "/admin")
    }
}
