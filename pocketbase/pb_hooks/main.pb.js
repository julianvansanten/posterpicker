// PocketBase hooks

/** 
 * Add new route that allows checking if a member exists with the right group number
 */
routerAdd('POST', '/members/exists', (e) => {
    // const data = $apis.requestInfo(e).data
    // console.log(data.title)
    const data = new DynamicModel({
        group: 0,
        email: "",
    })
    e.bind(data)
    if (data.group <= 0 || data.email === "") {
        throw new BadRequestError("Invalid email and/or group number")
        // return e.json(400, { error: "Invalid request" })
    }
    const record = $app.dao().findRecordsByFilter(
        'members',
        `group.number = ${data.group} && email = {:email}`,
        'email',
        10,
        0,
        { email: data.email }
    )
    return e.json(200, { exists: record.length > 0 })
})
