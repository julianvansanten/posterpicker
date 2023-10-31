import type { RequestHandler } from "@sveltejs/kit";

// TODO test
export const POST: RequestHandler = async ({ request, locals }) => {
    const {email, password} = await request.json()

    const {token, record} = await locals.pb.collection('users').authWithPassword(email, password)

    locals.user ={email, token}

    return new Response(JSON.stringify({token, record}))
}
