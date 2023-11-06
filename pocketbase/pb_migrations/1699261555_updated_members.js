/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jhd9xae9ht5s05v")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_QHJEDzL` ON `members` (`email`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jhd9xae9ht5s05v")

  collection.indexes = []

  return dao.saveCollection(collection)
})
