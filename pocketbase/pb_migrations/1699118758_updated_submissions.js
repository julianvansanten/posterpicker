/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dy6v9djy4bpqotb")

  // remove
  collection.schema.removeField("mlyaukio")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w65lyoz1",
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
    "id": "bvjfk2v1",
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
    "id": "qjkfpw3n",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mlyaukio",
    "name": "votes",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "b1qbdh9pkpop5d2",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("w65lyoz1")

  // remove
  collection.schema.removeField("bvjfk2v1")

  // remove
  collection.schema.removeField("qjkfpw3n")

  return dao.saveCollection(collection)
})
