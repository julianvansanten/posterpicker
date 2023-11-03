/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b1qbdh9pkpop5d2")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b1qbdh9pkpop5d2")

  collection.viewRule = "@request.auth.id ?= @collection.users.id"

  return dao.saveCollection(collection)
})
