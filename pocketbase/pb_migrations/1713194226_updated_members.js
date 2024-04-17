/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jhd9xae9ht5s05v")

  collection.listRule = "@request.auth.id ?= @collection.users.id"
  collection.viewRule = "@request.auth.id ?= @collection.users.id"
  collection.createRule = "@request.auth.id ?= @collection.users.id"
  collection.updateRule = "@request.auth.id ?= @collection.users.id"
  collection.deleteRule = "@request.auth.id ?= @collection.users.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jhd9xae9ht5s05v")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
