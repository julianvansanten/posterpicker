import { error, type RequestHandler } from "@sveltejs/kit";


export const DELETE: RequestHandler = async ({ request, locals }) => {
    const params = await request.json().catch(() => {
        throw error(400, "Invalid request")
    })

    const resp = await locals.pb.collection('groups').delete(params.group.id)

    if (resp) {
        return new Response("Deleted", { status: 204 })
    } else {
        return new Response("Not found", { status: 404 })
    }
}
