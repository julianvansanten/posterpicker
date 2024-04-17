import { error, json, type RequestHandler } from "@sveltejs/kit";


export const DELETE: RequestHandler = async ({ request, locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw error(401, "Unauthorized")
    }

    const params = await request.json().catch(() => {
        throw error(400, "Invalid request")
    })

    const resp = await locals.pb.collection('groups').delete(params.group.id).catch(() => {
        throw error(500, {message: `Group ${params.group.number} (${params.group.name}) has existing votes!`})
    })

    if (resp) {
        return json({message: `Deleted group ${params.group.number}`, group: params.group})
    } else {
        throw error(404, {message: "Not found"})
    }
}
