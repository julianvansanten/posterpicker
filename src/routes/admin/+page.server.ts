import { redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { fail } from "assert";

export const load: PageServerLoad = async ({ locals }) => {
    if (!locals.pb.authStore.isValid) throw redirect(303, "/admin/login")
}

export const actions: Actions = {
    logout: async ({ locals }) => {
        if (!locals.pb.authStore.isValid) throw fail("Not logged in")
        locals.pb.authStore.clear()
    }
}
