/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b1qbdh9pkpop5d2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pd6i3sne",
    "name": "number",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b1qbdh9pkpop5d2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pd6i3sne",
    "name": "field",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
})
