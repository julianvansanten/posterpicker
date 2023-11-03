/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "dy6v9djy4bpqotb",
    "created": "2023-10-31 13:55:01.459Z",
    "updated": "2023-10-31 13:55:01.459Z",
    "name": "submissions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "d0jsewen",
        "name": "group",
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
      },
      {
        "system": false,
        "id": "mlyaukio",
        "name": "votes",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "b1qbdh9pkpop5d2",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("dy6v9djy4bpqotb");

  return dao.deleteCollection(collection);
})
