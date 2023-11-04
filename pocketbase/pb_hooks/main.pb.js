// PocketBase hooks

/** 
 * Add new route that allows checking if a member exists with the right group number
 */
routerAdd('POST', '/api/members/exists', (e) => {
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

/**
 * Add new route that checks if a group made a submission and edits this submission if it exists
 * or creates a new one if it doesn't
 */
routerAdd('POST', '/api/submissions/submit', (e) => {
    // A submission is made by a group voting on a list of 3 other groups
    const data = new DynamicModel({
        group: "",
        first: "",
        second: "",
        third: ""
    })

    e.bind(data)

    if (data.group === "" || data.first === "" || data.second === "" || data.third === "") {
        throw new BadRequestError("Invalid request")
    }
    if (data.first === data.second || data.first === data.third || data.second === data.third) {
        throw new BadRequestError("Duplicate group numbers")
    }
    if (data.group === data.first || data.group === data.second || data.group === data.third) {
        throw new BadRequestError("Cannot vote for yourself")
    }

    const records = $app.dao().findRecordsByFilter(
        "submissions",
        `group.id = {:group}`,
        "group",
        1,
        0,
        {group: data.group}
    )

    console.log(JSON.stringify(records))

    if (records.length > 0) {
        // Submission already exists, edit it
        const submission = $app.dao().findRecordById("submissions", records[0].id)
        submission.set("first", data.first)
        submission.set("second", data.second)
        submission.set("third", data.third)
        $app.dao().saveRecord(submission)
        return e.json(200, { message: "Submission updated" })
    } else {
        const collection = $app.dao().findCollectionByNameOrId("submissions")
        const submission = new Record(collection, {
            "group": data.group,
            "first": data.first,
            "second": data.second,
            "third": data.third
        })
        $app.dao().saveRecord(submission)
        return e.json(200, { message: "Submission created" })
    }
})
