// PocketBase hooks

/** 
 * Add new route that allows checking if a member exists with the right group number
 */
routerAdd('POST', '/api/members/exists', (e) => {
    const data = new DynamicModel({
        group: 0,
        email: "",
    })
    e.bind(data)
    if (data.group <= 0 || data.email === "") {
        console.info(`Received invalid request, group number or email is empty`)
        throw new BadRequestError("Invalid email and/or group number")
    }
    const record = $app.dao().findRecordsByFilter(
        'members',
        `group.number = ${data.group} && email = {:email}`,
        'email',
        10,
        0,
        { email: data.email }
    )
    // console.info(`${data.email} is ${record.length > 0 ? "" : "not "}a member of group ${data.group}`)
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
        console.info(`Received invalid request, one or more fields are empty`)
        throw new BadRequestError("Invalid request")
    }
    if (data.first === data.second || data.first === data.third || data.second === data.third) {
        console.info(`Received invalid request, duplicate group numbers`)
        throw new BadRequestError("Duplicate group numbers")
    }
    if (data.group === data.first || data.group === data.second || data.group === data.third) {
        console.info(`Received invalid request, vote was for own group`)
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

    if (records.length > 0) {
        // Submission already exists, edit it
        const submission = $app.dao().findRecordById("submissions", records[0].id)
        submission.set("first", data.first)
        submission.set("second", data.second)
        submission.set("third", data.third)
        $app.dao().saveRecord(submission)
        console.info(`Submission updated for group ${data.group}`)
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
        console.info(`Submission created for group ${data.group}`)
        return e.json(200, { message: "Submission created" })
    }
})
