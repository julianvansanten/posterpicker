/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dy6v9djy4bpqotb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aq2ezryt",
    "name": "first",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "b1qbdh9pkpop5d2",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dr4r7mug",
    "name": "second",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "b1qbdh9pkpop5d2",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "omnwv2h1",
    "name": "third",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "b1qbdh9pkpop5d2",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dy6v9djy4bpqotb")

  // remove
  collection.schema.removeField("aq2ezryt")

  // remove
  collection.schema.removeField("dr4r7mug")

  // remove
  collection.schema.removeField("omnwv2h1")

  return dao.saveCollection(collection)
})
