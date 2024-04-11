import { redirect } from "@sveltejs/kit"
import type { PageServerLoad } from "../$types"

export const load: PageServerLoad = async ({ locals }) => {
    if (locals.pb.authStore.isValid) {
        locals.pb.authStore.clear()
    }
    throw redirect(304, '/admin/login')
}
