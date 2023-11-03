/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jhd9xae9ht5s05v")

  collection.listRule = "@request.data.email:isset = true && @request.data.group:isset = true"
  collection.viewRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jhd9xae9ht5s05v")

  collection.listRule = null
  collection.viewRule = "@request.data.email:isset = true && @request.data.group:isset = true"

  return dao.saveCollection(collection)
})
