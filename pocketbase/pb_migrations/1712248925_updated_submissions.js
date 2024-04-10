/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dy6v9djy4bpqotb")

  collection.listRule = "@request.auth.id ?= @collection.users.id"
  collection.viewRule = "@request.auth.id ?= @collection.users.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dy6v9djy4bpqotb")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
