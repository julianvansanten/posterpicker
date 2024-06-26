/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b1qbdh9pkpop5d2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4ontbfjo",
    "name": "name",
    "type": "text",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": 5,
      "max": 100,
      "pattern": "^[a-zA-Z0-9 ,.!?:\\-_()\\[\\]{}]*$"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b1qbdh9pkpop5d2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4ontbfjo",
    "name": "name",
    "type": "text",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": 5,
      "max": 50,
      "pattern": "^[a-zA-Z0-9 ,.!?]*$"
    }
  }))

  return dao.saveCollection(collection)
})
